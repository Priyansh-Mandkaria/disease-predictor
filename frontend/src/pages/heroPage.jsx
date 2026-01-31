import BtnSignInSignUp from "../components/btn-sign-in-up";

const HeroPage = () => {
  return (
    <>   
     <div className="w-full relative bg-white pt-[5%] overflow-hidden flex flex-col items-start justify-start gap-[99px_0px] tracking-[normal] mq450:gap-[99px_0px] mq750:gap-[99px_0px]">
      <section className="h-[100vh] self-stretch flex flex-col items-start justify-start gap-[45px_0px] max-w-full text-left text-[73px] text-lightseagreen font-advent-pro mq750:gap-[45px_0px]">
        <div className="w-[801px] flex flex-row items-start justify-start py-0 px-[35px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start max-w-full">
            <h1 className="m-0 w-96 relative text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-[44px] mq750:text-[58px]">
              SympCheck
            </h1>
            <h1 className="m-0 self-stretch relative text-[37px] font-semibold font-nunito-sans text-gray z-[2] mq450:text-[22px] mq750:text-[30px]">
              Your companion in sickness and health
            </h1>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <BtnSignInSignUp />
        </div>
      </section>
    </div> 
    </>
  );
};

export default HeroPage;
