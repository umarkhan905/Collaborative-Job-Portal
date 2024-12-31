import Breadcrumb from "./Breadcrumb";
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
    <div className={className} data-theme="light">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default ThemeProvider;
