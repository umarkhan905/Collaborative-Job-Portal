import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const ThemeProvider = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={className} data-theme="coffee">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default ThemeProvider;
