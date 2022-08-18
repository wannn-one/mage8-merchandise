import { link } from "@/data/ShopProductData";
import { Button } from "@nextui-org/react";
import { Helmet } from "react-helmet";
import { useRouter } from "next/router";

export default function BannerCard(props) {
  const router = useRouter();

  return (
      <div className="flex flex-wrap justify-center">
        <div className="">
          <div className="flex bg-login-background rounded-lg m-16 w-full overflow-hidden sm:w-max">
            <div className="flex flex-col bg-[#111111] rounded-lg w-full ml-96 overflow-hidden sm:w-max">
              <button id="close" className="block mt-2 ml-auto mb-5 mr-3 bg-transparent text-3xl text-[#c5c5c5] border-none outline-none cursor-pointer"> &times;</button>
              <h1 className="text-right pr-6 pl-6 pt-0 font-semibold text-9xl bg-clip-text text-transparent bg-gradient-to-r from-[#5A9EE5] to-[#A0E880]">MAGE 8</h1>
              <h1 className="text-right pr-20 pl-6 pt-1 font-semibold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#5A9EE5] to-[#A0E880]">MERCHANDISE</h1>
              <h1 className="text-left pr-6 pl-6 pt-0 pb-0 font-semibold text-9xl bg-clip-text text-transparent bg-gradient-to-r from-[#5A9EE5] to-[#A0E880]">WE'RE</h1>
              <h1 className="text-center pr-6 pl-12 pt-0 pb-10 font-semibold text-9xl bg-clip-text text-transparent bg-gradient-to-r from-[#5A9EE5] to-[#A0E880]">OPEN!</h1>
              <div className="h-[10%] w-full flex justify-center items-center">
                <Button 
                  className="w-min mb-3 rounded-lg bg-gradient-to-r from-[#5A9EE5] text-3xl text-[#A0E880] font-semibold text-center p-7 hover:from-[#A0E880] hover:text-slate-100"
                  onClick={() => router.push(props.link)}
                >
                  BUY NOW!
                </Button>
              </div>
            </div>
          </div>
        </div>
        //? Tambah PopUp.js pengennya
      </div>    
  );
}
