import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import ShopCard from '@/components/ShopCard';
import GameDevLogo from '@/assets/images/logo/GameDev.png';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
export default function about() {
  return (
    <>
      <Seo templateTitle="About" />
      <Navbar />

      <div className="  mt-20 h-min flex col items-center justify-center" />
      <div className="bg-black ">
        <div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
          <div className="grid-cols-4 gap-10">
            <div className="flex flex-wrap flex-row justify-center self-center gap-4 mt-16 w-full">
              <ShopCard title="Mage T-Shirt" harga="350.000" image={GameDevLogo} />
              <ShopCard title="Mage Mug" harga="150.000" image={GameDevLogo} />
              <ShopCard title="Mage Mug" harga="150.000" image={GameDevLogo} />
              <ShopCard title="Mage Mug" harga="150.000" image={GameDevLogo} />
              <ShopCard title="Mage Mug" harga="150.000" image={GameDevLogo} />
              <ShopCard title="Mage Mug" harga="150.000" image={GameDevLogo} />
              <ShopCard title="Mage Mug" harga="150.000" image={GameDevLogo} />
              <ShopCard title="Mage Mug" harga="150.000" image={GameDevLogo} />
              <ShopCard title="Mage Mug" harga="150.000" image={GameDevLogo} />
              <ShopCard title="Mage Mug" harga="150.000" image={GameDevLogo} />
            </div>
            <div className="h-[10%] w-full flex justify-center items-center">
              <Button auto className="bg-[#0F9549] text-white w-min hover:shadow-lg hover:shadow-green-500/40 font-medium" onClick={() => router.push(props.link)}>
                Selengkapnya
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
