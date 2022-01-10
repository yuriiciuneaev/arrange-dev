import { Header } from "./Header";
import { Footer } from "./Footer";

function Layout({ children }) {
  return (
    <>
      <div className="bg-white">
        {/* <Header /> */}
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout
