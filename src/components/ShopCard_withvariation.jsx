import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { dataGameOn, dataCoPaInventor, dataGlowingSolder, dataStatueOfEngineers } from '@/data/ShopProductData';
import { useState } from 'react';

export default function CompetitionCard(props) {
  const router = useRouter();
  const [gambar, setGambar] = useState(props.image);
  function goback() {
    if (gambar === props.image) {
      setGambar(props.variation);
    } else if (gambar === props.variation) {
      setGambar(props.image);
    }
  }

  return (
    <div className="p-7 max-w-sm rounded-xl shadow-md bg-[#111111]/80 backdrop-blur aspect-[3/4]">
      <div className={`h-[50%] w-full flex justify-center items-center ${props.big ? ' p-8' : ''}`}>
        <div className="w-3/4 pt-16 relative" id="slider">
          <Image src={gambar} alt="AppDev" className="h-full object-cover w-full" width="300px" height="400px" />
        </div>
        <div className="absolute px-5 h-full w-full top-0 left-0">
          <div className="pt-20 mt-20 w-full flex justify-between">
            <button className="bg-white p-2 rounded-full opacity-20 shadow-lg" onClick={goback}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="bg-white p-2 rounded-full shadow-lg opacity-20" onClick={goback}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <h1 className="h-[10%] text-center w-full font-semibold text-lg py-20">{props.title}</h1>
      <div className="h-[12%] w-full flex flex-row gap-2 justify-center items-center">
        <Button flat auto size="md" className=" bg-green-500/20 w-full h-full transition-colors duration-100 hover:bg-green-700/20">
          {props.harga}
        </Button>
      </div>
    </div>
  );
}
