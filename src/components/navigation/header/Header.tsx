import Image from "next/image";
import Link from "next/link";
export interface IHeader extends React.ComponentPropsWithoutRef<"header"> {}

const Header: React.FC<IHeader> = ({ className = "", ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`w-full bg-gradient-to-r from-light to-lightmid dark:from-purpdark dark:to-purpmid ${className} mb-4`}
    >
      <nav className="flex px-6 py-2.5">
        <div>
          <Link href="/">
            <Image
              src="/logo/transparent_white_nopro.svg"
              alt="logo"
              width={369.9130434782609 * 0.35}
              height={76.08671904593774 * 0.35}
              className="sm:inline"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
