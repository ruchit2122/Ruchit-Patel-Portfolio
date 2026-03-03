import VirtuantLogo from "../../assets/homepage/Virtuant.png";
import JinarthLogo from "../../assets/homepage/Jinarth.png";

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-screen flex flex-col justify-center lg:px-20 px-4 lg:py-14 py-10 bg-black rounded-lg lg:rounded-none"
    >
      <div className="lg:text-5xl lg:leading-[3.5rem] text-[1.75rem] leading-[2rem] flex gap-4  w-full justify-center text-white">
        My <span className="font-extrabold">Experience</span>
      </div>
      <div className="flex flex-col lg:px-6 py-10 items-center w-full gap-8">
        {/* Front End Dev at Jinarth In  */}
        <ExperienceCard
          Logo={JinarthLogo}
          Title="Associate Frontend Developer at Jinarth Infotech"
          Time="Jan 2025 - Present"
          Description="At Jinarth Infotech, I lead end to end front end development across 5+ projects spanning Engineering, SaaS, Pharma-tech, and Import-Export domains. My focus is on delivering scalable, high performance user interfaces from concept to deployment, consistently improving application speed and user experience by 15 to 20 percent.

          I collaborate closely with cross functional teams to ship features on time, ensuring alignment with client requirements and business objectives. I also streamline front end workflows and optimize code architecture, increasing overall development efficiency by nearly 25 percent while maintaining clean, maintainable standards."
        />

        {/* Full Stack Dev at Careernaksha  */}
        <ExperienceCard
          Logo={VirtuantLogo}
          Title="Jr. Front End Developer at Virtuant Infotech Pvt Ltd"
          Time="Jan 2024 - Dec 2024"
          Description="At Virtuant Infotech Pvt Ltd, I led front end development initiatives for a SaaS focused organization, delivering scalable and high impact digital solutions. I managed projects including visa consultant websites, marathon platforms, admin dashboards, and fully responsive mobile interfaces, while mentoring interns in a fast paced environment and improving overall efficiency by 20 percent.

          I implemented user centric features based on detailed requirements and real time feedback, increasing landing page engagement and retention by 25 percent. I also optimized development workflows and coding standards, enhancing team productivity and ensuring consistent, high quality feature delivery within deadlines."
        />

        {/*Full Stack Intern  at Careernaksha  */}
        <ExperienceCard
          Logo={VirtuantLogo}
          Title="Front End Developer Intern at Virtuant Infotech Pvt Ltd"
          Time="June 2023 - Dec 2023"
          Description="Product Development and Implementation: Gained hands on experience in front end development within a live production environment. Assisted in building and enhancing reusable UI components and interactive features, with a strong focus on performance, usability, and aligning implementations with real user requirements.

Cross Functional Collaboration: Worked closely with designers, backend developers, and QA teams to ensure features met technical standards, design consistency, and production level quality expectations before deployment."
        />
      </div>
    </div>
  );
};

export default Experience;

const ExperienceCard = ({
  Logo,
  Title,
  Time,
  Description,
}: ExperienceCardProps) => {
  return (
    <div className="rounded-lg border border-zinc-500 w-full flex flex-col gap-7 px-6 py-7 max-w-6xl text-white">
      <div className="flex justify-between gap-8 items-center flex-wrap">
        <div className="flex gap-4 lg:gap-7 items-center">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full shrink-0 overflow-hidden bg-transperent flex items-center justify-center p-1">
            <img src={Logo} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="font-semibold lg:text-2xl text-lg">{Title}</div>
        </div>
        <div className="font-semibold text-zinc-300">{Time}</div>
      </div>
      <div className="text-zinc-300">{Description}</div>
    </div>
  );
};

interface ExperienceCardProps {
  Logo: string;
  Title: string;
  Time: string;
  Description: string;
}
