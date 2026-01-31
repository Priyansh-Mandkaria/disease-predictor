import SignIn from "../components/signIn";

const SignInPage = () => {
  return (
    <div className="w-full h-full  bg-azure overflow-hidden flex flex-col items-start justify-start relative gap-[192px] tracking-[normal] mq450:gap-[48px_192px] mq750:gap-[96px_192px]">
      <section className="self-stretch p-10 flex flex-col items-end justify-start gap-[46.5px] max-w-full mq750:gap-[23px_46.5px]">
        <div className="w-[707px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full ">
          <SignIn/>
        </div>
      </section>
      <div className="w-[752.4px] h-full !m-[0] absolute top-[0px] bottom-[0px] left-[0px] flex flex-row items-start justify-start max-w-full">
        <div className="mt-[-52px] ml-[-25px] h-[1441.1px] w-[777.4px] relative max-w-[103%] shrink-0">
           <div className="absolute top-[0px] left-[775.39px] bg-azure w-[1440px] h-[775.3px] [transform:_rotate(89.92deg)] [transform-origin:0_0]" />
          <img
            className="absolute top-[217px] left-[223px] w-[332px] h-[362px] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/male-doctor-flat-icon-vector-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
