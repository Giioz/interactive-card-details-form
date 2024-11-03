export const Button = ({ content, onclick }:any) => {
  return (
    <button onClick={onclick} type="submit" className="w-full mt-[8px] bg-[#21092F] py-[15px] px-[130px] text-white rounded-[8px] text-[18px] font-grotesk">
        {content}
    </button>
  )
}
