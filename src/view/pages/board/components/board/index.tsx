import { Order } from "../../../../../app/interface/Order";
import { useBoard } from "../boardContext/useBoard";
import { BoardColumn } from "./boardColumn";
import { OrderModal } from "./boardColumn/orderModal";

const orders: Order[] = [
  {
    _id: "dsadjsaijdsiaddwadw",
    table: "123",
    status: "DONE",
    createdAt: new Date(),
    products: [
      {
        _id: "djsaidjsaijdsjdisadwadwa",
        quantity: 1,
        product: {
          name: "Pizza de queijo",
          imagePath:
            "https://www.skymsen.com/uploads/blog/qual-o-melhor-queijo-para-pizza.jpg",
          price: 59.99,
        },
      },
      {
        _id: "djsaidjsaijdsjdisadwadwaewe",
        quantity: 1,
        product: {
          name: "Pizza de queijo",
          imagePath:
            "https://www.skymsen.com/uploads/blog/qual-o-melhor-queijo-para-pizza.jpg",
          price: 59.99,
        },
      },
    ],
  },
  {
    _id: "dsadjsaijdsiaewqewq",
    table: "123",
    status: "DONE",
    createdAt: new Date(),
    products: [
      {
        _id: "djsaidjsaijdsjdisagdfvc",
        quantity: 1,
        product: {
          name: "Pizza de queijo",
          imagePath:
            "https://www.skymsen.com/uploads/blog/qual-o-melhor-queijo-para-pizza.jpg",
          price: 59.99,
        },
      },
    ],
  },
  {
    _id: "dsadjsaijdsia",
    table: "123",
    status: "DOING",
    createdAt: new Date(),
    products: [
      {
        _id: "djsaidjsaijdsjdisa",
        quantity: 1,
        product: {
          name: "Pizza de queijo",
          imagePath:
            "https://www.skymsen.com/uploads/blog/qual-o-melhor-queijo-para-pizza.jpg",
          price: 59.99,
        },
      },
    ],
  },
];

export function DashboardOrders() {
  const { orderBeingViewed } = useBoard();

  return (
    <div className="w-full flex flex-1 gap-8 mt-10">
      <BoardColumn
        orders={orders.filter((order) => order.status === "WAITING")}
        icon="🕑"
        title="Fila de espera"
      />
      <BoardColumn
        orders={orders.filter((order) => order.status === "DOING")}
        icon="👨‍🍳"
        title="Em produção"
      />
      <BoardColumn
        orders={orders.filter((order) => order.status === "DONE")}
        icon="✅"
        title="Prontos"
      />
      {orderBeingViewed !== null && <OrderModal />}
    </div>
  );
}
