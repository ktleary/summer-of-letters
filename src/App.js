import React from "react";
import styled from 'styled-components';
import Header from "./components/header";
import WordContainer from "./components/word-container";

const SummerOfLettersWrapper = styled.div`
  background: rgba(0, 0, 0, 1);
  height: 100%;
  padding: 0 16px;
  margin: auto;
  max-width: 1200px;
  min-height: 100vh;
`;

const App = () => (
  <SummerOfLettersWrapper>
    <Header />
    <WordContainer />
  </SummerOfLettersWrapper>
);

export default App;
