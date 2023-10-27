import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useMenu } from "../MenuContext/useMenu";
import { useUser } from "../../../../../app/hooks/useUser";
import { itemsService } from "../../../../../app/services/itemsService";
import { Item } from "../../../../../app/interface/Item";

export function useMenuController() {
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const queryClient = useQueryClient();

  const {
    openNewItemMenuModal,
    openNewCategoryMenuModal,
    filterValue,
    onFilterChange,
  } = useMenu();

  const { user } = useUser();

  const filter: string[] = ["Todos"];

  async function handleItems() {
    const categories = Object.entries(
      await itemsService.getAllItems(user!.uid)
    );

    if (categories.length === 0) {
      return categories;
    }

    categories.map((element) => {
      filter.push(element[0]);
    });

    queryClient.invalidateQueries({ queryKey: ["categories"] });

    return categories;
  }

  const {
    data,
    isLoading: isInitialLoading,
    isFetching,
  } = useQuery({
    queryKey: ["items"],
    queryFn: async () => await handleItems(),
    staleTime: Infinity,
  });

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => filter,
    staleTime: Infinity,
  });

  let itemsFilter: [string, Record<string, Item[]>][] | undefined;

  if (filterValue === "Todos") {
    itemsFilter = data;
  } else {
    itemsFilter = data?.filter((category) => category[0] === filterValue);
  }

  return {
    sliderState,
    setSliderState,
    items: itemsFilter ?? data ?? [],
    filterOptions: categories ?? [],
    openNewItemMenuModal,
    openNewCategoryMenuModal,
    isInitialLoading,
    isFetching,
    onFilterChange,
  };
}
