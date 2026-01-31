// import { useState } from "react";
// import { Link } from "react-router-dom";

// const SignIn = () => {
//   const [checkChecked, setCheckChecked] = useState(true);
//   return (
//     <div className="w-[467px] rounded-3xs bg-white shadow-[4px_4px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-col items-center justify-center pt-[27.299999999999955px] pb-[20.3px] pr-[33px] pl-[50px] gap-[24.100000000000023px] max-w-full text-left text-13xl text-dimgray-300 font-nunito-sans border-[1px] border-solid border-black mq750:pl-[25px] mq750:pt-5 mq750:pb-[27px] mq750:box-border z-[3]">
//       <div className="w-[467px] h-[478px] relative rounded-3xs bg-white shadow-[4px_4px_10px_rgba(0,_0,_0,_0.25)] box-border hidden max-w-full border-[1px] border-solid border-black" />
//       <div className="flex flex-row items-start justify-center py-0 ">
//         <h1 className="m-0 text-15xl relative  font-bold  z-[1] mq450:text-lgi mq1050:text-7xl  text-darkslategray-100">
//           SignIn to your Account
//         </h1>
//       </div>
//       <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[7.099999999999966px] box-border gap-[27.100000000000023px] max-w-full text-xs text-gainsboro-100">
//         <button className="cursor-pointer pt-[8.5px] pb-2 pr-5 pl-[38px] bg-[transparent] w-[372px] rounded-3xs box-border flex flex-row items-start justify-center gap-[11.400000000001455px] max-w-full z-[2] border-[1px] border-solid border-gray-400">
//           <img
//             className="h-[21.1px] w-[21.8px] relative rounded-3xs object-cover min-h-[21px] z-[1]"
//             alt=""
//             src="/image-2@2x.png"
//           />
//           <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
//             <b className="relative text-sm font-nunito-sans text-gray-3 text-left z-[1]">
//               Continue with Google
//             </b>
//           </div>
//           <div className="h-[38px] w-[371.9px] relative rounded-3xs box-border hidden max-w-full border-[1px] border-solid border-gray-400" />
//         </button>
//         <div className="flex flex-row items-start justify-start pt-0 pb-[2.5px] pr-[5px] pl-[5px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
//           <div className="relative font-semibold z-[1]">
//             <span className="text-gray"> -------------</span>
//             <span className="text-gray">{` or Sign in with Email `}</span>
//             <span className="text-gray">------------- </span>
//           </div>
//         </div>
//         <div className="w-[371.9px] flex flex-row items-start justify-start pt-0 px-0 pb-[4.899999999999977px] box-border max-w-full">
//           <div className="flex-1 rounded-3xs box-border flex flex-row items-start justify-start pt-[16.899999999999977px] px-3.5 pb-[14.800000000000011px] max-w-full z-[2] border-[1px] border-solid border-gray-400">
//             <input
//               className="w-full [border:none] [outline:none] font-semibold font-nunito-sans text-sm bg-[transparent] h-[19px] relative text-black text-left inline-block p-0 z-[1]"
//               placeholder="Email"
//               type="text"
//             />
//             <div className="h-[50.7px] w-[371.9px] relative rounded-3xs box-border hidden max-w-full border-[1px] border-solid border-gray-400" />
//           </div>
//         </div>
//         <div className="self-stretch flex flex-col items-start justify-start gap-[5.900000000000006px] max-w-full text-darkgray">
//           <div className="w-[371.9px] rounded-3xs box-border flex flex-row items-start justify-start pt-[16.899999999999977px] px-[11.399999999999636px] pb-[14.800000000000011px] max-w-full z-[2] border-[1px] border-solid border-gray-400">
//             <input
//               className="w-full [border:none] [outline:none] font-semibold font-nunito-sans text-sm bg-[transparent] h-[19px] relative text-black text-left inline-block p-0 z-[1]"
//               placeholder="Password"
//               type="text"
//             />
//             <div className="h-[50.7px] w-[371.9px] relative rounded-3xs box-border hidden max-w-full border-[1px] border-solid border-gray-400" />
//           </div>
//           <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[4.399999999999636px] box-border max-w-full">
//             <div className="flex-1 flex flex-row items-start justify-between min-h-[17px] max-w-full gap-[20px] mq450:flex-wrap">
//               <div className="flex flex-row items-start justify-start gap-[8.700000000000728px]">
//                 <div className="flex flex-col items-start justify-start pt-[1.5999999999999943px] px-0 pb-0">
//                   <input
//                     className="accent-darkcyan m-0 w-[15.5px] h-[15.1px] relative rounded-sm z-[1]"
//                     checked={checkChecked}
//                     type="checkbox"
//                     onChange={(event) => setCheckChecked(event.target.checked)}
//                   />
//                 </div>
//                 <div className="relative  text-gray z-[1]">Remember Me</div>
//               </div>
//               <div className="relative text-darkcyan text-gray z-[1]">
//                 Forgot Password?
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Link to="/symptomchecker" className="relative text-lg font-extrabold font-nunito-sans text-white text-left cursor-pointer [border:none] pt-[9.199999999999989px] px-5 pb-[8.000000000000014px] bg-darkcyan w-[367px] rounded-md flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full z-[1]  border-solid border-black  hover:bg-turquoise  bg-lightseagreen hover:box-border">  
//           Sign In
//       </Link>
//     </div>
//   );
// };

// export default SignIn;
import { useState } from "react";
// import { Link } from "react-router-dom";
import { auth } from "../firebase";
// import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";


const SignIn = () => {
  const [checkChecked, setCheckChecked] = useState(true);
  const navigate =useNavigate();
  const [values,setValues] = useState({
    username:"",
    pass:""

  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const handleSubmission=()=>{
    if (!values.username ||  !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    console.log(values);
    signInWithEmailAndPassword (auth, values.username, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className="w-[467px] rounded-3xs bg-white shadow-[4px_4px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-col items-center justify-center pt-[27.299999999999955px] pb-[20.3px] pr-[33px] pl-[50px] gap-[24.100000000000023px] max-w-full text-left text-13xl text-dimgray-300 font-nunito-sans border-[1px] border-solid border-black mq750:pl-[25px] mq750:pt-5 mq750:pb-[27px] mq750:box-border z-[3]">
      <div className="w-[467px] h-[478px] relative rounded-3xs bg-white shadow-[4px_4px_10px_rgba(0,_0,_0,_0.25)] box-border hidden max-w-full border-[1px] border-solid border-black" />
      <div className="flex flex-row items-start justify-center py-0 ">
        <h1 className="m-0 text-15xl relative  font-bold  z-[1] mq450:text-lgi mq1050:text-7xl  text-darkslategray-100">
          SignIn to your Account
        </h1>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[7.099999999999966px] box-border gap-[27.100000000000023px] max-w-full text-xs text-gainsboro-100">
        <button className="cursor-pointer pt-[8.5px] pb-2 pr-5 pl-[38px] bg-[transparent] w-[372px] rounded-3xs box-border flex flex-row items-start justify-center gap-[11.400000000001455px] max-w-full z-[2] border-[1px] border-solid border-gray-400">
          <img
            className="h-[21.1px] w-[21.8px] relative rounded-3xs object-cover min-h-[21px] z-[1]"
            alt=""
            src="/image-2@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
            <b className="relative text-sm font-nunito-sans text-gray-3 text-left z-[1]">
              Continue with Google
            </b>
          </div>
          <div className="h-[38px] w-[371.9px] relative rounded-3xs box-border hidden max-w-full border-[1px] border-solid border-gray-400" />
        </button>
        <div className="flex flex-row items-start justify-start pt-0 pb-[2.5px] pr-[5px] pl-[5px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="relative font-semibold z-[1]">
            <span className="text-gray"> -------------</span>
            <span className="text-gray">{` or Sign in with Email `}</span>
            <span className="text-gray">------------- </span>
          </div>
        </div>
        <div className="w-[371.9px] flex flex-row items-start justify-start pt-0 px-0 pb-[4.899999999999977px] box-border max-w-full">
          <div className="flex-1 rounded-3xs box-border flex flex-row items-start justify-start pt-[16.899999999999977px] px-3.5 pb-[14.800000000000011px] max-w-full z-[2] border-[1px] border-solid border-gray-400">
            <input
              className="w-full [border:none] [outline:none] font-semibold font-nunito-sans text-sm bg-[transparent] h-[19px] relative text-black text-left inline-block p-0 z-[1]"
              placeholder="Username"
              type="text"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, username: event.target.value }))
              }
            />
            <div className="h-[50.7px] w-[371.9px] relative rounded-3xs box-border hidden max-w-full border-[1px] border-solid border-gray-400" />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[5.900000000000006px] max-w-full text-darkgray">
          <div className="w-[371.9px] rounded-3xs box-border flex flex-row items-start justify-start pt-[16.899999999999977px] px-[11.399999999999636px] pb-[14.800000000000011px] max-w-full z-[2] border-[1px] border-solid border-gray-400">
            <input
              className="w-full [border:none] [outline:none] font-semibold font-nunito-sans text-sm bg-[transparent] h-[19px] relative text-black text-left inline-block p-0 z-[1]"
              placeholder="Password"
              type="text"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pass: event.target.value }))
              }
            />
            <div className="h-[50.7px] w-[371.9px] relative rounded-3xs box-border hidden max-w-full border-[1px] border-solid border-gray-400" />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[4.399999999999636px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between min-h-[17px] max-w-full gap-[20px] mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start gap-[8.700000000000728px]">
                <div className="flex flex-col items-start justify-start pt-[1.5999999999999943px] px-0 pb-0">
                  <input
                    className="accent-darkcyan m-0 w-[15.5px] h-[15.1px] relative rounded-sm z-[1]"
                    checked={checkChecked}
                    type="checkbox"
                    onChange={(event) => setCheckChecked(event.target.checked)}
                  />
                </div>
                <div className="relative  text-gray z-[1]">Remember Me</div>
              </div>
              <div className="relative text-darkcyan text-gray z-[1]">
                Forgot Password?
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
  {errorMsg && <b className="error">{errorMsg}</b>}
  <Link to='/symptomchecker'>
  <button
    disabled={submitButtonDisabled}
    onClick={handleSubmission}
    className="text-lg font-extrabold font-nunito-sans text-white text-left cursor-pointer pt-[9.199999999999989px] px-5 pb-[8.000000000000014px] bg-darkcyan w-[367px] rounded-md flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full z-[1]  border-solid border-black  hover:bg-turquoise  bg-lightseagreen hover:box-border"
  >
    Sign In
  </button>
  </Link>
  <p>
    Already have an account?{" "}
    <span>
      <Link to="/signup">Sign Up</Link>
    </span>
  </p>
</div>

    </div>
  );
};

export default SignIn;
