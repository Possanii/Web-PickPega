import { Card } from "../../../../../../components/Card";

export function CardMenu() {
  return (
    <Card.Root>
      <div className="w-full h-[120px] bg-gray-200 flex gap-10 items-center">
        <div className="">
          <img
            className=" aspect-auto h-20 ml-10"
            src="https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG"
          />
        </div>
        <div className="flex flex-col gap-4 w-1/2">
          <span className="overflow-x-hidden overflow-y-hidden font-semibold">
            X-TUDO
          </span>
          <span className="h-12 w-full font-extralight overflow-x-hidden text-ellipsis">
            Delicioso hambúrguer de carne bovina, cebola roxa, picles, alface,
            queijo, bacon e pão com gergelim
          </span>
        </div>
      </div>
    </Card.Root>
  );
}
