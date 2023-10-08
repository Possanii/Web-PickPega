import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

interface MenuSliderNavigationProps {
  isBeginning?: boolean;
  isEnd?: boolean;
}

export function MenuSliderNavigation({
  isBeginning,
  isEnd,
}: MenuSliderNavigationProps) {
  const swiper = useSwiper();

  return (
    <>
      <button
        className="p-2.5 h-[52px] z-10 rounded-full enabled:bg-light-yellow bg-black/10 transition-colors disabled:opacity-40 absolute left-0 top-2"
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
      >
        <ChevronLeftIcon className="text-white w-6 h-6" />
      </button>
      <button
        className="p-2.5 h-[52px] z-10 rounded-full enabled:bg-light-yellow bg-black/10 transition-colors disabled:opacity-40 absolute right-0 top-2"
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
      >
        <ChevronRightIcon className="text-white w-6 h-6" />
      </button>
    </>
  );
}
