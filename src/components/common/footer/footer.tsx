import { FC, Fragment } from "react";

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <Fragment>
      <footer className="footer mt-auto py-3 bg-white text-center">
        <div className="container">
          <span className="text-muted">
            Copyright © {year}{" "}
            <a href="#" className="text-dark fw-semibold">
              loomoStudio
            </a>
            {". "}
            All rights reserved.
          </span>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
