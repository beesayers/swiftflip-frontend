import Link from "next/link";
export interface IHeader extends React.ComponentPropsWithoutRef<"header"> {}

const Header: React.FC<IHeader> = ({ className = "", ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-between ${className}`}
    >
      <div className="space-x-5 m-5">
        <Link href="/">
          <p className="hover:underline sm:inline">Home</p>
        </Link>
        <Link href="/">
          <p className="hover:underline sm:inline">Store</p>
        </Link>
      </div>
      <div className="space-x-5 m-5">
        <Link href="/">
          <p className="hover:underline hidden sm:inline">Gmail</p>
        </Link>
        <Link href="/">
          <p className="hover:underline hidden sm:inline">Images</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
