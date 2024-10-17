import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "./Button/Button"
import { CardCvc } from "./CardCvc/CardCvc"
import { CardDate } from "./CardDate/CardDate"
import { CardHolder } from "./CardHolder/CardHolder"
import { CardNumber } from "./CardNumber/CardNumber"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"


const schema = z.object({
  cardHolder: z.string()
      .refine((CardHolder) => {
          const names = CardHolder.trim().split(" ")
          if(names.length == 2) {
            return true
          }
         
      }, {message : "Please Enter First and Last Name e.g 'Felicia Leire'"}),
  cardNumber: z.string().min(16).max(16),
  cardDate : z.object({
    mm: z.string().min(2).max(2),
    yy: z.string().min(2).max(2),
  }),
  cvc: z.string().min(3).max(3),
})



export type FormValues = z.infer<typeof schema>


export const FormsSection = () => {
 
  const {
     register, 
     handleSubmit,
     formState: { errors },
  } = useForm<FormValues>({
        resolver : zodResolver(schema)
      })

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)
  
 
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-[91px] font-grotesk text-[12px] px-[16px] placeholder:text-[18px] flex flex-col items-center focus:outline-none focus:border-[#6348FE]">
        <div className="flex flex-col gap-[20px]">
          <CardHolder register={register} error={errors.cardHolder}/>
          <CardNumber register={register} error={errors.cardNumber}/>
          <div className="flex gap-[11px] max-w-[327px]">
            <CardDate register={register} />
            <CardCvc register={register}/>
          </div>
          <Button />
        </div>
    </form>
  )
}
