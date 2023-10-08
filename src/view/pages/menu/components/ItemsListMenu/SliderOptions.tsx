import { useSwiper } from "swiper/react";
import { cn } from "../../../../../app/utils/cn";
import { Button } from "../../../../../components/Button";

interface SliderOptionsProps {
  category: string;
  isActive: boolean;
  index: number;
}

export function SliderOptions({
  category,
  isActive,
  index,
}: SliderOptionsProps) {
  const swiper = useSwiper();

  return (
    <Button
      text={category}
      className={cn("bg-transparent", isActive && "bg-light-yellow")}
      onClick={() => swiper.slideTo(index)}
    />
  );
}
