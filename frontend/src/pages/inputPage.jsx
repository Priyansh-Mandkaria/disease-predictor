import InputSymp from "../components/inputsymp";

const InputPage = () => {
  return (
    <>
      <div className="w-full  bg-white overflow-hidden flex flex-col items-start justify-start gap-8 tracking-normal text-left text-mini text-white font-inter mq450:gap-8 mq750:h-screen mq750:gap-8">
        <section className="self-stretch h-full flex flex-col items-center justify-center max-w-full shrink-0">
          <div className="self-stretch h-full flex flex-col items-center justify-center pt-6 pb-10 pr-4 pl-4 box-border max-w-full">
            <InputSymp />
          </div>
        </section>
      </div>
    </>
  );
};

export default InputPage;
