// import {Header, Footer} from '.';

import { Header } from "./header";
import { Footer } from "./footer";

function Layout({ children }) {
  return (
    <>
      <div className="bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout
