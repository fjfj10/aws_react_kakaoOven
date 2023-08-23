import { Reset } from "styled-reset";
import { Global } from "@emotion/react";
import React, { useState } from 'react';
import * as S from "./styles/Common"
import MainLayout from "./components/MainLayout/MainLayout";
import { Route, Routes } from "react-router-dom";
import MyProject from "./pages/MyProject/MyProject";
import ShaerdProject from "./pages/ShaerdProject/ShaerdProject";

function App() {
  return (
    <>
      <Reset />
      <Global css={S.GSCommon}/>
      <MainLayout>
        <Routes>
          <Route path="/myproject" element={ <MyProject /> }/>
          <Route path="/shaerdproject" element={ <ShaerdProject /> }/>
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
