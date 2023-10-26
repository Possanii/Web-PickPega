import toast from "react-hot-toast";

interface BoardOrderProps {
  table: string;
}

export function BoardOrder({ table }: BoardOrderProps) {
  return (
    <div
      className="flex flex-col justify-center items-center border rounded-lg h-[128px]"
      role="button"
      onClick={() => toast.success("clicou")}
    >
      <strong>{table}</strong>
      <span className="opacity-50">2 Items</span>
    </div>
  );
}
