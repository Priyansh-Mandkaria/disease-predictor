// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import DropdownComponent from './Search2';

// const Question = () => {
//   const location = useLocation();
//   const symptoms = location.state.majorDisease;
//   console.log(symptoms);

//   return (
//     <div className="w-[1167px] flex-1 flex flex-col items-end justify-start pt-[3px] px-[45px] pb-[37px] box-border relative gap-[44px_0px] max-w-full text-left text-15xl text-black font-nunito-sans lg:pl-[22px] lg:pr-[22px] lg:box-border mq750:gap-[44px_0px]">
//       <img
//         className="w-[724px] h-[543px] absolute !m-[0] bottom-[-31px] left-[200px] object-cover z-[1]"
//         loading="lazy"
//         alt=""
//         src="/images-4@2x.png"
//       />
//       <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[1px] left-[0px] rounded-xl bg-gray-500 shadow-[4px_4px_10px_rgba(0,_0,_0,_0.25)] z-[2]" />
//       <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[54px] pl-0">
//         <h1 className="m-0 relative text-15xl text-inherit font-semibold font-inherit z-[3] mq450:text-9xl mq1050:text-19xl ">
//           Topic
//         </h1>
//       </div>
//       <div className="w-[1014px] flex-1 flex flex-row items-start justify-start pt-0 pb-[5px] px-0 box-border max-w-full text-xl z-[3]">
//         <div className="self-stretch w-[931px] flex flex-col items-start justify-start gap-[28px_0px] max-w-full">
//           <DropdownComponent />
//         </div> 
//       </div>
//       <Link to="/reportpage" className="cursor-pointer pt-2.5 pb-2 pr-[34px] pl-[37px] bg-darkslategray-100 rounded-xl shadow-[6px_4px_10px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center border-[0px] border-solid border-darkslategray-100 hover:bg-dimgray relative text-11xl font-semibold font-nunito-sans text-white text-5xl text-left z-[3] mq450:text-lg mq1050:text-5xl">
//         Next
//       </Link>
//     </div>
//   );
// };

// export default Question;


import Search2 from "./Search";
import DropdownComponent from "./Search2";
import { Link, useNavigate, BrowserRouter as Router, useLocation } from 'react-router-dom';

const Question = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const symptoms = location.state.majorDisease;
  console.log(location);
  return (
    <div className="w-full h-full bg-white overflow-hidden flex flex-col items-start justify-start gap-[217px_0px] tracking-[normal] text-left text-mini text-white font-inter lg:h-auto mq450:gap-[217px_0px] mq750:gap-[217px_0px]">
      <section className="self-stretch flex flex-col items-start justify-start max-w-full shrink-0">
        <div className="self-stretch h-[571px] bg-azure flex flex-col items-center justify-center pt-[37px] pb-[45px] pr-[21px] pl-5 box-border max-w-full mq750:pt-6 mq750:pb-[29px] mq750:box-border">
          <div className="w-[1440px] h-[570px] relative bg-azure hidden max-w-full" />
          <div className="w-[1167px] flex-1 flex flex-col items-end justify-start pt-[3px] px-[45px] pb-[37px] box-border relative gap-[44px_0px] max-w-full text-left text-15xl text-black font-nunito-sans lg:pl-[22px] lg:pr-[22px] lg:box-border mq750:gap-[44px_0px]">
            <img
              className="w-[724px] h-[543px] absolute !m-[0] bottom-[-31px] left-[200px] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/images-4@2x.png"
            />
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[1px] left-[0px] rounded-xl bg-gray-500 shadow-[4px_4px_10px_rgba(0,_0,_0,_0.25)] z-[2]" />
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[54px] pl-0">
              <h1 className="m-0 relative text-15xl text-inherit font-semibold font-inherit z-[3] mq450:text-9xl mq1050:text-19xl ">
                Topic
              </h1>
            </div>
            <div className="w-[1014px] flex-1 flex flex-row items-start justify-start pt-0 pb-[5px] px-0 box-border max-w-full text-xl z-[3]">
              <div className="self-stretch w-[931px] flex flex-col items-start justify-start gap-[28px_0px] max-w-full">
                <DropdownComponent symptoms={symptoms} />
              </div>

            </div>

            <Link to="/reportpage" className="cursor-pointer pt-2.5 pb-2 pr-[34px] pl-[37px] bg-darkslategray-100 rounded-xl shadow-[6px_4px_10px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center border-[0px] border-solid border-darkslategray-100 hover:bg-dimgray relative text-11xl font-semibold font-nunito-sans text-white text-5xl text-left z-[3] mq450:text-lg mq1050:text-5xl">
              Next
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Question;

