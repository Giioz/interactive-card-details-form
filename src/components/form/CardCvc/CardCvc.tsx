import { UseFormRegister } from "react-hook-form"
import { FormValues } from "../Forms-Section"

export const CardCvc = ({ register }: { register: UseFormRegister<FormValues> }) => {
  return (
    <div className="flex flex-col gap-[8px]">
        <label htmlFor="">CVC</label>
        <input {...register("cvc")} type="text" placeholder="e.g. 123" className="w-[164px] h-[45px] py-[11px] pl-[16px] rounded-[8px] border-[#DFDEE0] border-[1px] placeholder:text-[18px] focus:outline-none focus:border-[#6348FE]"/>
    </div>
  )
}
