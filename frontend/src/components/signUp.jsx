// import { Link } from "react-router-dom";

// const SignUp = () => {
//     return (
//       <div className="w-[1392px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
//         <div className="w-[1038px] flex flex-row items-end justify-between max-w-full gap-[20px] mq1050:flex-wrap">
//           <div className="h-[413px] w-[332px] flex flex-col items-start justify-start min-w-[332px] max-w-full mq1050:flex-1">
//             <img
//               className="self-stretch h-[362px] relative max-w-full overflow-hidden shrink-0 object-cover mq1050:self-stretch mq1050:w-auto"
//               loading="lazy"
//               alt=""
//               src="/male-doctor-flat-icon-vector-1@2x.png"
//             />
//           </div>
//           <form className="m-0 w-[467px] rounded-3xs bg-white shadow-[4px_4px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-col items-start justify-start pt-[33px] px-[49px] pb-12 gap-[28px] min-w-[467px] max-w-full z-[1] border-[1px] border-solid border-black mq750:pt-[21px] mq750:pb-[31px] mq750:box-border mq750:min-w-full mq450:pl-6 mq450:pr-6 mq450:box-border mq1050:flex-1">
//             <div className="w-[467px] h-[478px] relative rounded-3xs bg-white shadow-[4px_4px_10px_rgba(0,_0,_0,_0.25)] box-border hidden max-w-full border-[1px] border-solid border-black" />
//             <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-0.5">
//               <h1 className="m-0 relative text-15xl font-bold font-nunito-sans text-dimgray-300 text-left whitespace-nowrap z-[2] mq450:text-lgi mq1050:text-7xl text-darkslategray-100">
//                 Sign up
//               </h1>
//             </div>
//             <div className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full">
//               <div className="self-stretch flex flex-row items-start justify-center gap-[19px] mq450:flex-wrap">
//                 <div className="w-[166px] rounded-3xs box-border flex flex-row items-start justify-start pt-[13px] px-[15px] pb-[9px] z-[2] border-[1px] border-solid border-gray-400">
//                   <div className="h-[43px] w-[166px] relative rounded-3xs box-border hidden border-[1px] border-solid border-gray-400" />
//                   <input
//                     className="w-full [border:none] [outline:none] inline-block font-nunito-sans text-sm bg-[transparent] h-[21px] relative font-bold text-dimgray-300 text-left p-0 z-[3]"
//                     placeholder="First Name"
//                     type="text"
//                   />
//                 </div>
//                 <div className="flex-1 rounded-3xs box-border flex flex-row items-start justify-start pt-[13px] px-2.5 pb-[9px] min-w-[118px] z-[2] border-[1px] border-solid border-gray-400">
//                   <div className="h-[43px] w-[182px] relative rounded-3xs box-border hidden border-[1px] border-solid border-gray-400" />
//                   <input
//                     className="w-full [border:none] [outline:none] inline-block font-nunito-sans text-sm bg-[transparent] h-[21px] relative font-bold text-dimgray-300 text-left p-0 z-[3]"
//                     placeholder="Last Name"
//                     type="text"
//                   />
//                 </div>
//               </div>
//               <div className="self-stretch rounded-3xs box-border flex flex-row items-start justify-start pt-3.5 px-[17px] pb-3 max-w-full z-[2] border-[1px] border-solid border-gray-400">
//                 <div className="h-[46px] w-[367px] relative rounded-3xs box-border hidden max-w-full border-[1px] border-solid border-gray-400" />
//                 <input
//                   className="w-full [border:none] [outline:none] inline-block font-nunito-sans text-sm bg-[transparent] h-5 relative font-bold text-dimgray-300 text-left p-0 z-[3]"
//                   placeholder="Email"
//                   type="text"
//                 />
//               </div>
//               <div className="self-stretch rounded-3xs box-border flex flex-row items-start justify-start pt-4 px-[17px] pb-[13px] max-w-full z-[2] border-[1px] border-solid border-gray-400">
//                 <div className="h-[50px] w-[367px] relative rounded-3xs box-border hidden max-w-full border-[1px] border-solid border-gray-400" />
//                 <input
//                   className="w-full [border:none] [outline:none] inline-block font-nunito-sans text-sm bg-[transparent] h-[21px] relative font-bold text-dimgray-300 text-left p-0 z-[3]"
//                   placeholder="Password"
//                   type="text"
//                 />
//               </div>
//               <div className="self-stretch rounded-3xs box-border flex flex-row items-start justify-start pt-[15px] px-[17px] pb-3.5 max-w-full z-[2] border-[1px] border-solid border-gray-400">
//                 <div className="h-[50px] w-[367px] relative rounded-3xs box-border hidden max-w-full border-[1px] border-solid border-gray-400" />
//                 <input
//                   className="w-full [border:none] [outline:none] inline-block font-nunito-sans text-sm bg-[transparent] h-[21px] relative font-bold text-dimgray-300 text-left p-0 z-[3]"
//                   placeholder="Re-Enter Password"
//                   type="text"
//                 />
//               </div>
//             </div>
//             <Link to="/signin" className="cursor-pointer [border:none] pt-[9px] px-5 pb-2 bg-darkcyan self-stretch rounded-md flex flex-row items-start justify-center whitespace-nowrap z-[2] bg-lightseagreen-200 bg-lightseagreen  hover:bg-turquoise relative text-lg font-extrabold font-nunito-sans text-white text-left ">
//                 Sign Up
//             </Link>
//           </form>
//         </div>
//       </div>
//     );
//   };
  
//   export default SignUp;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

const SignUp = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    center_id: "",
    org: "",
    pass: "",
    re_pass: ""
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.username || !values.center_id || !values.org || !values.pass || !values.re_pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    if (values.pass !== values.re_pass) {
      setErrorMsg("Passwords do not match");
      return;
    }
    if(values.center_id!=='404' && values.center_id!=='6969'){
      setErrorMsg("Enter Correct Center-ID")
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);

    createUserWithEmailAndPassword(auth, values.username, values.pass)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: values.username
        });
        setSubmitButtonDisabled(false);
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className="w-full flex justify-center items-center mt-10">
      <form className="w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
        <div className="mb-6">
          <label htmlFor="Email" className="block text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="text"
            id="username"
            className="w-full p-2 border rounded-md"
            placeholder="Enter your email"
            onChange={(e) => setValues({ ...values, username: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="center_id" className="block text-sm font-bold mb-2">
            Center ID
          </label>
          <input
            type="text"
            id="center_id"
            className="w-full p-2 border rounded-md"
            placeholder="Enter your center ID"
            onChange={(e) => setValues({ ...values, center_id: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="org" className="block text-sm font-bold mb-2">
            Organization
          </label>
          <input
            type="text"
            id="org"
            className="w-full p-2 border rounded-md"
            placeholder="Enter your organization"
            onChange={(e) => setValues({ ...values, org: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="pass" className="block text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="pass"
            className="w-full p-2 border rounded-md"
            placeholder="Enter your password"
            onChange={(e) => setValues({ ...values, pass: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="re_pass" className="block text-sm font-bold mb-2">
            Re-enter Password
          </label>
          <input
            type="password"
            id="re_pass"
            className="w-full p-2 border rounded-md"
            placeholder="Re-enter your password"
            onChange={(e) => setValues({ ...values, re_pass: e.target.value })}
          />
        </div>
        {errorMsg && <p className="text-red-500 mb-4">{errorMsg}</p>}
        <Link to="/signin">
        <button
          onClick={handleSubmission}
          disabled={submitButtonDisabled}
          className="w-full p-3 bg-blue-500 text-white font-bold rounded-md"
        >
          Sign Up
        </button>
        </Link>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
