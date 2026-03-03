import { handleSmoothSroll } from '../utils/util';

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }: MobileMenu) => {
  return (
    <div className="w-screen h-screen bg-white sticky top-0 z-[100] flex items-center flex-col">
      <div
        className="absolute top-6 right-10 text-2xl"
        onClick={() => {
          setIsMobileMenuOpen(false);
        }}>
        X
      </div>
      <div className="flex flex-col gap-8 px-[20%] h-full justify-center">
        <span
          onClick={() => {
            handleSmoothSroll('skills', isMobileMenuOpen, setIsMobileMenuOpen);
          }}
          className="min-w-fit cursor-pointer text-xl">
          १ <span className="text-3xl font-semibold">Skills</span>
        </span>
        <span
          onClick={() => {
            handleSmoothSroll(
              'experience',
              isMobileMenuOpen,
              setIsMobileMenuOpen
            );
          }}
          className="min-w-fit cursor-pointer text-xl">
          २ <span className="text-3xl font-semibold">Experience</span>
        </span>
        <span
          onClick={() => {
            handleSmoothSroll('about', isMobileMenuOpen, setIsMobileMenuOpen);
          }}
          className="min-w-fit cursor-pointer text-xl">
          ३ <span className="text-3xl font-semibold">About Me</span>
        </span>
        <span
          onClick={() => {
            handleSmoothSroll('project', isMobileMenuOpen, setIsMobileMenuOpen);
          }}
          className="min-w-fit cursor-pointer text-xl">
          ४ <span className="text-3xl font-semibold">Project</span>
        </span>
        <span
          onClick={() => {
            handleSmoothSroll('contact', isMobileMenuOpen, setIsMobileMenuOpen);
          }}
          className="min-w-fit cursor-pointer text-xl">
          ५ <span className="text-3xl font-semibold">Contact</span>
        </span>
      </div>
    </div>
  );
};

export default MobileMenu;
