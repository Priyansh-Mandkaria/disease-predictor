
import Question from "../components/question";
import { useLocation } from 'react-router-dom';


import Footer from "../components/footer";
import NavBar2 from "../components/navbar2";

const QuestionPage = () => {
  // const location = useLocation();
  // const majorDisease = location.state ? location.state.majorDisease:[];
  // console.log(location);

  return (
    <div className="w-full h-full bg-white overflow-hidden flex flex-col items-start justify-start gap-[217px_0px] tracking-[normal] text-left text-mini text-white font-inter lg:h-auto mq450:gap-[217px_0px] mq750:gap-[217px_0px]">
      <section className="self-stretch flex flex-col items-start justify-start max-w-full shrink-0">
        <div className="self-stretch h-[571px] bg-azure flex flex-col items-center justify-center pt-[37px] pb-[45px] pr-[21px] pl-5 box-border max-w-full mq750:pt-6 mq750:pb-[29px] mq750:box-border">
            <div className="w-[1440px] h-[570px] relative bg-azure hidden max-w-full" />
          <Question />
        </div>
      </section>
    
    </div>
  );
};

export default QuestionPage;
