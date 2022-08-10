import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function CompetitionCard(props) {
  const router = useRouter();

  return (
    <div className="p-6 max-w-smin rounded-xl shadow-md bg-[#111111]/80 backdrop-blur aspect-[3/4]">
      <div className="flex flex-col justify-between items-start h-full">
        <div className={`h-[50%] w-full flex justify-center items-center ${props.big ? ' p-8' : ''}`}>
          <div className="w-3/4">
            <Image src={props.image} alt="AppDev" className="object-scale-down" width="200px" height="400px" placeholder="blur" />
          </div>
        </div>
        <h1 className="h-[10%] text-center w-full font-semibold text-lg">{props.title}</h1>
        <div className="h-[12%] w-full flex flex-row gap-2 justify-center items-center">
          <Button flat auto size="md" className="= bg-green-500/20 w-full h-full transition-colors duration-100 hover:bg-green-700/20">
            {props.harga}
          </Button>
        </div>
      </div>
    </div>
  );
}
