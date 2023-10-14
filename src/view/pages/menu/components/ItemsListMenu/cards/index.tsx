import { Item } from "../../../../../../app/interface/Item";
import { cn } from "../../../../../../app/utils/cn";
import { formatCurrency } from "../../../../../../app/utils/formatCurrency";
import { Card } from "../../../../../../components/Card";
import { Separator } from "../../../../../../components/Separator";
import { useMenu } from "../../MenuContext/useMenu";

export function CardMenu({ item }: { item: Item }) {
  const { openEditItemMenuModal } = useMenu();

  return (
    <Card.Root>
      <div
        className="w-full h-[160px] bg-gray-200 flex gap-10 items-center justify-center px-4"
        role="button"
        onClick={() => openEditItemMenuModal(item)}
      >
        <div className="flex justify-center md:w-1/5 w-2/5">
          <img className=" aspect-video " src={item.foto} />
        </div>
        <div className="flex flex-col gap-4 w-3/5 md:w-full">
          <span className="overflow-x-hidden overflow-y-hidden font-semibold">
            {item.nome}
          </span>
          <span className="h-12 w-full font-extralight overflow-x-hidden text-ellipsis">
            {item.description}
          </span>
          <span>{formatCurrency(item.valor)}</span>
        </div>
        <div className="md:w-1/5 hidden md:block">
          <div
            className={cn(
              "bg-green-300 rounded-lg p-1 font-light tracking-wide w-fit",
              !item.active && "bg-red-300"
            )}
          >
            {item.active && "ATIVO"}
            {!item.active && "INATIVO"}
          </div>
        </div>
      </div>
      <Separator />
    </Card.Root>
  );
}
