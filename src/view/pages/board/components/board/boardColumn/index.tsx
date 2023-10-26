import { BoardOrder } from "./boardOrder";

interface BoardColumnProps {
  icon: string;
  title: string;
}

export function BoardColumn({ icon, title }: BoardColumnProps) {
  return (
    <div className="flex flex-col gap-4 w-full min-w-[300px] p-2 border rounded-2xl">
      <header className="flex justify-center items-center gap-2 p-2 text-sm">
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>(1)</span>
      </header>
      <body className="flex flex-col gap-4">
        <BoardOrder table="Mesa X" />
      </body>
    </div>
  );
}
