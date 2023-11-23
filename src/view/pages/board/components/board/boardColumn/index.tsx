import { Order } from "../../../../../../app/interface/Order";
import { BoardOrder } from "./boardOrder";

interface BoardColumnProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function BoardColumn({ icon, title, orders }: BoardColumnProps) {
  return (
    <div className="flex flex-col gap-4 w-full min-w-[300px] p-2 border rounded-2xl">
      <header className="flex justify-center items-center gap-2 p-2 text-sm">
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>
      {orders.length > 0 && (
        <div className="flex flex-col gap-4">
          {orders.map((order) => {
            return <BoardOrder key={order.name} order={order} />;
          })}
        </div>
      )}
    </div>
  );
}
