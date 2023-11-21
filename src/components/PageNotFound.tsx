import { Transition } from "@headlessui/react";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

export function PageNotFound() {
  return (
    <Transition
      show={true}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="bg-light-yellow fixed top-0 left-0 w-full h-full grid place-items-center">
        <div className="flex items-center gap-10">
          <img src={Logo} className="h-40" />
          <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="text-3xl">PÁGINA NÃO ENCONTRADA 😭</h1>
            <p>Não encontramos a página que você está procurando.</p>
            <div className="flex justify-center items-center">
              <Link to="/dashboard">Ir para Dashboard</Link>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
