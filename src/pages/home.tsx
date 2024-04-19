"use client";
import Image from "next/image";
import Link from "next/link";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Header from "@/components/header";
import { HR, HRust } from "@/components/icons";
import { useState } from "react";
import Modal from "@/components/tailwind/Modal";
const menu = [
  { name: "Home", link: "/", target: "_self" },
  { name: "Twitter", link: "#", target: "_blank" },
  { name: "Discord", link: "#", target: "_blank" },
  { name: "FAQ", link: "#", target: "_blank" },
];
export default function Home() {
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState<any>(null);
  return (
    <>
      <main className="w-full h-full flex justify-start items-center flex-col min-h-screen max-w-[100vw] overflow-x-hidden text-white   gap-6 xl:gap-10  relative">
        <Image
          src="/head-bg.png"
          alt="Hero"
          className=" w-1/2 xl:w-1/3 h-fit absolute right-0 top-[8vh] xl:top-[5vh] -z-10"
          quality={100}
          width={500}
          height={500}
        />
        <div className=" gap-6 xl:gap-10 flex flex-col  w-full  h-full container py-3 pb-10 2xl:px-12">
          <Header />
          <div className="flex gap-3 justify-between items-end w-full  xl:h-[40vh] px-3">
            <div className=" pt-3 w-1/2 md:w-2/3 ">
              <h1 className="leading-7">GAMENESS</h1>
              <h1 className="leading-7">AIRDROP</h1>
              <h2 className="leading-7">+400 GMNS POINTS</h2>
              <HRust />
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full px-3">
            {[
              {
                title: "MISSIONS  COMPLETED",
                value: "0",
              },
              {
                title: "TOTAL REFERRALS",
                value: "0",
              },
              {
                title: "REFERRAL POINTS",
                value: "0",
              },
              {
                title: "REFERRAL MULTIPLER",
                value: "0",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col text-[10px] md:text-sm py-2 rounded-full gap-0 h-full bg-primary items-center"
              >
                <span className="text-gray-100 font-red_hot_display font-light w-full text-center">
                  {item.title}
                </span>
                <h3>{item.value}</h3>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-2 px-3">
            <span className="text-gray-100 text-[10px] md:text-sm  font-red_hot_display font-light text-center">
              Invite friends using refferal code for bonus points!
            </span>
            <div className=" bg-primary py-2 md:py-3 px-6 rounded-full flex items-center gap-2 md:gap-3 text-xs relative">
              <span>WALLET NAME</span>
              <Tippy trigger="click" content="Copied">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("WALLET NAME");
                  }}
                  type="button"
                  data-trigger="mouseenter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M320 448v40c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V120c0-13.3 10.7-24 24-24h72v296c0 30.9 25.1 56 56 56h168zm0-344V0H152c-13.3 0-24 10.7-24 24v368c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24V128H344c-13.2 0-24-10.8-24-24zm121-31L375 7A24 24 0 0 0 358.1 0H352v96h96v-6.1a24 24 0 0 0 -7-17z" />
                  </svg>
                </button>
              </Tippy>
            </div>
          </div>
          <div className="px-2 w-full">
            <div className="flex gap-2 items-center w-full text-[9px] md:text-sm sm:text-xs py-3 pr-11 md:pr-14 relative">
              <div className=" flex flex-col justify-between h-full items-center absolute left-1/4">
                <span className="text-gray-100 w-24 md:w-28 font-red_hot_display font-light text-center">
                  1.25X MULTIPLIER
                </span>
                <div className="bg-white flex w-3 justify-start h-3"></div>
                <span className="text-gray-100 w-24 md:w-28 font-red_hot_display font-light text-center">
                  10 REFERRALS
                </span>
              </div>
              <div className=" flex flex-col justify-between h-full items-center absolute left-1/2">
                <span className="text-gray-100 w-24 md:w-28 font-red_hot_display font-light text-center">
                  1.5X MULTIPLIER
                </span>
                <div className="bg-white flex w-3 justify-start h-3"></div>
                <span className="text-gray-100 w-24 md:w-28 font-red_hot_display font-light text-center">
                  25 REFERRALS
                </span>
              </div>
              <div className=" flex flex-col justify-between h-full items-center absolute right-0">
                <span className="text-gray-100 w-24 md:w-28 font-red_hot_display font-light text-center">
                  2X MULTIPLIER
                </span>
                <div className="bg-white flex w-3 justify-start h-3"></div>
                <span className="text-gray-100 w-24 md:w-28 font-red_hot_display font-light text-center">
                  50 REFERRALS
                </span>
              </div>
              <span className="text-gray-100 w-20 font-red_hot_display font-light text-center">
                REFERRAL MULTIPLIER
              </span>

              <div className="bg-gradient-to-l from-primary from-30% via-red-800 via-100% flex w-full justify-end h-3"></div>
            </div>
          </div>
          <Image
            src="/mid-bg.png"
            width={1000}
            height={200}
            alt="Hero"
            className="h-fit w-full"
          />
          <div className="flex flex-col gap-2 w-full items-center pt-4 md:pt-10 ">
            <h1 className="leading-7 mb-2 xl:mb-6 2xl:mb-8">MISSION BOARD</h1>
            <HR />
            <div className="grid gap-3 w-full py-2 md:py-4 overflow-y-auto h-[70vh] px-3 ">
              {dataList.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between  shadow shadow-white/10 gap-2 w-full items-center bg-gradient-to-r from-primary from-10% via-[#2F3136] via-30% rounded-lg px-3 md:px-6 py-2 "
                >
                  <div className="flex flex-col gap-0.5 w-1/2  ">
                    <h5 className=" text-xs">{item.title}</h5>
                    <span className="text-gray-400 text-[10px] md:text-sm font-extralight">
                      {item.description}
                    </span>
                  </div>
                  <div className="flex gap-3 md:gap-6 items-center">
                    <span className="text-gray-400 text-[10px] shrink-0 md:text-sm font-extralight">
                      +{item.value} GMNS
                    </span>
                    <button
                      onClick={() => {
                        setSelected(item);
                        setModal(true);
                      }}
                      className="bg-white/5 rounded-full text-xs py-2 px-6"
                    >
                      START
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Modal modal={modal} setModal={setModal} title="">
          <div className=" max-w-[80vw] w-[600px] flex flex-col gap-6 text-xs md:text-sm 2xl:text-base font-red_hot_display relative">
            {selected && (
              <>
                <div className="flex flex-col gap-1">
                  <h2 className="mb-0"> {selected?.modalTitle} </h2>
                  <HRust />
                  <span className="text-white/60">
                    {" "}
                    {selected?.modalLabel}{" "}
                  </span>
                  <p> {selected?.modalDesc} </p>
                </div>
                <div className="w-full">
                  <Image
                    src={selected.modalImg}
                    width={600}
                    height={100}
                    className="w-full h-fit"
                    alt=""
                  />
                </div>
                <Link
                  href={selected.modalLink}
                  className="bg-primary text-center text-white rounded-full py-2 md:py-3 w-full font-bold"
                  /* onClick={() => setModal(false)} */
                >
                  <span>FOLLOW</span>
                </Link>
              </>
            )}
          </div>
        </Modal>
      </main>
    </>
  );
}

const dataList = [
  {
    id: 1,
    title: "LOREM IPSUM",
    description: "XXXXXXXX",
    value: 500,
    modalTitle: "GMNS UNIQUE MISSION",
    modalLabel: "FOLLOW GAMENESS ON X",
    modalDesc:
      "Stay up-to-date with the latest adventures and updates by following Gameness on our social platforms.",
    modalImg: "/twitter-bg.png",
    modalLink: "#",
  },
  {
    id: 2,
    title: "LOREM IPSUM",
    description: "XXXXXXXX",
    value: 500,
    modalTitle: "GMNS UNIQUE MISSION",
    modalLabel: "FOLLOW GAMENESS ON X",
    modalDesc:
      "Stay up-to-date with the latest adventures and updates by following Gameness on our social platforms.",
    modalImg: "/twitter-bg.png",
    modalLink: "#",
  },
  {
    id: 3,
    title: "LOREM IPSUM",
    description: "XXXXXXXX",
    value: 500,
    modalTitle: "GMNS UNIQUE MISSION",
    modalLabel: "FOLLOW GAMENESS ON X",
    modalDesc:
      "Stay up-to-date with the latest adventures and updates by following Gameness on our social platforms.",
    modalImg: "/twitter-bg.png",
    modalLink: "#",
  },
  {
    id: 4,
    title: "LOREM IPSUM",
    description: "XXXXXXXX",
    value: 500,
    modalTitle: "GMNS UNIQUE MISSION",
    modalLabel: "FOLLOW GAMENESS ON X",
    modalDesc:
      "Stay up-to-date with the latest adventures and updates by following Gameness on our social platforms.",
    modalImg: "/twitter-bg.png",
    modalLink: "#",
  },
  {
    id: 5,
    title: "LOREM IPSUM",
    description: "XXXXXXXX",
    value: 500,
    modalTitle: "GMNS UNIQUE MISSION",
    modalLabel: "FOLLOW GAMENESS ON X",
    modalDesc:
      "Stay up-to-date with the latest adventures and updates by following Gameness on our social platforms.",
    modalImg: "/twitter-bg.png",
    modalLink: "#",
  },
  {
    id: 6,
    title: "LOREM IPSUM",
    description: "XXXXXXXX",
    value: 500,
    modalTitle: "GMNS UNIQUE MISSION",
    modalLabel: "FOLLOW GAMENESS ON X",
    modalDesc:
      "Stay up-to-date with the latest adventures and updates by following Gameness on our social platforms.",
    modalImg: "/twitter-bg.png",
    modalLink: "#",
  },
  {
    id: 7,
    title: "LOREM IPSUM",
    description: "XXXXXXXX",
    value: 500,
    modalTitle: "GMNS UNIQUE MISSION",
    modalLabel: "FOLLOW GAMENESS ON X",
    modalDesc:
      "Stay up-to-date with the latest adventures and updates by following Gameness on our social platforms.",
    modalImg: "/twitter-bg.png",
    modalLink: "#",
  },
  {
    id: 8,
    title: "LOREM IPSUM",
    description: "XXXXXXXX",
    value: 500,
    modalTitle: "GMNS UNIQUE MISSION",
    modalLabel: "FOLLOW GAMENESS ON X",
    modalDesc:
      "Stay up-to-date with the latest adventures and updates by following Gameness on our social platforms.",
    modalImg: "/twitter-bg.png",
    modalLink: "#",
  },
  {
    id: 9,
    title: "LOREM IPSUM",
    description: "XXXXXXXX",
    value: 500,
    modalTitle: "GMNS UNIQUE MISSION",
    modalLabel: "FOLLOW GAMENESS ON X",
    modalDesc:
      "Stay up-to-date with the latest adventures and updates by following Gameness on our social platforms.",
    modalImg: "/twitter-bg.png",
    modalLink: "#",
  },
  {
    id: 10,
    title: "LOREM IPSUM",
    description: "XXXXXXXX",
    value: 500,
    modalTitle: "GMNS UNIQUE MISSION",
    modalLabel: "FOLLOW GAMENESS ON X",
    modalDesc:
      "Stay up-to-date with the latest adventures and updates by following Gameness on our social platforms.",
    modalImg: "/twitter-bg.png",
    modalLink: "#",
  },
];
