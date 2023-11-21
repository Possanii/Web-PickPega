import { Card } from "../../../../../../../components/Card";
import { Separator } from "../../../../../../../components/Separator";
// import { useMenu } from "../../../MenuContext/useMenu";

export function CardCategory({
  category,
  index,
}: {
  category: string;
  index: number;
}) {
  // const { openNewCategoryMenuModal, closeCategoryMenuModal } = useMenu();

  return (
    <Card.Root>
      <div
        className="w-full h-[40px] bg-gray-200 flex gap-10 items-center justify-center px-4"
        role="button"
        // onClick={() => {
        //   openNewCategoryMenuModal("EDIT", {
        //     category: category,
        //     index: index,
        //   });
        //   closeCategoryMenuModal();
        // }}
      >
        <span>{category}</span>
      </div>
      <Separator />
    </Card.Root>
  );
}
