import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="w-full h-full flex justify-between items-center">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="cursor-pointer"
        />
      </Link>
    </nav>
  );
};

export default Nav;
