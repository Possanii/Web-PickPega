import { cn } from "../../../../../../app/utils/cn";
import { formatCurrency } from "../../../../../../app/utils/formatCurrency";
import { Card } from "../../../../../../components/Card";

interface CardMenuProps {
  active?: boolean;
}

export function CardMenu({ active = true }: CardMenuProps) {
  return (
    <Card.Root>
      <div className="w-full h-[160px] bg-gray-200 flex gap-10 items-center">
        <div className="md:w-1/5 w-2/5">
          <img
            className=" aspect-auto h-24 ml-10"
            src="https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG"
          />
        </div>
        <div className="flex flex-col gap-4 w-3/5 md:w-full">
          <span className="overflow-x-hidden overflow-y-hidden font-semibold">
            X-TUDO
          </span>
          <span className="h-12 w-full font-extralight overflow-x-hidden text-ellipsis">
            Delicioso hambúrguer de carne bovina, cebola roxa, picles, alface,
            queijo, bacon e pão com gergelim
          </span>
          <span>{formatCurrency(99.99)}</span>
        </div>
        <div className="md:w-1/5 hidden md:block">
          <div
            className={cn(
              "bg-green-300 rounded-lg p-1 font-light tracking-wide w-fit",
              !active && "bg-red-300"
            )}
          >
            ATIVO
          </div>
        </div>
      </div>
      <div className="w-full h-[160px] bg-gray-200 flex gap-10 items-center">
        <div className="w-1/5">
          <img
            className=" aspect-auto h-24 ml-10"
            src="https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG"
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <span className="overflow-x-hidden overflow-y-hidden font-semibold">
            X-TUDO
          </span>
          <span className="h-12 w-full font-extralight overflow-x-hidden text-ellipsis">
            Delicioso hambúrguer de carne bovina, cebola roxa, picles, alface,
            queijo, bacon e pão com gergelim
          </span>
          <span>{formatCurrency(99.99)}</span>
        </div>
        <div className="w-1/5">
          <div
            className={cn(
              "bg-green-300 rounded-lg p-1 font-light tracking-wide w-fit",
              !active && "bg-red-300"
            )}
          >
            ATIVO
          </div>
        </div>
      </div>
      <div className="w-full h-[160px] bg-gray-200 flex gap-10 items-center">
        <div className="w-1/5">
          <img
            className=" aspect-auto h-24 ml-10"
            src="https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG"
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <span className="overflow-x-hidden overflow-y-hidden font-semibold">
            X-TUDO
          </span>
          <span className="h-12 w-full font-extralight overflow-x-hidden text-ellipsis">
            Delicioso hambúrguer de carne bovina, cebola roxa, picles, alface,
            queijo, bacon e pão com gergelim
          </span>
          <span>{formatCurrency(99.99)}</span>
        </div>
        <div className="w-1/5 hidden">
          <div
            className={cn(
              "bg-green-300 rounded-lg p-1 font-light tracking-wide w-fit",
              !active && "bg-red-300"
            )}
          >
            ATIVO
          </div>
        </div>
      </div>
      <div className="w-full h-[160px] bg-gray-200 flex gap-10 items-center">
        <div className="w-1/5">
          <img
            className=" aspect-auto h-24 ml-10"
            src="https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG"
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <span className="overflow-x-hidden overflow-y-hidden font-semibold">
            X-TUDO
          </span>
          <span className="h-12 w-full font-extralight overflow-x-hidden text-ellipsis">
            Delicioso hambúrguer de carne bovina, cebola roxa, picles, alface,
            queijo, bacon e pão com gergelim
          </span>
          <span>{formatCurrency(99.99)}</span>
        </div>
        <div className="w-1/5">
          <div
            className={cn(
              "bg-green-300 rounded-lg p-1 font-light tracking-wide w-fit",
              !active && "bg-red-300"
            )}
          >
            ATIVO
          </div>
        </div>
      </div>
      <div className="w-full h-[160px] bg-gray-200 flex gap-10 items-center">
        <div className="w-1/5">
          <img
            className=" aspect-auto h-24 ml-10"
            src="https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG"
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <span className="overflow-x-hidden overflow-y-hidden font-semibold">
            X-TUDO
          </span>
          <span className="h-12 w-full font-extralight overflow-x-hidden text-ellipsis">
            Delicioso hambúrguer de carne bovina, cebola roxa, picles, alface,
            queijo, bacon e pão com gergelim
          </span>
          <span>{formatCurrency(99.99)}</span>
        </div>
        <div className="w-1/5">
          <div
            className={cn(
              "bg-green-300 rounded-lg p-1 font-light tracking-wide w-fit",
              !active && "bg-red-300"
            )}
          >
            ATIVO
          </div>
        </div>
      </div>
      <div className="w-full h-[160px] bg-gray-200 flex gap-10 items-center">
        <div className="w-1/5">
          <img
            className=" aspect-auto h-24 ml-10"
            src="https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG"
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <span className="overflow-x-hidden overflow-y-hidden font-semibold">
            X-TUDO
          </span>
          <span className="h-12 w-full font-extralight overflow-x-hidden text-ellipsis">
            Delicioso hambúrguer de carne bovina, cebola roxa, picles, alface,
            queijo, bacon e pão com gergelim
          </span>
          <span>{formatCurrency(99.99)}</span>
        </div>
        <div className="w-1/5">
          <div
            className={cn(
              "bg-green-300 rounded-lg p-1 font-light tracking-wide w-fit",
              !active && "bg-red-300"
            )}
          >
            ATIVO
          </div>
        </div>
      </div>
      <div className="w-full h-[160px] bg-gray-200 flex gap-10 items-center">
        <div className="w-1/5">
          <img
            className=" aspect-auto h-24 ml-10"
            src="https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG"
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <span className="overflow-x-hidden overflow-y-hidden font-semibold">
            X-TUDO
          </span>
          <span className="h-12 w-full font-extralight overflow-x-hidden text-ellipsis">
            Delicioso hambúrguer de carne bovina, cebola roxa, picles, alface,
            queijo, bacon e pão com gergelim
          </span>
          <span>{formatCurrency(99.99)}</span>
        </div>
        <div className="w-1/5">
          <div
            className={cn(
              "bg-green-300 rounded-lg p-1 font-light tracking-wide w-fit",
              !active && "bg-red-300"
            )}
          >
            ATIVO
          </div>
        </div>
      </div>
      <div className="w-full h-[160px] bg-gray-200 flex gap-10 items-center">
        <div className="w-1/5">
          <img
            className=" aspect-auto h-24 ml-10"
            src="https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG"
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <span className="overflow-x-hidden overflow-y-hidden font-semibold">
            X-TUDO
          </span>
          <span className="h-12 w-full font-extralight overflow-x-hidden text-ellipsis">
            Delicioso hambúrguer de carne bovina, cebola roxa, picles, alface,
            queijo, bacon e pão com gergelim
          </span>
          <span>{formatCurrency(99.99)}</span>
        </div>
        <div className="w-1/5">
          <div
            className={cn(
              "bg-green-300 rounded-lg p-1 font-light tracking-wide w-fit",
              !active && "bg-red-300"
            )}
          >
            ATIVO
          </div>
        </div>
      </div>
      <div className="w-full h-[160px] bg-gray-200 flex gap-10 items-center">
        <div className="w-1/5">
          <img
            className=" aspect-auto h-24 ml-10"
            src="https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG"
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <span className="overflow-x-hidden overflow-y-hidden font-semibold">
            X-TUDO
          </span>
          <span className="h-12 w-full font-extralight overflow-x-hidden text-ellipsis">
            Delicioso hambúrguer de carne bovina, cebola roxa, picles, alface,
            queijo, bacon e pão com gergelim
          </span>
          <span>{formatCurrency(99.99)}</span>
        </div>
        <div className="w-1/5">
          <div
            className={cn(
              "bg-green-300 rounded-lg p-1 font-light tracking-wide w-fit",
              !active && "bg-red-300"
            )}
          >
            ATIVO
          </div>
        </div>
      </div>
      <div className="w-full h-[160px] bg-gray-200 flex gap-10 items-center">
        <div className="w-1/5">
          <img
            className=" aspect-auto h-24 ml-10"
            src="https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG"
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <span className="overflow-x-hidden overflow-y-hidden font-semibold">
            X-TUDO
          </span>
          <span className="h-12 w-full font-extralight overflow-x-hidden text-ellipsis">
            Delicioso hambúrguer de carne bovina, cebola roxa, picles, alface,
            queijo, bacon e pão com gergelim
          </span>
          <span>{formatCurrency(99.99)}</span>
        </div>
        <div className="w-1/5">
          <div
            className={cn(
              "bg-green-300 rounded-lg p-1 font-light tracking-wide w-fit",
              !active && "bg-red-300"
            )}
          >
            ATIVO
          </div>
        </div>
      </div>
      <div className="w-full h-[160px] bg-gray-200 flex gap-10 items-center">
        <div className="w-1/5">
          <img
            className=" aspect-auto h-24 ml-10"
            src="https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG"
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <span className="overflow-x-hidden overflow-y-hidden font-semibold">
            X-TUDO
          </span>
          <span className="h-12 w-full font-extralight overflow-x-hidden text-ellipsis">
            Delicioso hambúrguer de carne bovina, cebola roxa, picles, alface,
            queijo, bacon e pão com gergelim
          </span>
          <span>{formatCurrency(99.99)}</span>
        </div>
        <div className="w-1/5">
          <div
            className={cn(
              "bg-green-300 rounded-lg p-1 font-light tracking-wide w-fit",
              !active && "bg-red-300"
            )}
          >
            ATIVO
          </div>
        </div>
      </div>
      <div className="w-full h-[160px] bg-gray-200 flex gap-10 items-center">
        <div className="w-1/5">
          <img
            className=" aspect-auto h-24 ml-10"
            src="https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG"
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <span className="overflow-x-hidden overflow-y-hidden font-semibold">
            X-TUDO
          </span>
          <span className="h-12 w-full font-extralight overflow-x-hidden text-ellipsis">
            Delicioso hambúrguer de carne bovina, cebola roxa, picles, alface,
            queijo, bacon e pão com gergelim
          </span>
          <span>{formatCurrency(99.99)}</span>
        </div>
        <div className="w-1/5">
          <div
            className={cn(
              "bg-green-300 rounded-lg p-1 font-light tracking-wide w-fit",
              !active && "bg-red-300"
            )}
          >
            ATIVO
          </div>
        </div>
      </div>
    </Card.Root>
  );
}
