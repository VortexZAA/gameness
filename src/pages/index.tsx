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
      <main className="w-full h-full flex justify-start items-center flex-col min-h-screen max-w-[100vw] overflow-x-hidden text-white   gap-6 xl:gap-10 p-3 pb-10 relative">
        <header className=" h-8 flex justify-between items-center w-full">
          <Image
            src="/logo.png"
            alt="Logo"
            className="h-3.5 w-fit"
            quality={100}
            width={500}
            height={200}
          />
          <div className="flex gap-2 items-center font-red_hot_display font-medium text-[10px] sm:text-xs md:text-sm lg:text-base">
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
        <div className="flex gap-3 justify-between items-center w-full">
          <div className=" pt-3 ">
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
          <Image
            src="/hero.png"
            alt="Hero"
            className="h-32 w-fit lg:h-full"
            quality={100}
            width={500}
            height={500}
          />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full">
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
              className="flex flex-col text-[10px] py-2 rounded-full gap-0 h-full bg-primary items-center"
            >
              <span className="text-gray-100 font-red_hot_display font-light w-full text-center">
                {item.title}
              </span>
              <h3>{item.value}</h3>
            </div>
          ))}
        </div>
        <div className="flex gap-2 items-center w-full text-[10px] sm:text-xs py-3 pr-10 relative">
          <div className=" flex flex-col justify-between h-full items-center absolute left-1/4">
            <span className="text-gray-100 w-20 font-red_hot_display font-light text-center">
              LOREM IPSUM{" "}
            </span>
            <div className="bg-white flex w-3 justify-start h-3"></div>
            <span className="text-gray-100 w-20 font-red_hot_display font-light text-center">
              LOREM IPSUM{" "}
            </span>
          </div>
          <div className=" flex flex-col justify-between h-full items-center absolute left-1/2">
            <span className="text-gray-100 w-20 font-red_hot_display font-light text-center">
              LOREM IPSUM{" "}
            </span>
            <div className="bg-white flex w-3 justify-start h-3"></div>
            <span className="text-gray-100 w-20 font-red_hot_display font-light text-center">
              LOREM IPSUM{" "}
            </span>
          </div>
          <div className=" flex flex-col justify-between h-full items-center absolute right-0">
            <span className="text-gray-100 w-20 font-red_hot_display font-light text-center">
              LOREM IPSUM{" "}
            </span>
            <div className="bg-white flex w-3 justify-start h-3"></div>
            <span className="text-gray-100 w-20 font-red_hot_display font-light text-center">
              LOREM IPSUM{" "}
            </span>
          </div>
          <span className="text-gray-100 w-12 font-red_hot_display font-light text-center">
            LOREM IPSUM{" "}
          </span>

          <div className="bg-primary flex w-full justify-end h-3"></div>
        </div>
        <div className="flex flex-col gap-4 w-full items-center">
          <h1 className="leading-7">LOREM: IPSUM</h1>
          <HR />
          <div className="grid gap-3 w-full pt-2">
            {[
              {
                id: 1,
                title: "LOREM IPSUM",
                description: "XXXXXXXX",
              },
              {
                id: 2,
                title: "LOREM IPSUM",
                description: "XXXXXXXX",
              },
              {
                id: 3,
                title: "LOREM IPSUM",
                description: "XXXXXXXX",
              },
              {
                id: 4,
                title: "LOREM IPSUM",
                description: "XXXXXXXX",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="flex justify-center  shadow shadow-white/10 gap-2 w-full items-center bg-gradient-to-r from-primary from-10% via-[#2F3136] via-30% rounded-lg px-6 py-2 "
              >
                <div className="flex flex-col gap-0.5 w-full">
                  <h5 className=" text-xs">{item.title}</h5>
                  <p className="text-gray-400 text-[10px] font-extralight">
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
      <footer className="flex justify-between items-center w-full">
        <Image
          src="/footer.png"
          alt="Logo"
          className="h-fit w-full"
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
