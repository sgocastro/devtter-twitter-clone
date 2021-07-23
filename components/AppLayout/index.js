import Link from "next/link"
import AppLayoutStyles from "../../styles/AppLayoutStyles"
import GlobalStyles from "../../styles/GlobalStyles"
import Logo from "../Logo";

const AppLayout = ({ children, SEOComponente }) => {
  return (
    <>
      <SEOComponente />
      <div>
        <main>
          <section className="AppLayout_header">
            <Link href="/">
              <Logo width="90px" height="90px"/>
            </Link>
          </section>
          <div>
            {children}
          </div>
          <section className="AppLayout_footer">Footer</section>
        </main>
      </div>
      <style jsx global>
        {GlobalStyles}
      </style>
      <style jsx>{AppLayoutStyles}</style>
    </>
  );
};

export default AppLayout;
