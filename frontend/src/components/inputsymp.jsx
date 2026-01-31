import Search2 from "./Search";

const InputSymp = () => {
  return (
    <div className="w-full h-screen bg-white overflow-hidden text-left text-xl text-white font-inter">
      <section className="mt-[5%] h-[50%] absolute top-[368px] left-[0px] bg-azure w-full h-full" />
      <div className="flex flex-">
        <img
          className="ml-[5%] mt-[6%] absolute top-[37px] left-[561px] w-[318px] h-[318px] object-cover"
          loading="lazy"
          alt=""
          src="/images-41@2x.png"
        />
        <div className="ml-[7%] mt-[6%] absolute top-[330px] left-[494px] text-5xl text-gray-300 font-nunito-sans">
          <Search2 />
        </div>
      </div>
    </div>
  );
};

export default InputSymp;
