import { Swiper, SwiperSlide } from "swiper/react";
import { MenuSliderNavigation } from "./MenuSliderNavigation";
import { useMenuController } from "./useMenuController";
import { CATEGORIES } from "../../../../../app/constants/categories";
import { SliderOptions } from "./SliderOptions";

// Import Swiper styles
import "swiper/css";
import { CardMenu } from "./cards";

export function ItemsListMenu() {
  const { sliderState, setSliderState } = useMenuController();

  return (
    <div className="w-full mt-10">
      <strong className="text-light-yellow text-lg font-bold">
        Categorias
      </strong>
      <div className="mt-2 mb-4">
        <Swiper
          spaceBetween={16}
          slidesPerView={3}
          onSlideChange={(swiper) => {
            setSliderState({
              isBeginning: swiper.isBeginning,
              isEnd: swiper.isEnd,
            });
          }}
          centeredSlides
        >
          <MenuSliderNavigation
            isBeginning={sliderState.isBeginning}
            isEnd={sliderState.isEnd}
          />
          {CATEGORIES.map((category, index) => (
            <SwiperSlide key={category}>
              {({ isActive }) => (
                <SliderOptions
                  category={category}
                  isActive={isActive}
                  index={index}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <CardMenu />
    </div>
  );
}
