import { Button } from "../../../../../../components/Button";
import { Modal } from "../../../../../../components/Modal";
import { CardCategory } from "./cards";
import { useCategoriesModal } from "./useCategoriesModal";
import emptyStateImage from "../../../../../../assets/images/empty-state.svg";

export function CategoriesModal() {
  const {
    isCategoryMenuModalOpen,
    closeCategoryMenuModal,
    categories,
    openNewCategoryMenuModal,
  } = useCategoriesModal();

  const hasCategories = categories.length !== 0;

  return (
    <Modal
      open={isCategoryMenuModalOpen}
      title="Categorias"
      onClose={closeCategoryMenuModal}
    >
      {!hasCategories && (
        <div className="h-full flex flex-col justify-center items-center">
          <img src={emptyStateImage} className="h-40 w-40" />
          <span>Nenhuma categoria encontrado.</span>
          <Button
            text="Cadastrar categoria"
            onClick={() => {
              openNewCategoryMenuModal("NEW"), closeCategoryMenuModal();
            }}
            className="w-auto"
          />
        </div>
      )}
      {hasCategories && (
        <div>
          <div className="flex flex-col max-h-[260px] overflow-y-auto">
            {categories.map((category, index) => {
              return (
                <CardCategory key={index} category={category} index={index} />
              );
            })}
          </div>
          <div className="flex justify-center mt-4">
            <Button
              text="Cadastrar categoria"
              onClick={() => {
                openNewCategoryMenuModal("NEW"), closeCategoryMenuModal();
              }}
              className="w-auto"
            />
          </div>
        </div>
      )}
    </Modal>
  );
}
