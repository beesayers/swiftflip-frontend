export interface IFooter extends React.ComponentPropsWithoutRef<"footer"> {}

const Footer: React.FC<IFooter> = ({ className = "", ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      className={`w-full px-6 py-3 mt-4 text-white bg-gradient-to-r from-light to-lightmid dark:from-purpdark dark:to-purpmid ${className}`}
    >
      <p>SwiftFlip{"\u2122"}</p>
    </footer>
  );
};

export default Footer;
