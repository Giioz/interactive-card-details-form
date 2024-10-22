import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "./Button/Button"
import { CardCvc } from "./CardCvc/CardCvc"
import { CardDate } from "./CardDate/CardDate"
import { CardHolder } from "./CardHolder/CardHolder"
import { CardNumber } from "./CardNumber/CardNumber"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store/store"
import { addCard, initialInfo } from "../../redux/features/card/cardSlice"

export const schema = z.object({
  cardHolder: z.string()
      .min(1, { message: "Card Holder is required"})
      .refine((CardHolder) => {
          const names = CardHolder.trim().split(" ")
          return names.length === 2 && !CardHolder.endsWith(' ') && !CardHolder.startsWith(' ');
         
      },
      {message : `Please Enter Full Name e.g 'Felicia Leire'`}),

  cardNumber: z.number({ message: "Card Number should only contain numbers"})
      .max(1000000000000000, { message: "Card Holder should contain 16 digit" }),
      
  cardDate : z.object({
    mm: z.number({ message: "Can't be blank" }),
    yy: z.number({ message: "Can't be blank" })
  }),
  cvc: z.number({ message: "Can't be blank" }).max(999, { message: "Should be 3 digits" })
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

  let data1 = initialInfo
  const onSubmit: SubmitHandler<FormValues> = (data) => data1 = data
  console.log(data1);
  
  let test = useSelector((state: RootState) => state.card.card)
  const dispatch = useDispatch()
  dispatch(addCard(data1))

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-[91px] font-grotesk text-[12px] px-[16px] placeholder:text-[18px] flex flex-col items-center focus:outline-none focus:border-[#6348FE]">
        <div className="flex flex-col gap-[20px]">
          <CardHolder register={register} error={errors.cardHolder}/>
          <CardNumber register={register} error={errors.cardNumber}/>
          <div className="flex gap-[11px] max-w-[327px]">
            <CardDate register={register} error={errors.cardDate} />
            <CardCvc register={register} error={errors.cvc}/>
          </div>
          <Button />
        </div>
    </form>
  )
}
