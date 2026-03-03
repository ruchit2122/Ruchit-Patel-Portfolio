import { FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <>
      <a
        href="https://www.instagram.com/02ruchit/"
        target="_blank"
        className="flex justify-center items-center rounded border border-black lg:p-4 p-3.5 hover:bg-black group transition-all duration-300 cursor-pointer">
        <FaInstagram
          size="24px"
          className="group-hover:fill-white transition-all duration-300 lg:scale-100 scale-90"
        />
      </a>
      
      <a
        href="https://github.com/ruchit2122"
        target="_blank"
        className="flex justify-center items-center rounded border border-black lg:p-4 p-3.5 hover:bg-black group transition-all duration-300 cursor-pointer">
        <FaGithub
          size="24px"
          className="group-hover:fill-white transition-all duration-300"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/ruchit-patel2122/"
        target="_blank"
        className="flex justify-center items-center rounded border border-black lg:p-4 p-3.5 hover:bg-black group transition-all duration-300 cursor-pointer">
        <FaLinkedin
          size="24px"
          className="group-hover:fill-white transition-all duration-300"
        />
      </a>
    </>
  );
};

export default SocialIcons;
