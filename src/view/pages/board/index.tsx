import { Container } from "../../../components/Container";
import { DashboardOrders } from "./components/board";
import { BoardProvider } from "./components/boardContext";
import { BoardHeader } from "./components/boardHeader";

export function BoardOrders() {
  return (
    <BoardProvider>
      <Container className="w-full max-w-[1216px]">
        <BoardHeader />
        <DashboardOrders />
      </Container>
    </BoardProvider>
  );
}
