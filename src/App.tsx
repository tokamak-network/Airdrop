import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayoutComponent } from "components";
import { PATH } from "consts";
import { AirDropPage } from "pages";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* <LayoutComponent> */}
      <Routes>
        <Route path={PATH.AIRDROP} element={<AirDropPage />} />
      </Routes>
      {/* </LayoutComponent> */}
    </BrowserRouter>
  );
};

export default App;
