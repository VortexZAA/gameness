"use client";
import Image from "next/image";
import Link from "next/link";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Header from "@/components/header";
import { HRust } from "@/components/icons";

export default function Home() {
  return (
    <>
      <main className="w-full h-full flex justify-start items-center flex-col min-h-screen max-w-[100vw] overflow-x-hidden text-white     relative">
        <Image
          src="/head-bg.png"
          alt="Hero"
          className=" w-1/2 xl:w-1/3 h-fit absolute right-0 top-[8vh] xl:top-[5vh] -z-10"
          quality={100}
          width={500}
          height={500}
        />
        
        <div className=" gap-6 xl:gap-10 flex flex-col  w-full  h-full container py-3 pb-10">
          <Header />

          <div className="flex gap-3 justify-between items-center w-full md:pt-40 xl:h-[50vh] max-h-[450px] px-3">
            <div className=" pt-3 w-1/2  ">
              <p className="text-textGray text-xs md:text-sm font-light font-red_hot_display pb-4 md:pb-6">
                GET REWARDED WITH GMNS POINTS
              </p>
              <h1 className="leading-7">GAMENESS</h1>
              <h1 className="leading-7">AIRDROP</h1>
              <h2 className="leading-7">+400 GMNS POINTS</h2>
              <HRust />
              <p className="text-textGray text-xs md:text-sm font-light font-red_hot_display pt-3">
                Complete Missions <br />
                Refer Friends <br />
                Claim GMNS Points
              </p>
              <div className="flex gap-3 pt-3">
                <Link
                  href={"/home"}
                  className=" flex gap-2 bg-primary items-center font-red_hot_display text-white font-bold py-2 px-3 md:px-5 rounded-full h-8 md:h-10 text-xs md:text-sm "
                >
                  <Image
                    src="/x.png"
                    alt="x"
                    width={34}
                    height={34}
                    className="h-full w-fit"
                  />
                  Connect Wallet with X
                </Link>
              </div>
            </div>
            <div className="w-1/2 flex md:justify-center   md:items-end h-full  md:pt-40 ">
              <Image
                src="/hero.png"
                alt="Hero"
                className="w-1/3 xl:w-1/4 h-fit"
                quality={100}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}


