import { useDispatch, useSelector } from "react-redux"
import { Button } from "../Button/Button"
import { Succsess } from "./succsess-logo/Succsess"
import { SuccsessTexts } from "./succsess-texts/SuccsessTexts"
import { setFalse } from "../../redux/features/isSubmited/isSubmited"

export const ThankYouSection = () => {
  const dispatch = useDispatch()
  const onclick = () => {
    dispatch(setFalse())
  }
  
  return (
    <div className="w-[327px] flex flex-col items-center m-auto mt-[91px]">
        <Succsess/>
        <SuccsessTexts />
        <Button content="Continue" onClick={onclick()}/>
    </div>
  )
}
