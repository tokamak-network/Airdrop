import React from "react";
import { TokamakGNB } from "components/TokamakGNB";
import { HeaderComponent } from "components/Header";
import { Layout } from "./style";
import { FooterComponent } from "components/Footer";

interface LayoutProps {
  children?: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Layout>
      <TokamakGNB />
      <HeaderComponent />
      <div>{children}</div>
      <FooterComponent />
    </Layout>
  );
};
