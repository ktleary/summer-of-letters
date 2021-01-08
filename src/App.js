import React from "react";
import styled from 'styled-components';
import Header from "./components/header";
import WordContainer from "./components/word-container";

const SummerOfLettersWrapper = styled.div`
  background: rgba(17, 17, 18, 1);
  height: 100%;
  padding-bottom: 16px;
  min-height: 100vh;
`;

const App = () => (
  <SummerOfLettersWrapper>
    <Header />
    <WordContainer />
  </SummerOfLettersWrapper>
);

export default App;
