import { Transition } from "@headlessui/react";
import { Spinner } from "./Spinner";
import Logo from "../assets/images/Logo.png";

interface PageLoaderProps {
  isLoading: boolean;
}

export function PageLoader({ isLoading }: PageLoaderProps) {
  return (
    <Transition
      show={isLoading}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="bg-light-yellow fixed top-0 left-0 w-full h-full grid place-items-center">
        <div className="flex flex-col items-center gap-4">
          <img src={Logo} className="h-40" />
          <Spinner className="h-10 w-10" />
        </div>
      </div>
    </Transition>
  );
}
