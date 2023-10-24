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

  const { openNewItemMenuModal, openNewCategoryMenuModal } = useMenu();

  const { user } = useUser();

  const { data, isLoading: isInitialLoading } = useQuery({
    queryKey: ["items"],
    queryFn: async () => await itemsService.getAllItems(user!.uid),
    staleTime: Infinity,
  });

  return {
    sliderState,
    setSliderState,
    items: data ?? [],
    filterOptions: user?.categories ?? [],
    openNewItemMenuModal,
    openNewCategoryMenuModal,
    isInitialLoading,
    isLoading: false,
  };
}
