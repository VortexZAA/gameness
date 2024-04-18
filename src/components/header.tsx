import Image from "next/image";
import Link from "next/link";
const menu = [
  { name: "Home", link: "/", target: "_self" },
  { name: "Twitter", link: "#", target: "_blank" },
  { name: "Discord", link: "#", target: "_blank" },
  { name: "FAQ", link: "#", target: "_blank" },
];
export default function Header() {
  return (
    <header className=" h-8 xl:h-auto flex justify-between items-center w-full px-3 md:px-6">
      <Link href={"/"} className="w-full">
        <Image
          src="/logo.png"
          alt="Logo"
          className="h-3.5 md:h-4 xl:h-6 w-fit"
          quality={100}
          width={500}
          height={200}
        />
      </Link>
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
  );
}
