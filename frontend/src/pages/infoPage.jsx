import PatientInfoText from "../components/patient-info-text";

const InfoPage = () => {
  return (
    <div className="w-full h-full bg-white overflow-hidden flex flex-col items-start justify-start gap-[217px_0px] tracking-[normal] text-left text-white font-inter mq450:gap-[217px_0px] mq750:h-auto mq750:gap-[217px_0px]">
      <section className="self-stretch flex flex-col items-start justify-start max-w-full shrink-0">
        <div className="self-stretch bg-azure flex flex-col items-center justify-center pt-[37px] px-5 pb-[41px] box-border max-w-full mq750:pt-6 mq750:pb-[27px] mq750:box-border">
          <div className="w-[1440px] h-[570px] relative bg-azure hidden max-w-full" />
          <PatientInfoText />
        </div>
      </section>
    </div>
  );
};

export default InfoPage;
