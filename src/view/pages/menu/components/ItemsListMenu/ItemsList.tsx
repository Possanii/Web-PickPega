import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { MenuSliderNavigation } from "./MenuSliderNavigation";
import { Button } from "../../../../../components/Button";
import { useMenuController } from "./useMenuController";

export function ItemsListMenu() {
  const { sliderState, setSliderState } = useMenuController();

  return (
    <div className="w-full mt-10">
      <Swiper
        spaceBetween={16}
        slidesPerView={3}
        onSlideChange={(swiper) => {
          setSliderState({
            isBeginning: swiper.isBeginning,
            isEnd: swiper.isEnd,
          });
        }}
      >
        <div
          className="flex items-center justify-between"
          slot="container-start"
        >
          <strong className="text-light-yellow text-lg font-bold">
            Categorias
          </strong>
          <MenuSliderNavigation
            isBeginning={sliderState.isBeginning}
            isEnd={sliderState.isEnd}
          />
        </div>
        <SwiperSlide>
          <Button text="oi" />
        </SwiperSlide>
        <SwiperSlide>
          <Button text="oi" />
        </SwiperSlide>
        <SwiperSlide>
          <Button text="oi" />
        </SwiperSlide>
        <SwiperSlide>
          <Button text="oi" />
        </SwiperSlide>
        <SwiperSlide>
          <Button text="oi" />
        </SwiperSlide>
        <SwiperSlide>
          <Button text="oi" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
