export interface IFooter extends React.ComponentPropsWithoutRef<"footer"> {}

const Footer: React.FC<IFooter> = ({ className = "", ...footerProps }) => {
  return (
    <footer {...footerProps} className={`w-full px-6 py-3 bg-slate-100 text-slate-500 mt-4 ${className}`}>
      <p>SwiftFlips{"\u2122"}</p>
    </footer>
  );
};

export default Footer;
