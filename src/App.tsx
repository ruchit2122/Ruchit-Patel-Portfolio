import { useEffect, useState } from 'react';
import WelcomeAnimation from './components/WelcomeAnimation';
import Home from './pages/Home';
import 'aos/dist/aos.css';
// @ts-ignore
import AOS from 'aos';

function App() {
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-white font-[Sora]">
      <WelcomeAnimation videoEnded={videoEnded} setVideoEnded={setVideoEnded} />
      {videoEnded && <Home />}
    </div>
  );
}

export default App;
