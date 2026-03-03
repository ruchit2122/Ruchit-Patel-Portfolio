import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-screen flex justify-center px-20 py-6 bg-black">
      <footer className="max-w-7xl w-full flex justify-center items-center text-xl">
        <Link to="/" className="font-bold cursor-pointer text-white">
      Ruchit Patel
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
