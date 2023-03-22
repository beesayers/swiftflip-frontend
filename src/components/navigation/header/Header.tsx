import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/favicon.ico";
export interface IHeader extends React.ComponentPropsWithoutRef<"header"> {}

const Header: React.FC<IHeader> = ({ className = "", ...headerProps }) => {
  return (
    <header {...headerProps} className={`w-full backdrop-blur-md bg-slate-900 bg-opacity-90 text-white ${className} mb-4`}>
      <nav className="flex px-6 py-3">
        <div>
          <Link href="/">
            <Image src={logo} alt="logo" width={30} height={30} className="sm:inline" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
