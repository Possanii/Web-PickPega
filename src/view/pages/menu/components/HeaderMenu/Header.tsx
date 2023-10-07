import { Button } from "../../../../../components/Button";
import { Modal } from "../../../../../components/Modal";
import { Separator } from "../../../../../components/Separator";
import { useHeaderMenuController } from "./useHeaderController";

export function HeaderMenu() {
  const {
    isNewItemMenuModalOpen,
    openNewItemMenuModal,
    closeNewItemMenuModal,
  } = useHeaderMenuController();

  return (
    <header>
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-semibold">Cardápio</h1>
        <p className="text-base">
          Seu cardápio é sua vitrine de produtos no pick pega.
        </p>
        <Separator />
      </div>
      <div className="flex">
        <div className="flex w-full justify-end items-center">
          <Button
            text="Novo produto"
            className="w-[160px]"
            onClick={openNewItemMenuModal}
          />
        </div>
        <Modal
          open={isNewItemMenuModalOpen}
          title="Modal"
          onClose={closeNewItemMenuModal}
        >
          oi
        </Modal>
      </div>
    </header>
  );
}
