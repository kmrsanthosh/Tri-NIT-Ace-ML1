import React from "react";

interface Props {
  children: React.ReactNode;
  bgColor1?: string;
  bgColor2?: string;
}

const Layout: React.FC<Props> = ({ children, bgColor1, bgColor2 }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};
export default Layout;
