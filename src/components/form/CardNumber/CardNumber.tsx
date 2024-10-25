
import { UseFormRegister } from "react-hook-form"
import { FormValues } from "../Forms-Section"



interface CardNumberProps {
  register : UseFormRegister<FormValues>,
  error : any
}

export const CardNumber: React.FC<CardNumberProps> = ({ register, error }) => {
    return (
      <div className="flex flex-col max-w-[full] gap-[9px]">
          <label htmlFor="">CARD NUMBER</label>
          <input {...register("cardNumber")} type="text" placeholder="e.g. 1234 5678 9123 0000" 
                 className={`h-[45px] py-[11px] pl-[16px] rounded-[8px] border-[#DFDEE0] border-[1px]
                            placeholder:text-[18px] focus:outline-none focus:border-[#6348FE]
                            ${error ? 'border-red-300' : ''}`}/>
          {error && (<div className="text-red-500">{error.message}</div>)}
      </div>
    )
  }
  