import HDGlobe from "../../assets/homepage/HDglobe.jpg";
import SVI from "../../assets/homepage/svi.png";
import Ketansoda from "../../assets/homepage/ketansoda.png";
import { BiLink } from "react-icons/bi";

const Projects = () => {
  return (
    <div
      id="project"
      className="w-screen flex flex-col justify-center lg:px-20 px-4 lg:py-14 py-10 bg-black items-center"
    >
      <div className="lg:text-5xl lg:leading-[3.5rem] text-[1.75rem] leading-[2rem] flex gap-4 w-full justify-center text-white py-5">
        My <span className="font-extrabold">Projects</span>
      </div>
      <div className="flex flex-col lg:px-6 lg:py-10 mt-5 items-center w-full lg:gap-8 gap-5 max-w-7xl text-white">
        {/* SVI */}
        <div className="flex flex-col lg:flex-row-reverse lg:gap-10 gap-5 lg:items-center lg:py-5 py-12">
          <div className="lg:w-1/3 overflow-hidden lg:py-10 lg:pr-16 order-3 lg:order-none">
            <img src={SVI} alt="" className="rounded-2xl" />
          </div>
          <div className="contents lg:flex lg:flex-1 lg:flex-col lg:gap-7">
            <div className="font-extrabold lg:text-5xl text-2xl order-1 lg:order-none">
              01
            </div>
            <div className="font-bold lg:text-4xl text-xl order-2 lg:order-none">
              Success Visa & Immigration
            </div>
            <div className="text-zinc-500 order-4 lg:order-none">
              Success Visa & Immigration is a professional website for visa and
              immigration consultancy services. Built with HTML, CSS, JS and
              Bootstrap it features service listings, consultant profiles,
              client testimonials, and an inquiry form to help clients navigate
              their visa applications seamlessly.
            </div>
            <a
              href="https://svi-ruchit.netlify.app/"
              target="_blank"
              className="w-fit order-5 lg:order-none"
            >
              <BiLink size="1.35rem" />
            </a>
          </div>
        </div>

        {/* HDGLobe */}
        <div className="flex lg:gap-10 gap-5 lg:items-center lg:py-5 flex-col lg:flex-row py-12">
          <div className="lg:w-1/3 overflow-hidden lg:py-10 lg:pr-16 order-3 lg:order-none">
            <img src={HDGlobe} alt="" className="rounded-2xl" />
          </div>
          <div className="contents lg:flex lg:flex-1 lg:flex-col lg:gap-7">
            <div className="font-extrabold lg:text-5xl text-2xl order-1 lg:order-none">
              02
            </div>
            <div className="font-bold lg:text-4xl text-xl order-2 lg:order-none">
              HDGlobe
            </div>
            <div className="text-zinc-500 order-4 lg:order-none">
              HDGlobe is an import-export company website built with React,
              JavaScript, and Tailwind CSS. It features product catalogs,
              supplier profiles, shipment tracking, and an inquiry form to help
              businesses streamline their international trade operations and
              connect with reliable trading partners.
            </div>
            <a
              href="https://hdglobetrade.com/"
              target="_blank"
              className="w-fit order-5 lg:order-none"
            >
              <BiLink size="1.35rem" />
            </a>
          </div>
        </div>

        {/* KetanSoda */}
        <div className="flex flex-col lg:flex-row-reverse lg:gap-10 gap-5 lg:items-center lg:py-5 py-12">
          <div className="lg:w-1/3 overflow-hidden lg:py-10 lg:pr-16 order-3 lg:order-none">
            <img src={Ketansoda} alt="" className="rounded-2xl" />
          </div>
          <div className="contents lg:flex lg:flex-1 lg:flex-col lg:gap-7">
            <div className="font-extrabold lg:text-5xl text-2xl order-1 lg:order-none">
              03
            </div>
            <div className="font-bold lg:text-4xl text-xl order-2 lg:order-none">
              The Ketan Soda Shop
            </div>
            <div className="text-zinc-500 order-4 lg:order-none">
              This is The Ketan Soda Shop logo created using Figma and
              Illustrator. It features a complete menu design with vibrant
              graphics and branding elements for The Ketan Soda Shop.
            </div>
            <a
              href="https://drive.google.com/drive/folders/1tcA5TczpqMM-J8MsHZeVG8HOKxWNJ4_5?usp=drive_link"
              target="_blank"
              className="w-fit order-5 lg:order-none"
            >
              <BiLink size="1.35rem" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
