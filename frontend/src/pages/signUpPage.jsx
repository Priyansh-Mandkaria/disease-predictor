import Footer from "../components/footer";
import NavBar2 from "../components/navbar2";
import SignUp from "../components/signUp";




const SignUpPage = () => {
  return (
    <div className="w-full relative p-10 bg-azure overflow-hidden flex flex-col items-end justify-start gap-[780.5px] tracking-[normal] mq750:gap-[390px_780.5px] mq450:gap-[195px_780.5px]">
      <section className="self-stretch h-full flex flex-col items-start justify-start py-0 px-0 box-border gap-[55px] max-w-full mq750:gap-[27px_55px] mq1050:h-auto">
        <div className="self-stretch flex flex-col items-end justify-start gap-[48px] max-w-full mq750:gap-[24px_48px]">
          <SignUp/>
        </div>
      </section>
    </div>
  );
};

export default SignUpPage;
