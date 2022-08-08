import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import Image from "next/image";
export default function about() {
  return (
    <>
      <Seo templateTitle="About" />
      <Navbar />

      <div className="  mt-20 h-min flex col items-center justify-center" />
      <div className="bg-black ">
        <div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
          <div className="grid grid-flow-row grid-cols-4 gap-10">
            <div className="shadow-lg rounded-lg">
              <a href="#">
              </a>
                <img src ="/Icon-Mage.svg" className="rounded-lg"/>
                <div className="p-5">
                <h3><a href="#">Mage T shirt</a></h3>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
