import Logo from "../../../../../assets/images/Logo.png";

export function BoardHeader() {
  return (
    <div className="flex justify-between items-center h-[198px] bg-light-yellow p-10">
      <div className="flex flex-col justify-center items-start gap-2">
        <h1 className="text-4xl font-semibold">Pedidos</h1>
        <h2 className="text-lg font-normal opacity-50">
          Acompanhe os pedidos dos clientes
        </h2>
      </div>
      <div>
        <img src={Logo} className="w-32" alt="PickPega Logo" />
      </div>
    </div>
  );
}
