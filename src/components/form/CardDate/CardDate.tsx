import { UseFormRegister } from "react-hook-form"
import { FormValues } from "../Forms-Section"

interface CardHolderProps {
  register : UseFormRegister<FormValues>,
  error : any
}


export const CardDate: React.FC<CardHolderProps> = ({ register, error }) => {
  let err = error?.mm?.message || error?.yy?.message;
  return (
    <div className="w-[152px] lg:w-[170px]">
        <label htmlFor="">EXP. DATE (MM/YY)</label>
        <div className="flex gap-[8px] mt-[9px]">
            <input {...register("cardDate.mm")} type="text" placeholder="MM" 
                  className={`h-[45px] w-full py-[11px] pl-[16px] rounded-[8px] border-[#DFDEE0] border-[1px] 
                              placeholder:text-[18px] focus:outline-none focus:border-[#6348FE]
                              ${error?.mm ? 'border-red-300' : ''}`
                              }/>
            <input {...register("cardDate.yy")} type="text" placeholder="YY" 
                   className={`h-[45px] w-full py-[11px] pl-[16px] rounded-[8px] border-[#DFDEE0] border-[1px] 
                              placeholder:text-[18px] focus:outline-none focus:border-[#6348FE]
                              ${error?.yy ? 'border-red-300' : ''}`}
                              />
        </div>
        { error && (<div className="text-red-500 mt-[8px]">{err}</div>)}
    </div>
  )
}
