import { Swiper, SwiperSlide } from "swiper/react";
import { MenuSliderNavigation } from "./MenuSliderNavigation";
import { useMenuController } from "./useMenuController";
import { SliderOptions } from "./SliderOptions";
import emptyStateImage from "../../../../../assets/images/empty-state.svg";
import { CardMenu } from "./cards";
import { Button } from "../../../../../components/Button";
import { Spinner } from "../../../../../components/Spinner";
import { Item } from "../../../../../app/interface/Item";

// Import Swiper styles
import "swiper/css";

export function ItemsListMenu() {
  const {
    sliderState,
    setSliderState,
    items,
    isInitialLoading,
    isFetching,
    openNewItemMenuModal,
    openNewCategoryMenuModal,
    filterOptions,
    onFilterChange,
  } = useMenuController();

  const hasItems = items.length > 0;
  const hasCategories = filterOptions.length > 0;

  return (
    <div>
      {(isInitialLoading || isFetching) && (
        <div className="flex flex-col items-center justify-center h-full">
          <Spinner className="h-40 w-40" />
        </div>
      )}

      {!isInitialLoading && !isFetching && (
        <div>
          {!hasCategories && (
            <div className="h-full flex flex-col justify-center items-center">
              <img src={emptyStateImage} className="h-40 w-40" />
              <span>Nenhuma categoria encontrado.</span>
              <Button
                text="Cadastrar categoria"
                onClick={() => openNewCategoryMenuModal("NEW")}
                className="w-auto"
              />
            </div>
          )}
          {!hasItems && hasCategories && (
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
          {hasItems && hasCategories && (
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
                    onFilterChange(filterOptions[swiper.activeIndex]);
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
              {isFetching && (
                <div className="flex flex-col items-center justify-center h-full">
                  <Spinner className="h-40 w-40" />
                </div>
              )}
              {!isFetching && (
                <div className="flex flex-col max-h-[640px] overflow-y-auto">
                  {items.map((category: [string, Record<string, Item[]>]) =>
                    category[1].map((item: Item) => (
                      <CardMenu key={item.name} item={item} />
                    ))
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
