const Footer = () => {
  return (
    <footer className="self-stretch bg-darkslategray-100 flex flex-col items-center justify-start pt-5 pb-[17px] pr-[87px] pl-[23px] box-border relative gap-[18px_0px] max-w-full z-[1] text-left text-mini text-white font-inter mq450:pr-5 mq450:box-border mq750:pr-[43px] mq750:box-border ">
      <div className="w-[1440px] h-[196px] relative bg-darkslategray-100 hidden max-w-full z-[0]" />
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-px pl-0">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
          <div className="h-[75px] w-[86px] flex flex-col items-start justify-start py-0 pr-[17px] pl-0 box-border">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[2]"
              loading="lazy"
              alt=""
              src="/group.svg"
            />
          </div>
          <h3 className="m-0 relative text-inherit font-extrabold font-inherit z-[2]">
            About Us
          </h3>
          <div className="flex flex-col items-start justify-start py-0 pr-[115px] pl-0 gap-[9px_0px] text-smi mq450:pr-5 mq450:box-border">
            <h3 className="m-0 relative text-mini font-extrabold font-inherit z-[2]">
              CONTACT
            </h3>
            <div className="relative font-semibold font-nunito-sans whitespace-nowrap z-[2]">
              <a
                className="text-[inherit] "
                href="mailto:sympcheck@gmail.com"
                target="_blank"
              >
                sympcheck@gmail.com
              </a>
            </div>
            <div className="relative font-medium whitespace-nowrap z-[2]">
              +917483742834
            </div>
            <div className="relative font-medium whitespace-nowrap z-[2]">
              +917483742834
            </div>
          </div>
          <div className="w-[173px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
            <div className="self-stretch h-[21px] flex flex-row items-start justify-between gap-[20px]">
              <div className="h-5 w-5 relative z-[2]">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  loading="lazy"
                  alt=""
                  src="/facebook.svg"
                />
              </div>
              <div className="h-5 w-5 relative z-[2]">
                <img
                  className="absolute h-[106.5%] w-[87.5%] top-[-3%] right-[6%] bottom-[-3.5%] left-[6.5%] max-w-full overflow-hidden max-h-full hidden"
                  alt=""
                  src="/group-306.svg"
                />
                <img
                  className="absolute h-[90.5%] w-full top-[4.5%] right-[0%] bottom-[5%] left-[0%] max-w-full overflow-hidden max-h-full"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className="h-5 w-5 relative z-[2]">
                <img
                  className="absolute h-full w-full top-[0%] right-[2%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  loading="lazy"
                  alt=""
                  src="/google.svg"
                />
              </div>
              <div className="h-5 w-5 relative z-[2]">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  loading="lazy"
                  alt=""
                  src="/instagram.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <h1 className="m-0 relative text-15xl font-semibold font-advent-pro text-lightseagreen z-[2] mt-[-9px] mq450:text-xl mq750:text-8xl">
          SympCheck
        </h1>
      </div>
      <div className="w-5 h-5 absolute !m-[0] top-[23px] right-[36px] z-[2]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          loading="lazy"
          alt=""
          src="/linkedin.svg"
        />
      </div>
      <div className="w-[330px] flex flex-row items-start justify-end max-w-full text-2xs text-lightgray">
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-row items-start justify-start">
            <div className="relative font-medium z-[2]">Privacy Policy |</div>
            <div className="relative font-medium z-[3] ml-[-1px]">
              {" "}
              Terms of use |
            </div>
          </div>
          <div className="relative font-medium z-[4]">
            {" "}
            Advertisement Policy
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
