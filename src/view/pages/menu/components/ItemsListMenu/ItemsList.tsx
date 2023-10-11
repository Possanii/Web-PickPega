import { Swiper, SwiperSlide } from "swiper/react";
import { MenuSliderNavigation } from "./MenuSliderNavigation";
import { useMenuController } from "./useMenuController";
import { SliderOptions } from "./SliderOptions";
import emptyStateImage from "../../../../../assets/images/empty-state.svg";
import { CardMenu } from "./cards";
import { Button } from "../../../../../components/Button";
import { Spinner } from "../../../../../components/Spinner";

// Import Swiper styles
import "swiper/css";

export function ItemsListMenu() {
  const {
    sliderState,
    setSliderState,
    items,
    isInitialLoading,
    isLoading,
    openNewItemMenuModal,
    filterOptions,
  } = useMenuController();

  const hasItems = items.length > 0;

  return (
    <div>
      {isInitialLoading && (
        <div className="flex flex-col items-center justify-center h-full">
          <Spinner className="h-40 w-40" />
        </div>
      )}

      {!isInitialLoading && (
        <div>
          {!hasItems && (
            <div className="h-full flex flex-col justify-center items-center">
              <img src={emptyStateImage} className="h-40 w-40" />
              <span>Nenhum item encontrado.</span>
              <Button
                text="Cadastrar item"
                onClick={openNewItemMenuModal}
                className="w-40"
              />
            </div>
          )}
          {hasItems && (
            <div className="flex flex-col">
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
                  {filterOptions.map((item, index) => (
                    <SwiperSlide key={index}>
                      {({ isActive }) => (
                        <SliderOptions
                          category={item}
                          isActive={isActive}
                          index={index}
                        />
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {isLoading && (
                <div className="flex flex-col items-center justify-center h-full">
                  <Spinner className="h-40 w-40" />
                </div>
              )}
              {!isLoading && (
                <div className="flex flex-col overflow-y-auto">
                  {items.map((item, index) => (
                    <CardMenu key={index} item={item} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
