export const CardFront = () => {
  return (
    <div className="bg-[url(./icons/card-mobile.svg)] w-[285px] h-[156.21px] absolute z-10 bottom-0 px-[19px] py-[17px] font-grotesk">
      <div className="w-full flex items-center gap-[10px]">
        <div className="w-[30px] h-[30px] rounded-full bg-white"></div>
        <div className="w-[13px] h-[13px] rounded-full border-white border-[1px] inset-1"></div>
      </div>
      <div className="w-full mt-[37px] font-medium text-white">
        <div>
            <p className="text-[18px] tracking-[2.2px]">0000 0000 0000 0000</p>
        </div>
        <div className="text-[9px] tracking-[1.3px] flex justify-between mt-[17px] items-center">
          <div>
            <p>GIORGI MAMALADZE</p>
          </div>
          <div>
            <p>07/27</p>
          </div>
        </div>
      </div>
    </div>
  )
}
