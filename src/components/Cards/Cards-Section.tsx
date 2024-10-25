import { CardBack } from "./CardBack/Card-Back"
import { CardFront } from "./CardFront/Card-Front"

export const CardsSection = () => {
  
  return (
    <div className="w-[343px] h-[251px] relative top-[32px] box-border mx-auto lg:h-[527px]">
      <CardFront />
      <CardBack />
    </div>
  )
}
