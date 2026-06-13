import Image from "next/image";
import Aurora from "./components/Aurora/Aurora";
import TiltedCard from "./components/TiltedCard/TiltedCard";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";

export default function Home() {
  return (
    
    <div className="min-h-screen overflow-x-hidden">
      <div className="absolute top-0 left-0 bottom-0 w-full h-full">
        <Aurora
          colorStops={["#ffb0b0","#ffd0d0","#fff0f0"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="w-1/2 mx-auto p-6">
              <TiltedCard
                imageSrc="assets/titled-card/Foto_1_x_1.jpg"
                altText="Mochamad Yusuf - Programmer"
                captionText="Mochamad Yusuf - Programmer"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
              />
            </div>
          </div>
          <div className="col-span-6">
            <div className="flex items-center h-full">
              <div className="flex flex-col gap-6">
                <AnimatedContent 
                  distance={150}
                  direction="horizontal"
                  reverse={false}
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <h1 className="text-2xl text-[#FFFFFF] font-bold">MY</h1>
                    <RotatingText
                      texts={['FullStack Programmer', 'Mobile Programmer']}
                      mainClassName="px-2 sm:px-2 md:px-3 bg-[#ff9e9e] text-[FFFFFF] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-xl font-bold inline-flex transition-all"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
                      rotationInterval={2000}
                    />
                  </div>
                </AnimatedContent>
                <div className="flex flex-col items-start">
                  <SplitText
                    text="Hello, I'am Mochamad Yusuf"
                    className="text-3xl font-semibold text-start text-[#4F0341]"
                    delay={100}
                    from={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                  <SplitText
                    text="I'am Programmer"
                    className="text-3xl font-semibold text-start text-[#4F0341]"
                    delay={60}
                    from={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                </div>
                <div>
                  <BlurText
                    text="Saya Mochamad Yusuf, lulusan universitas kuningan. Saya telah berpengalaman menjadi programmer di ASTEX Solution dari tahun 2018 - 2020 membuat website MLM, optimasi query 10x, dan membuat aplikasi mobile MLM. Saya sekarang menjadi Programmer Freelancer mengerjakan website SPMB SMK Muhamadiyyah 2 Kuningan dan tracer study Universitas Siber Syekh Nurjati"
                    delay={75}
                    animateBy="words"
                    direction="top"
                    className="text-xl mb-8 text-[#4F0341] justify-between"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
