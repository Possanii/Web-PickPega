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
    <div className="flex gap-4 mb-4">
      <button
        className="py-3 pl-2.5 pr-3.5 rounded-full enabled:bg-light-yellow bg-black/10 transition-colors disabled:opacity-40"
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
      >
        <ChevronLeftIcon className="text-white w-6 h-6" />
      </button>
      <button
        className="py-3 pl-2.5 pr-3.5 rounded-full enabled:bg-light-yellow bg-black/10 transition-colors disabled:opacity-40"
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
      >
        <ChevronRightIcon className="text-white w-6 h-6" />
      </button>
    </div>
  );
}
