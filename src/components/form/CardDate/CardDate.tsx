import { UseFormRegister } from "react-hook-form"
import { FormValues } from "../Forms-Section"

export const CardDate = ({ register }: { register: UseFormRegister<FormValues> }) => {
  return (
    <div>
        <label htmlFor="">EXP. DATE (MM/YY)</label>
        <div className="flex gap-[8px] mt-[9px]">
            <input {...register("cardDate.mm")} type="text" placeholder="MM" className="h-[45px] w-[72px] py-[11px] pl-[16px] rounded-[8px] border-[#DFDEE0] border-[1px] placeholder:text-[18px] focus:outline-none focus:border-[#6348FE]"/>
            <input {...register("cardDate.yy")} type="text" placeholder="YY" className="h-[45px] w-[72px] py-[11px] pl-[16px] rounded-[8px] border-[#DFDEE0] border-[1px] placeholder:text-[18px] focus:outline-none focus:border-[#6348FE]"/>
        </div>
    </div>
  )
}
