import React, { useCallback, useState } from "react";
import * as RdxToast from "@radix-ui/react-toast";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { cn } from "../app/utils/cn";

export interface ToastProps {
  title: string;
  content: string;
  buttonAction?: boolean;
  linkButtonAction?: string;
}

export interface ToastHandles {
  publish: () => void;
}

export const Toast = React.forwardRef<ToastHandles, ToastProps>(
  (
    { title, content, buttonAction = false, linkButtonAction },
    forwardedRef
  ) => {
    const [visible, setVisible] = useState(false);
    const isMd = useMediaQuery("(min-width: 768px)");

    const openToast = useCallback(() => {
      setVisible(true);
    }, []);

    React.useImperativeHandle(forwardedRef, () => ({
      publish: () => openToast(),
    }));

    return (
      <>
        <RdxToast.Provider swipeDirection={isMd ? "right" : "down"}>
          <RdxToast.Root
            open={visible}
            onOpenChange={setVisible}
            className={cn(
              "z-50 fixed bottom-4 inset-x-4 w-auto md:top-4 md:right-4 md:left-auto md:bottom-auto md:w-full md:max-w-sm shadow-lg rounded-lg",
              "bg-light-yellow",
              "data-[state=open]:animate-toast-slide-in-bottom md:data-[state=open]:animate-toast-slide-in-right",
              "data-[state=closed]:animate-toast-hide",
              "data-[swipe=direction-right]:data-[swipe=end]:animate-toast-swipe-out-x",
              "data-[swipe=direction-right]:translate-x-data-toast-swipe-move-x",
              "data-[swipe=direction-down]:data-[swipe=end]:animate-toast-swipe-out-y",
              "data-[swipe=direction-down]:translate-y-data-toast-swipe-move-y",
              "data-{swipe=cancel}:translate-x-0 data-[swipe=cancel]:duration-200 data-swipe-cancel:ease-[ease]",
              "focus:outline-none focus-visible:ring focus-visible:ring-light-blue focus-visible:ring-opacity-75"
            )}
          >
            <div className="flex">
              <div className="w-0 flex-1 flex items-center pl-5 py-4">
                <div className="w-full radix">
                  <RdxToast.Title className="text-sm font-medium text-black">
                    {title}
                  </RdxToast.Title>
                  <RdxToast.Description className="mt-1 text-sm text-black/70 ">
                    {content}
                  </RdxToast.Description>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col px-3 py-2 space-y-1">
                  {buttonAction && (
                    <div className="h-0 flex-1 flex">
                      <RdxToast.Action
                        altText="ver agora"
                        className="w-full border border-transparent rounded-lg px-3 py-2 flex items-center justify-center text-sm font-medium text-black hover:bg-light-blue focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-light-blue focus-visible:ring-opacity-75"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(linkButtonAction);
                        }}
                      >
                        Ver
                      </RdxToast.Action>
                    </div>
                  )}
                  <div className="h-0 flex-1 flex">
                    <RdxToast.Close className="w-full border border-transparent rounded-lg px-3 py-2 flex items-center justify-center text-sm font-medium text-red-500 hover:bg-light-blue focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-light-blue focus-visible:ring-opacity-75">
                      Fechar
                    </RdxToast.Close>
                  </div>
                </div>
              </div>
            </div>
          </RdxToast.Root>

          <RdxToast.Viewport />
        </RdxToast.Provider>
      </>
    );
  }
);

Toast.displayName = "Toast";
