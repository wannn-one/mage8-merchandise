import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import ShopCard from '@/components/ShopCard';
import Variationcard from '@/components/ShopCard_withvariation';
import { item } from '@/data/ShopProductData';
import { link } from '@/data/ShopProductData';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/router';

export default function about() {
  const router = useRouter();
  return (
    <>
      <Seo templateTitle="About" />
      <Navbar />

      <div className="  mt-20 h-min flex col items-center justify-center" />
      <div className="bg-black ">
        <div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-10 ">
          <div className="grid-cols-4 gap-10">
            <div className="flex flex-wrap flex-row justify-center self-center gap-4 mt-16 w-full">
              <Variationcard title={item[0].name} harga={item[0].price} image={item[0].variations.image1} variation={item[0].variations.image2} />
              <Variationcard title={item[1].name} harga={item[1].price} image={item[1].variations.image1} variation={item[1].variations.image2} />
              <Variationcard title={item[2].name} harga={item[2].price} image={item[2].variations.image1} variation={item[2].variations.image2} />
              <Variationcard title={item[3].name} harga={item[3].price} image={item[3].variations.image1} variation={item[3].variations.image2} />
            </div>
            <div className="h-[20%] w-full flex justify-center items-center py-12 gap-10">
              <div className="pt-2 ">
                <Button size="lg" className="bg-[#0F9549] text-white w-min hover:shadow-lg hover:shadow-green-500/40 " onClick={() => router.push(link[0].url)}>
                  Pre-Order
                </Button>
              </div>
              <div className="pt-2">
                <Button size="lg" className="bg-[#0F9549] text-white w-min hover:shadow-lg hover:shadow-green-500/40" onClick={() => router.push(link[1].url)}>
                  Tokopedia
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
