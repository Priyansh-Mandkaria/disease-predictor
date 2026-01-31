const SignInSignUp = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-5xl text-white font-nunito-sans">
      <img
        className="h-[504px] w-[673px] absolute !m-[0] top-[-275px] right-[55px] object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/images-3@2x.png"
      />
      <div className="flex-1 bg-azure flex flex-col items-start justify-start py-10 px-[42px] box-border gap-[48px_0px] min-h-[290px] max-w-full mq675:gap-[48px_0px] mq675:pl-[21px] mq675:pr-[21px] mq675:box-border">
        <div className="w-[1440px] h-[290px] relative bg-azure hidden max-w-full" />
        <div className="w-[402px] flex flex-row items-start justify-start gap-[0px_52px] max-w-full mq450:flex-wrap mq450:gap-[0px_52px]">
          <button className="relative text-5xl font-semibold font-nunito-sans text-white text-left z-[1] cursor-pointer py-[7px] pr-[22px] pl-[39px] bg-darkslategray-100 flex-[0.732] rounded-3xs shadow-[6px_4px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[114px] whitespace-nowrap border-[1px] border-solid border-black hover:bg-darkslategray-200 hover:box-border hover:border-solid  mq450:flex-1">
           
              Sign In 
          
          </button>
          <button className="relative text-5xl font-semibold font-nunito-sans text-darkslategray-100 text-left z-[1] cursor-pointer py-[7px] pr-[22px] pl-[39px] bg-whitesmoke flex-[0.732] rounded-3xs shadow-[6px_4px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[114px] whitespace-nowrap border-[1px] border-solid border-black hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-200 mq450:flex-1">
            Sign Up
          </button>
        </div>
        <div className="w-[422px] flex flex-row items-start justify-center max-w-full">
          <button className="relative text-5xl font-semibold font-nunito-sans text-white text-left  cursor-pointer pt-[11px] pb-[9px] pr-[21px] pl-6 bg-lightseagreen rounded-3xs shadow-[6px_4px_10px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center whitespace-nowrap z-[1] border-[1px] border-solid border-black hover:bg-turquoise hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-200">
            Check Symptoms
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
