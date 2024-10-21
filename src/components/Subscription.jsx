
export const Subscription = ({slide, click}) => {


  return (
    <div className="font-lato lg:flex lg:justify-between ">
    <img src="left.svg" alt="" className="lg:block sm:flex sm:justify-center mx-auto" />

      <div className="lg:mt-20 space-y-5 mb-8 md:flex md:flex-col md:items-center md:justify-center sm:flex sm:flex-col sm:items-center sm:justify-center">
        <p
          className="font-medium lg:text-[40px] text-center text-[#0B0B0B
]"
        >
          Your Access To Connections
        </p>
        <p className="text-gray-500 lg:w-[70%] lg:m-[auto]">
          Explore our range of conference ticket pricing options to find the
          perfect fit for your needs.
        </p>

        <div className="lg:flex lg:items-center lg:justify-between border-[1px] lg:w-[30%] w-[50%] m-[auto] px-[10px] py-[5px] rounded-[8px] flex items-center justify-between md:w-[30%] sm:w-[30%]">
          <p>Month</p>
          <span
            onClick={click}
            className={`bg-[#000000] px-3  rounded-full flex ${
              slide ? "justify-start" : "justify-end"
            } w-[10%] m-auto`}
          >
            <div className="bg-white p-[7px] rounded-lg cursor-pointer"></div>
          </span>
          <p>Year</p>
        </div>
      </div>

      <img src="right.svg" alt="" className="lg:block hidden " />
    </div>
  );
};
