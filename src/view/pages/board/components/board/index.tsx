import { BoardColumn } from "./boardColumn";

export function DashboardOrders() {
  return (
    <div className="w-full flex flex-1 gap-8 mt-10">
      <BoardColumn icon="🕑" title="Fila de espera" />
      <BoardColumn icon="👨‍🍳" title="Em produção" />
      <BoardColumn icon="✅" title="Prontos" />
    </div>
  );
}
