import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store/store"
import { useEffect } from "react"

export const CardFront = () => {
  const card = useSelector((state: RootState) => state.card.card)

  useEffect(() => {
    formatedCardNumber = formatText(card!.cardNumber)
    
  }, [card])

  const formatText = ((cardNumb:string):string => {
    return cardNumb.replace(/(.{4})/g, '$1 ')
  })

  let formatedCardNumber = formatText(card!.cardNumber)
  
  return (
    <div className="bg-[url(/icons/card-mobile.svg)] lg:bg-[url(./icons/card-desktop.svg)] w-[285px] h-[156.21px] absolute z-10 bottom-0 px-[19px] py-[14px] font-grotesk lg:min-w-[447px] lg:min-h-[245px] lg:top-0 lg:right-0 lg:px-[32px] lg:py-[28px]">
      <div className="w-full flex items-center gap-[10px]">
        <div className="w-[30px] h-[30px] rounded-full bg-white lg:w-[46px] lg:h-[46px]"></div>
        <div className="w-[13px] h-[13px] rounded-full border-white border-[1px] inset-1 lg:w-[21px] lg:h-[21px]"></div>
      </div>
      <div className="w-full mt-[37px] font-medium text-white lg:mt-[64px]">
        <div>
            <p className="text-[18px] tracking-[2.2px] lg:text-[28px]">{formatedCardNumber!}</p>
        </div>
        <div className="text-[9px] tracking-[1.3px] flex justify-between mt-[17px] mb-[18px] items-center lg:mt-[25px] lg:text-[14px]">
          <div>
            <p className="">{card?.cardHolder}</p>
          </div>
          <div>
            <p>{card?.cardDate.mm}/{card?.cardDate.yy}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
