export const Plans = ({slide}) => {
  return (
    <div className="grid lg:grid-cols-3  w-[80%] m-auto gap-6">
      <div className="p-[30px] border-[1px] border-[#000000] rounded-[24px] space-y-3">
        <span className="py-[6px] px-[10px] rounded-[6px] bg-[#88757529] text-[12px] font-[400]">
          PRO PLAN
        </span>
        <p className="font-bold text-[48px]">
        {!slide?'$200':'$400'} <span className="font-[400] text-[16px]">/ {!slide?'Month':'year'}</span>
        </p>
        <hr className="border-black border-1" />
        <p>WHAT YOU GET</p>
        <ul className="space-y-5">
          <li className="flex items-center gap-4">
            <img src="check.svg" alt="" />
            Design in Figma
          </li>
          <li className="flex items-center gap-4">
            <img src="check.svg" alt="" />
            Design in Figma
          </li>
          <li className="flex items-center gap-4">
            <img src="check.svg" alt="" />
            Design in Figma
          </li>
          <li className="flex items-center gap-4">
            <img src="check.svg" alt="" />
            Design in Figma
          </li>
        </ul>
        <button className="py-[10px] px-[12px] rounded-[6px] bg-[#1A1A1A] text-white w-[100%] shadow-[2px 2px 4px 0px #0000001A] blur-[#000000]">
          Subscribe
        </button>
      </div>

      {/* second plan */}

      <div className="p-[30px] border-[1px] rounded-[24px]  bg-[#1A1A1A] text-white space-y-3">
        <span className="py-[6px] px-[10px] rounded-[6px] bg-[#88757529] text-[12px] font-[400]">
          PRO PLAN
        </span>
        <p className="font-bold text-[48px]">
        {!slide?'$200':'$400'}<span className="font-[400] text-[16px]">/ {!slide?'Month':'year'}</span>
        </p>
        <hr className="border-[#FFFFFF2E] border-1" />
        <p>WHAT YOU GET</p>
        <ul className="space-y-5">
          <li className="flex items-center gap-4">
            <img src="check2.svg" alt="" />
            Design in Figma
          </li>
          <li className="flex items-center gap-4">
            <img src="check2.svg" alt="" />
            Design in Figma
          </li>
          <li className="flex items-center gap-4">
            <img src="check2.svg" alt="" />
            Design in Figma
          </li>
          <li className="flex items-center gap-4">
            <img src="check2.svg" alt="" />
            Design in Figma
          </li>
        </ul>
        <button className="py-[10px] px-[12px] rounded-[6px] bg-[#FFFFFF2E] text-white w-[100%] shadow-[2px 2px 4px 0px #0000001A] blur-[#000000]">
          Subscribe
        </button>
      </div>
      {/* third plan */}
      <div className="p-[30px] border-[1px] rounded-[24px] border-[#000000] space-y-3">
        <span className="py-[6px] px-[10px] rounded-[6px] bg-[#88757529] text-[12px] font-[400]">
          PRO PLAN
        </span>
        <p className="font-bold text-[48px]">
        {!slide?'$200':'$400'}<span className="font-[400] text-[16px]">/ {!slide?'Month':'year'}</span>
        </p>
        <hr className="border-black border-1" />
        <p>WHAT YOU GET</p>
        <ul className="space-y-5">
          <li className="flex items-center gap-4">
            <img src="check.svg" alt="" />
            Design in Figma
          </li>
          <li className="flex items-center gap-4">
            <img src="check.svg" alt="" />
            Design in Figma
          </li>
          <li className="flex items-center gap-4">
            <img src="check.svg" alt="" />
            Design in Figma
          </li>
          <li className="flex items-center gap-4">
            <img src="check.svg" alt="" />
            Design in Figma
          </li>
        </ul>
        <button className="py-[10px] px-[12px] rounded-[6px] bg-[#1A1A1A] text-white w-[100%] shadow-[2px 2px 4px 0px #0000001A] blur-[#000000]">
          Subscribe
        </button>
      </div>
    </div>
  );
};
