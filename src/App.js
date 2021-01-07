import React from "react";
import styled from 'styled-components';
import Header from "./components/header";
import WordContainer from "./components/word-container";

const SummerOfLettersWrapper = styled.div`
  border: 1px solid silver;
  height: 100vh;
`;

const App = () => (
  <SummerOfLettersWrapper>
    <Header />
    <WordContainer />
  </SummerOfLettersWrapper>
);

export default App;
