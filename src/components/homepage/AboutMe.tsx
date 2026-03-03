import AboutMeImg from '../../assets/homepage/aboutme.svg';

const AboutMe = () => {
  return (
    <div
      id="about"
      className="w-screen flex justify-center items-center lg:px-20 px-4 lg:py-14 py-10">
      <div className="max-w-7xl flex justify-center w-full lg:gap-20 flex-wrap">
        <div className="w-full max-w-[35rem]">
          <img src={AboutMeImg} alt="" className="w-full" />
        </div>
        <div className="flex flex-col lg:max-w-[45%]">
          <div className="lg:text-5xl lg:leading-[3.5rem] text-[1.75rem] leading-[2rem] flex gap-4 w-full py-5">
            About <span className="font-extrabold">Me</span>
          </div>
          <p className="text-zinc-500 mt-5">
            Hi, I'm Ruchit Patel, a dedicated Front End Developer with a
            strong passion for building innovative, user-friendly web
            applications. My expertise spans front-end development, enabling 
            me to manage projects from initial concept to
            final deployment with ease.
          </p> 
          <p className="text-zinc-500 mt-4">
            I began my journey into web development by creating a website to
            showcase my Projects, which quickly sparked a deeper interest in the
            field. This passion eventually led me to a role as a Front End
            Developer.
          </p>
          <p className="text-zinc-500 mt-4">
            In addition to web development, I have a background in Graphics Design,
            starting with the Canva before transitioning to
            Figma. Over the years, I've done several small freelance projects and
            participated in Competitons. Although web development is my primary
            focus, I still enjoy working on graphics, especially when
            commissioned.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
