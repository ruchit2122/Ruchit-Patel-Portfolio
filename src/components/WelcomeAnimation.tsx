import { useEffect } from 'react';
import WelcomeVideo from './../assets/welcome.webm';

const WelcomeAnimation = ({
  videoEnded,
  setVideoEnded,
}: WelcomeAnimationProps) => {
  const onVideoEnd = () => {
    setVideoEnded(true);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[999]">
      {!videoEnded && (
        <video
          autoPlay
          muted
          playsInline
          className="absolute w-full h-full object-contain top-0 left-0 scale-50"
          onEnded={() => {
            onVideoEnd();
          }}>
          <source src={WelcomeVideo} type="video/webm"></source>
        </video>
      )}
      <div className="w-full h-full flex overflow-hidden">
        <div
          className={`w-1/2 h-full bg-black ${
            videoEnded && '-translate-x-[100%]'
          } duration-1000 transition-all`}></div>
        <div
          className={`w-1/2 h-full bg-black ${
            videoEnded && 'translate-x-[100%]'
          } duration-1000 transition-all`}></div>
      </div>
    </div>
  );
};

export default WelcomeAnimation;

interface WelcomeAnimationProps {
  videoEnded: boolean;
  setVideoEnded: Function;
}
