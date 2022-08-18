/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Text } from "@nextui-org/react";
import Layout from "@/layout/MainLayout";
import { motion } from "framer-motion";
import Seo from "@/components/Seo";
import CompetitionCard from "@/components/CompetitionCard";
import AppDevLogo from "@/assets/images/logo/AppDevLogo.png";
import GameDevLogo from "@/assets/images/logo/GameDev.png";
import IoTDevLogo from "@/assets/images/logo/IoTDev.png";
import OlimpiadeLogo from "@/assets/images/logo/Olim.png";
import MageGlowLogo from "@/assets/images/logo/mage-glow.svg";
import BannerCard from "@/components/BannerCard";

export default function Home() {
  return (
    <>
      <Seo />
      <Layout>
        {/* <BackToTop /> */}
        <div className="h-screen flex justify-center items-center relative overflow-x-clip">
          <div className="grid grid-row-2 md:grid-cols-2 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-5xl w-10/12 h-min place-items-center">
            <Image
              width="500px"
              height="500px"
              className="w-2/3 md:w-full z-10"
              src={MageGlowLogo}
              alt="Logo Mage"
            />
            <div className="grid grid-row-2 place-items-center h-min gap-2 z-10">
              <img
                className="w-2/3 md:w-full"
                src="/static/logo/mage-text.svg"
                alt="Text logo"
              />
              <Text
                css={{
                  textGradient: "45deg, #00D8FF -20%, #6FDAE4 50%",
                }}
                weight="bold"
                className="animate-text text-center md:text-left md:text-md lg:text-xl"
              >
                &quot;Propelling human capabilities through inventive,
                innovative and creative usage of technology&quot;
              </Text>
            </div>
          </div>
          <img
            src="/static/background/left-blob-background.svg"
            className="absolute w-full md:w-9/12 left-[-30vw] top-[20vh] z-0"
            alt="left-blob-background"
          />
          <img
            src="/static/background/main-right-blob-background.svg"
            className="absolute w-full md:w-9/12 right-[-20vw] top-[-50vh] z-0"
            alt="right-blob-background"
          />
          <img
            draggable="false"
            src="/static/background/main-gradient-rectangle.svg"
            className="w-11/12 h-[calc(100vh+3rem)] absolute top-28 hidden lg:block z-0"
            style={{
              objectFit: "fill",
            }}
            alt="gradient-border"
          />
        </div>
        <div className="h-[50vh] md:h-[80vh] xl:h-screen flex justify-center items-center relative">
          <motion.div
            animate={{ y: -100 }}
            transition={{ type: "tween", ease: "easeOut", duration: 1 }}
            className="absolute top-0 aspect-video w-10/12 lg:w-1/2  rounded-xl overflow-hidden duration-500 hover:shadow-2xl hover:shadow-green-400/20 "
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/oU46IT7UFvI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </motion.div>
          <div className="absolute flex flex-row justify-center bottom-28 max-h-[80px] sm:max-h-[120px] xl:max-h-[180px] 2xl:max-h-[210px]  lg:max-w-screen-sm xl:max-w-screen-lg 2xl:max-w-[1213px]  h-full w-10/12">
            <Text
              css={{
                textGradient: "45deg, #546FDD -20%, #6FCC93 50%",
              }}
              span
              className="text-3xl sm:text-6xl text-center md:text-6xl xl:text-8xl 2xl:text-9xl font-bold top-5 right-0 animate-text"
            >
              Rp. 33.500.000,-
            </Text>
            <div className="text-lg text-center absolute left-[-1%] 2xl:left-[-5%] top-[-15%] sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
              Total Hadiah Senilai
            </div>
            <div className="text-sm absolute sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-medium bottom-8 right-[5%]">
              + Freepass Teknik Komputer*
            </div>
          </div>
        </div>
        <div className="h-[10vh] flex justify-center items-center relative" />
        <div className="flex flex-col justify-start relative mx-8 sm:mx-32 pb-28">
          <div className="relative h-min w-min">
            <Text
              css={{
                textGradient: "45deg, #546FDD -20%, #6FCC93 50%",
              }}
              span
              className="text-5xl xl:text-7xl 2xl:text-8xl font-bold animate-text"
            >
              MAGE
            </Text>
            <div className="xl:text-3xl absolute font-semibold right-[-60px] bottom-0">
              Competition
            </div>
          </div>
          <div className="flex flex-wrap flex-row justify-center self-center gap-4 mt-16 w-full">
            <CompetitionCard
              title="Game Development"
              kategori="Mahasiswa/Siswa"
              harga="Rp.100K/Rp.90K"
              image={GameDevLogo}
              link="/competition/gamedev"
            />
            <CompetitionCard
              big
              title="Application Development"
              kategori="Mahasiswa/Siswa"
              harga="Rp.100K/Rp.90K"
              image={AppDevLogo}
              link="/competition/appdev"
            />
            <CompetitionCard
              big
              title="IoT Development"
              kategori="Umum"
              harga="Rp.110.000,-"
              image={IoTDevLogo}
              link="/competition/iotdev"
            />
            <CompetitionCard
              big
              title="Olimpiade"
              kategori="Siswa"
              harga="Rp.60.000,-"
              image={OlimpiadeLogo}
              link="/competition/olim"
            />
            <div className="">
              <BannerCard 
                link="./shop"
              >
                
              </BannerCard>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
