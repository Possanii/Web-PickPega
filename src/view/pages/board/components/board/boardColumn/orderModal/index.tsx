import { formatCurrency } from "../../../../../../../app/utils/formatCurrency";
import { Button } from "../../../../../../../components/Button";
import { Modal } from "../../../../../../../components/Modal";
import { useOrderModalController } from "./useOrderModalController";

export function OrderModal() {
  const {
    isOpenOrderModalOpen,
    handleCloseOrderModal,
    orderBeingViewed,
    totalPrice,
    handleStatusOrder,
    isLoading,
  } = useOrderModalController();

  return (
    <Modal
      open={isOpenOrderModalOpen}
      title={`Mesa ${orderBeingViewed!.table}`}
      onClose={handleCloseOrderModal}
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col justify-center items-start gap-2">
          <h3 className="text-sm font-medium leading-[21px] text-gray-500/80">
            Status do Pedido
          </h3>
          <span>
            {orderBeingViewed!.status === "Em espera"
              ? "🕑 Fila de espera"
              : orderBeingViewed!.status === "Em produção"
              ? "👨‍🍳 Em produção"
              : "✅ Prontos"}
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-sm font-medium leading-[21px] text-gray-500/80 mb-4">
            Itens
          </h3>
          <div className="flex flex-col gap-4 mb-6">
            {orderBeingViewed!.products.map((product) => {
              return (
                <div key={product.name} className="flex items-center">
                  <img
                    className="w-12 h-10 mr-3"
                    alt="Imagem do produto"
                    src={product.picture}
                  />
                  <div className="flex gap-4">
                    <span className="text-sm font-normal leading-[21px] text-gray-500/80">
                      {product.qntd}x
                    </span>
                    <div className="flex flex-col">
                      <span className="font-semibold leading-6">
                        {product.name}
                      </span>
                      <span className="text-sm leading-[21px] font-normal text-gray-500/80">
                        {formatCurrency(Number(product.price))}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between items-center">
              <span className="text-sm font-medium leading-[21px] text-gray-500/80">
                Total
              </span>
              <span>{formatCurrency(totalPrice)}</span>
            </div>
            <div className="flex flex-row justify-between items-center">
              <span className="text-sm font-medium leading-[21px] text-gray-500/80">
                Pagamento
              </span>
              <span>{orderBeingViewed!.payment}</span>
            </div>
          </div>
        </div>
        {orderBeingViewed?.status !== "Finalizado" && (
          <div className="flex gap-4">
            <Button
              text="Cancelar Pedido"
              className="bg-transparent text-red-600 disabled:bg-transparent disabled:text-red-600/50"
              disabled={isLoading}
            />

            <Button
              text={
                orderBeingViewed?.status === "Em espera"
                  ? "Aceitar pedido"
                  : "Concluir Pedido"
              }
              onClick={handleStatusOrder}
              isLoading={isLoading}
            />
          </div>
        )}
      </div>
    </Modal>
  );
}
