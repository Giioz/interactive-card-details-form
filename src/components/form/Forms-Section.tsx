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
      .min(1, { message: "Card Holder is required"})
      .refine((CardHolder) => {
          
          
          const names = CardHolder.trim().split(" ")
          return names.length === 2 && !CardHolder.endsWith(' ') && !CardHolder.startsWith(' ');
         
      }, {message : `Please Enter Full Name e.g 'Felicia Leire'`}),

  cardNumber: z.number({ message: "Card Number should only contain numbers"})
      .min(16, { message: "Card Number Should Be 16 Characters" })
      .max(16, { message: "Card Number Should Be 16 Characters" }),
  cardDate : z.object({
    mm: z.string().min(1, { message: "Can't Be Blank" }).min(2).max(2, { message: "Can't Be more than 2" }),
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
        resolver : zodResolver(schema),
        mode: "onChange"
      })

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)
  
 

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-[91px] font-grotesk text-[12px] px-[16px] placeholder:text-[18px] flex flex-col items-center focus:outline-none focus:border-[#6348FE]">
        <div className="flex flex-col gap-[20px]">
          <CardHolder register={register} error={errors.cardHolder}/>
          <CardNumber register={register} error={errors.cardNumber}/>
          <div className="flex gap-[11px] max-w-[327px]">
            <CardDate register={register} error={errors.cardDate} />
            <CardCvc register={register}/>
          </div>
          <Button />
        </div>
    </form>
  )
}
