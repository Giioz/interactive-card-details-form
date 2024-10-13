export const CardBack = () => {
  return (
    <div className="min-w-[280px] h-[157px] rounded-[6px] bg-custom-gradient absolute top-0 right-0 font-grotesk">
        <div className="w-full h-[34.6px] bg-[#2F2F2F] mt-[14.74px]">
        </div>
        <div className="w-[230px] h-[29.74px] bg-[#ADB5BE] rounded-[4px] mt-[15.39px] mx-auto flex justify-end items-center pr-[10px]">
          <p className="text-[9px] text-white">000</p>
        </div>
        <div className="w-[100px] mx-auto mt-[15px]">
          <img src="./public/icons/card-background-title.svg" alt="bg" />
        </div>
    </div>
  )
}
