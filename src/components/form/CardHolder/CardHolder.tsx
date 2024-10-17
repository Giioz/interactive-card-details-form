import { UseFormRegister } from "react-hook-form"
import { FormValues } from "../Forms-Section"
import React from "react"

interface CardHolderProps {
  register : UseFormRegister<FormValues>,
  error : any
}


export const CardHolder: React.FC<CardHolderProps> = ( {register, error }) => {
  return (
    <div className="flex flex-col max-w-[327px] gap-[9px]">
        <label htmlFor="">CARDHOLDER NAME</label>
        <input {...register("cardHolder")} type="text" placeholder="e.g. Jane Appleseed" className="h-[45px] py-[11px] pl-[16px] rounded-[8px] border-[#DFDEE0] border-[1px] placeholder:text-[18px] focus:outline-none focus:border-[#6348FE]"/>
        {error && (<div>{error.message}</div>)}
    </div>
  )
}
