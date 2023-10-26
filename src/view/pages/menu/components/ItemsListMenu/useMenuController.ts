import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useMenu } from "../MenuContext/useMenu";
import { useUser } from "../../../../../app/hooks/useUser";
import { itemsService } from "../../../../../app/services/itemsService";

export function useMenuController() {
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });
  const [filterOptions, setFilterOptions] = useState<string[]>([]);

  const {
    openNewItemMenuModal,
    openNewCategoryMenuModal,
    currentFilterOptions,
  } = useMenu();

  const { user } = useUser();

  async function handleItems() {
    const categories = Object.entries(
      await itemsService.getAllItems(user!.uid)
    );

    if (categories.length === 0) {
      return categories;
    }

    const filter: string[] = [];

    categories.map((element) => {
      filter.push(element[0]);
    });

    setFilterOptions(filter);

    currentFilterOptions(filter);

    return categories;
  }

  const { data, isLoading: isInitialLoading } = useQuery({
    queryKey: ["items"],
    queryFn: async () => await handleItems(),
    staleTime: Infinity,
  });

  return {
    sliderState,
    setSliderState,
    items: data ?? [],
    filterOptions,
    openNewItemMenuModal,
    openNewCategoryMenuModal,
    isInitialLoading,
    isLoading: false,
  };
}
