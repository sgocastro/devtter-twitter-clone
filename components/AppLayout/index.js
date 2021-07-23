import Link from "next/link";
import AppLayoutStyles from "../../styles/AppLayoutStyles";
import GlobalStyles from "../../styles/GlobalStyles";

const AppLayout = ({ children, SEOComponente }) => {
  return (
    <>
      <SEOComponente />
      <div>
        <header className="AppLayout_header">
          <Link href="/">
            <h2>Devtter</h2>
          </Link>
        </header>
        <main>
          <div>{children}</div>
        </main>
        <footer className="AppLayout_footer">
          <h2>Powered by @sgocastro</h2>
        </footer>
      </div>
      <style jsx global>
        {GlobalStyles}
      </style>
      <style jsx>{AppLayoutStyles}</style>
    </>
  );
};

export default AppLayout;
