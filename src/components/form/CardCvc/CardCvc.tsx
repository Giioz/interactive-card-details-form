import { UseFormRegister } from "react-hook-form"
import { FormValues } from "../Forms-Section"


interface CardHolderProps {
  register : UseFormRegister<FormValues>
  error : {
    message : string
  }
}

export const CardCvc: React.FC<CardHolderProps> = ({ register, error } ) => {
  return (
    <div className="flex flex-col gap-[8px] w-[164px] lg:w-[191px]">
        <label htmlFor="">CVC</label>
        <input {...register("cvc",  {required: "Can't be blank"},)} type="text" placeholder="e.g. 123" 
               className={`w-full h-[45px] py-[11px] pl-[16px] rounded-[8px] border-[#DFDEE0] border-[1px] 
                          placeholder:text-[18px] focus:outline-none focus:border-[#6348FE]
                          ${error ? 'border-red-300' : ''}`
                          }/>
        {error && (<div className="text-red-500">{error.message}</div>)}
    </div>
  )
}
