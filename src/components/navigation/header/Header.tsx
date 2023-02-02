import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/favicon.ico";
export interface IHeader extends React.ComponentPropsWithoutRef<"header"> {}

const Header: React.FC<IHeader> = ({ className = "", ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-slate-900 bg-opacity-90 text-white ${className} `}
    >
      <nav className="max-w-7xl justify-between items-center flex px-4 sm:px-10 lg:px-16 py-6">
        <div className="space-x-8">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={40}
              height={40}
              className="sm:inline"
            />
          </Link>
          <Link href="/">
            <p className="hover:text-blue-500 sm:inline ">Examples</p>
          </Link>
        </div>
        <div className="space-x-8">
          <Link href="/">
            <p className="hover:text-blue-500 sm:inline">Login</p>
          </Link>
          <Link href="/">
            <p className="hover:text-blue-500 sm:inline">Sign Up</p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
