import Landing from '@/components/sections/Landing';
import About from '@/components/sections/About';
import Localization from '@/components/sections/Localization';
import WeddingInfo from '@/components/sections/WeddingInfo';
import Silesia from '@/components/sections/Silesia';
import GoodToKnow from '@/components/sections/GoodToKnow';
import Footer from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      {/* <Landing /> */}
      {/* <About /> */}
      <Localization />
      <WeddingInfo />
      <Silesia />
      <GoodToKnow />
      <Footer />
    </>
  );
}
