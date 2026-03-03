import { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiFigma,
  SiGit,
  SiVercel,
  SiClaude,
  SiTailwindcss,
} from "react-icons/si";


const Skills = () => {
  return (
    <div
      id="skills"
      className="w-screen flex flex-col justify-center lg:px-20 px-4 lg:py-14 py-10"
    >
      <div
        data-aos="fade-up"
        data-aos-once="true"
        className="lg:text-5xl text-3xl flex gap-4 lg:leading-[3.5rem] w-full justify-center text-[1.75rem] leading-[2rem] lg:py-0 py-5"
      >
        My <span className="font-extrabold">Skills</span>
      </div>
      <div
        className="w-full flex justify-center"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div className="flex flex-wrap lg:gap-x-14 lg:gap-y-10 gap-5 items-center lg:mt-10 mt-5 lg:py-10 w-full justify-center max-w-7xl">
          <SkillCard name="React" Icon={SiReact} />
          <SkillCard name="Typescript" Icon={SiTypescript} />
          <SkillCard name="Javascript" Icon={SiJavascript} />
          <SkillCard name="Figma" Icon={SiFigma} />
          <SkillCard name="Git" Icon={SiGit} />
          <SkillCard name="Vercel" Icon={SiVercel} />
          <SkillCard name="Claude" Icon={SiClaude} />
          <SkillCard name="Tailwind CSS" Icon={SiTailwindcss} />
        </div>
      </div>
    </div>
  );
};

export default Skills;

const SkillCard = ({ name, Icon }: SkillCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center lg:w-48 lg:h-44 w-36 h-36 border border-black rounded gap-8 group hover:bg-black transition-all duration-300 hover:scale-105 cursor-pointer">
      <Icon
        size="2.5rem"
        className="group-hover:fill-white transition-all duration-300"
      />
      <span className="font-bold lg:text-xl group-hover:text-white transition-all duration-300">
        {name}
      </span>
    </div>
  );
};

interface SkillCardProps {
  name: String;
  Icon: IconType;
}
