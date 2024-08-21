import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayoutComponent } from "components";
import { PATH } from "consts";
import { AirDropPage } from "pages";
import { isWalletConnected } from "hooks/useWallet";

const App: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      await isWalletConnected();
      console.log("Wallet loaded!");
    };
    fetchData();
  }, []);
  return (
    <BrowserRouter>
      <LayoutComponent>
        <Routes>
          <Route index element={<></>} />
          <Route path={PATH.AIRDROP} element={<AirDropPage />} />
        </Routes>
      </LayoutComponent>
    </BrowserRouter>
  );
};

export default App;
