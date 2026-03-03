import DeveloperTextSvg from './../../assets/homepage/developerText.svg';
import SocialIcons from '../other/SocialIcons';

const Hero = () => {
  return (
    <div className="w-screen flex justify-center lg:px-20 lg:py-14 px-4 py-10 lg:mt-32 mt-20">
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        className="max-w-3xl w-full flex justify-center items-center flex-col gap-8 text-center">
        <div className="flex flex-col lg:gap-5 gap-3 lg:text-5xl lg:leading-[3.5rem] text-[1.75rem] leading-[2rem]">
          <div className="flex gap-x-4 gap-y-3 flex-wrap justify-center lg:justify-start">
            <span className="min-w-fit">Hello I'm</span>
            <span className="font-extrabold">Ruchit Patel</span>
          </div>
          <div className="w-full flex justify-center items-center gap-4">
            <span className="font-extrabold min-w-fit">Frontend</span>
            <span>
              <img src={DeveloperTextSvg} alt="" className="h-9 lg:h-auto" />
            </span>
          </div>
          <div>
            <span>Based In</span>{' '}
            <span className="font-extrabold">Anand, Gujarat.</span>
          </div>
        </div>
        <div className="flex gap-6">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default Hero;
