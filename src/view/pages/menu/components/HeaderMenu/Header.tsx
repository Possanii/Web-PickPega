import { Button } from "../../../../../components/Button";
import { Separator } from "../../../../../components/Separator";
import { useHeaderMenuController } from "./useHeaderController";

export function HeaderMenu() {
  const { openNewItemMenuModal } = useHeaderMenuController();

  return (
    <>
      <h1 className="text-5xl font-semibold">Cardápio</h1>
      <p className="text-base">
        Seu cardápio é sua vitrine de produtos no pick pega.
      </p>
      <Separator />
      <div className="flex">
        <div className="flex w-full justify-end items-center">
          <Button
            text="Novo produto"
            className="w-[160px]"
            onClick={openNewItemMenuModal}
          />
        </div>
      </div>
    </>
  );
}
