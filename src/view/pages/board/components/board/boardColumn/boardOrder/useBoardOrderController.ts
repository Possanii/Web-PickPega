import { useBoard } from "../../../boardContext/useBoard";

export function useBoardOrderController() {
  const { handleOpenOrderModal } = useBoard();

  return {
    handleOpenOrderModal,
  };
}
