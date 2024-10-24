import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store/store"
import { useEffect } from "react"

export const CardFront = () => {
  const card = useSelector((state: RootState) => state.card.card)

  useEffect(() => {
    formatedCardNumber = formatText(card!.cardNumber)
    console.log(card?.cardNumber, formatedCardNumber);
    
  }, [card])

  const formatText = ((cardNumb:string):string => {
    return cardNumb.replace(/(.{4})/g, '$1 ')
  })

  let formatedCardNumber = formatText(card!.cardNumber)
  
  return (
    <div className="bg-[url(./icons/card-mobile.svg)] w-[285px] h-[156.21px] absolute z-10 bottom-0 px-[19px] py-[14px] font-grotesk">
      <div className="w-full flex items-center gap-[10px]">
        <div className="w-[30px] h-[30px] rounded-full bg-white"></div>
        <div className="w-[13px] h-[13px] rounded-full border-white border-[1px] inset-1"></div>
      </div>
      <div className="w-full mt-[37px] font-medium text-white">
        <div>
            <p className="text-[18px] tracking-[2.2px]">{formatedCardNumber!}</p>

        </div>
        <div className="text-[9px] tracking-[1.3px] flex justify-between mt-[17px] mb-[18px] items-center">
          <div>
            <p className="text-[14px]">{card?.cardHolder}</p>
          </div>
          <div>
            <p>{card?.cardDate.mm}/{card?.cardDate.yy}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
