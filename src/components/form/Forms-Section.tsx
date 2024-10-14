import { CardHolder } from "./CardHolder/CardHolder"
import { CardNumber } from "./CardNumber/CardNumber"

export const FormsSection = () => {
  return (
    <form action="" className="mt-[91px] font-grotesk text-[12px] mx-[16px] placeholder:text-[18px] focus:outline-none focus:border-[#6348FE]">
        <CardHolder />
        <CardNumber />
    </form>
  )
}
