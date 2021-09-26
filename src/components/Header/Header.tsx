import React from 'react';
import { headerData } from "../../mocks/data";

export const Header = () => {

  return (
    <header>
      <a href="/">
        <img src={headerData.headerLogoImageUrl} alt={headerData.headerLogoImageAlt} />
      </a>
    </header>
  );
};

export default Header;
