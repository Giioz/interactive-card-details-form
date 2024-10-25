import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store/store"

export const CardBack = () => {
  const card = useSelector((state: RootState) => state.card.card)
  
  return (
    <div className="min-w-[285px] h-[157px] rounded-[6px] bg-custom-gradient absolute top-0 right-0 font-grotesk lg:min-w-[447px] lg:min-h-[245px] lg:bottom-0 lg:top-[55%] lg:left-0">
        <div className="w-full h-[34.6px] bg-[#2F2F2F] mt-[14.74px] lg:h-[54px] lg:mt-[24px]">
        </div>
        <div className="w-[230px] h-[29.74px] bg-[#ADB5BE] rounded-[4px] mt-[15.39px] mx-auto flex justify-end items-center pr-[10px] lg:w-[361px] lg:h-[38px] lg:mt-[24px]">
          <p className="text-[9px] text-white lg:text-[14px] lg:tracking-[2px]">{card?.cvc}</p>
        </div>
        <div className="w-[100px] mx-auto mt-[15px] lg:w-[186px] lg:h-[26px] lg:mt-[33px]">
          <img src="./icons/card-background-title.svg" alt="bg" />
        </div>
    </div>
  )
}