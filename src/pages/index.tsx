"use client";
import Image from "next/image";
import Link from "next/link";

const menu = [
  { name: "Home", link: "/", target: "_self" },
  { name: "Twitter", link: "#", target: "_blank" },
  { name: "Discord", link: "#", target: "_blank" },
  { name: "FAQ", link: "#", target: "_blank" },
];
export default function Home() {
  return (
    <>
      <main className="w-full h-full flex justify-start items-center flex-col min-h-screen max-w-[100vw] overflow-x-hidden text-white   gap-6 xl:gap-10 py-3 pb-10 relative">
        <header className=" h-8 xl:h-auto flex justify-between items-center w-full px-3">
          <Image
            src="/logo.png"
            alt="Logo"
            className="h-3.5 md:h-4 xl:h-6 w-fit"
            quality={100}
            width={500}
            height={200}
          />
          <div className="flex gap-2 md:gap-6 items-center font-red_hot_display font-medium text-[10px]  sm:text-xs md:text-sm lg:text-base">
            {menu.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="underline "
                target={item.target}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </header>
        <Image
            src="/head-bg.png"
            alt="Hero"
            className=" w-1/2 xl:w-1/3 h-fit absolute right-0 top-[8vh] xl:top-[5vh] -z-10"
            quality={100}
            width={500}
            height={500}
          />
        <div className="flex gap-3 justify-between items-center w-full  xl:h-[40vh] px-3">
          <div className=" pt-3 w-1/2 ">
            <h1 className="leading-7">GAMENESS AIRDROP</h1>
            <h2 className="leading-7">+400 GMNS POINTS</h2>
            <svg
              className="w-full pt-1 "
              viewBox="0 0 590 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="590"
                height="6"
                fill="url(#paint0_linear_2006_731)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2006_731"
                  x1="0"
                  y1="3"
                  x2="590"
                  y2="3"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.5" stop-color="#979797" />
                  <stop offset="1" stop-color="#4D4E51" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
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
          <div className=" bg-primary py-2 md:py-3 px-6 rounded-full flex items-center gap-2 md:gap-3 text-xs">
            <span>WALLET NAME</span>
            <button
              onClick={() => navigator.clipboard.writeText("WALLET NAME")}
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
          </div>
        </div>
        <div className="px-2 w-full">
          <div className="flex gap-2 items-center w-full text-[10px] md:text-sm sm:text-xs py-3 pr-10 md:pr-12 relative">
            <div className=" flex flex-col justify-between h-full items-center absolute left-1/4">
              <span className="text-gray-100 w-20 md:w-24 font-red_hot_display font-light text-center">
                LOREM IPSUM{" "}
              </span>
              <div className="bg-white flex w-3 justify-start h-3"></div>
              <span className="text-gray-100 w-20 md:w-24 font-red_hot_display font-light text-center">
                LOREM IPSUM{" "}
              </span>
            </div>
            <div className=" flex flex-col justify-between h-full items-center absolute left-1/2">
              <span className="text-gray-100 w-20 md:w-24 font-red_hot_display font-light text-center">
                LOREM IPSUM{" "}
              </span>
              <div className="bg-white flex w-3 justify-start h-3"></div>
              <span className="text-gray-100 w-20 md:w-24 font-red_hot_display font-light text-center">
                LOREM IPSUM{" "}
              </span>
            </div>
            <div className=" flex flex-col justify-between h-full items-center absolute right-0">
              <span className="text-gray-100 w-20 md:w-24 font-red_hot_display font-light text-center">
                LOREM IPSUM{" "}
              </span>
              <div className="bg-white flex w-3 justify-start h-3"></div>
              <span className="text-gray-100 w-20 md:w-24 font-red_hot_display font-light text-center">
                LOREM IPSUM{" "}
              </span>
            </div>
            <span className="text-gray-100 w-12 font-red_hot_display font-light text-center">
              LOREM IPSUM{" "}
            </span>

            <div className="bg-primary flex w-full justify-end h-3"></div>
          </div>
        </div>
        <Image
          src="/mid-bg.png"
          width={1000}
          height={200}
          alt="Hero"
          className="h-fit w-full"
        />
        <div className="flex flex-col gap-4 w-full items-center px-3">
          <h1 className="leading-7">MISSION BOARD</h1>
          <HR />
          <div className="grid gap-3 w-full pt-2 overflow-y-auto h-[70vh]">
            {[
              {
                id: 1,
                title: "LOREM IPSUM",
                description: "XXXXXXXX",
                value: 500,
              },
              {
                id: 2,
                title: "LOREM IPSUM",
                description: "XXXXXXXX",
                value: 500,
              },
              {
                id: 3,
                title: "LOREM IPSUM",
                description: "XXXXXXXX",
                value: 500,
              },
              {
                id: 4,
                title: "LOREM IPSUM",
                description: "XXXXXXXX",
                value: 500,
              },
              {
                id: 5,
                title: "LOREM IPSUM",
                description: "XXXXXXXX",
                value: 500,
              },
              {
                id: 6,
                title: "LOREM IPSUM",
                description: "XXXXXXXX",
                value: 500,
              },
              {
                id: 7,
                title: "LOREM IPSUM",
                description: "XXXXXXXX",
                value: 500,
              },
              {
                id: 8,
                title: "LOREM IPSUM",
                description: "XXXXXXXX",
                value: 500,
              },
              {
                id: 9,
                title: "LOREM IPSUM",
                description: "XXXXXXXX",
                value: 500,
              },
              {
                id: 10,
                title: "LOREM IPSUM",
                description: "XXXXXXXX",
                value: 500,
              }
            ].map((item) => (
              <div
                key={item.id}
                className="flex justify-center  shadow shadow-white/10 gap-2 w-full items-center bg-gradient-to-r from-primary from-10% via-[#2F3136] via-30% rounded-lg px-6 py-2 "
              >
                <div className="flex flex-col gap-0.5 w-full">
                  <h5 className=" text-xs">{item.title}</h5>
                  <p className="text-gray-400 text-[10px] md:text-sm font-extralight">
                    {item.description}
                  </p>
                </div>
                <button className="bg-white/5 rounded-full text-xs py-2 px-6">
                  START
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="flex justify-end items-end  p-3 md:p-6 w-full h-[20vh] bg-white">
        <Image
          src="/logo.png"
          alt="Logo"
          className="h-fit  w-1/3 md:w-1/4"
          quality={100}
          width={1000}
          height={500}
        />
      </footer>
    </>
  );
}

const HR = () => (
  <svg
    className="w-full h-fit lg:w-2/3"
    viewBox="0 0 1273 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="1273" height="6" fill="url(#paint0_linear_2006_729)" />
    <defs>
      <linearGradient
        id="paint0_linear_2006_729"
        x1="0"
        y1="3"
        x2="1273"
        y2="3"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#4D4E51" stop-opacity="0" />
        <stop offset="0.5" stop-color="#979797" />
        <stop offset="1" stop-color="#4D4E51" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
);
