import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { dataGameOn, dataCoPaInventor, dataGlowingSolder, dataStatueOfEngineers } from '@/data/ShopProductData';

export default function CompetitionCard(props) {
  const router = useRouter();

  return (
    <div className="p-7 max-w-sm rounded-xl shadow-md bg-[#111111]/80 backdrop-blur aspect-[3/4]">
      <div className={`h-[50%] w-full flex justify-center items-center ${props.big ? ' p-8' : ''}`}>
        <div className="w-3/4 pt-20">
          <Image src={props.image} alt="AppDev" className="object-scale-down" width="300px" height="600px" placeholder="blur" />
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
