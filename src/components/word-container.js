import React, { useState } from "react";
import styled from "styled-components";
import TabEnter from "./tab-enter";
import TabView from "./tab-view";
import TabQuick from "./tab-quick";

const VIEWS = Object.freeze({
  ENTER: "Enter Words",
  VIEW: "View Results",
  QUICK: "Quick Check",
});

const ControlBox = styled.div`
  background: #1b1b1b;
  border: 1px solid #313131;
  color: rgba(255, 255, 255, 0.78);
  margin: 48px auto;
  max-width: 600px;
  min-height: 320px;
  width: 78%;
`;
const TabsHeader = styled.div`
  color: rgba(255, 255, 255, 0.87);
  display: flex;
  flex-wrap: nowrap;
  height: 32px;
  justify-content: left;
  line-height: 18px;
  vertical-align: middle;
`;

const TabLabel = styled.div`
  border: 1px solid #313131;
  color: rgba(255, 255, 255, 0.87);
  font-family: sans-serif;
  font-size: 18px;
  padding: 6px 8px;
  text-align: center;
  flex: 3;
  &:hover {
    background-color: #313131;
    color: white;
  }
`;

const WordContainer = () => {
  let [activeTab, setActiveTab] = useState(VIEWS.ENTER);
  let [wordlist, setWordList] = useState("");
  const handleTextArea = (e) => {
    const { value } = e.target;
    setWordList(value);
  };
  const sortWordList = () => {
    if (wordlist.indexOf(",") === -1) return;
    const parsed = wordlist.split(",").map((word) => word.trim().toUpperCase());
    setWordList(parsed.sort().join(", "));
  };

  const processEntry = () => setActiveTab(VIEWS.VIEW);
  const updateWords = (words) => setWordList(words);
  const activateEnter = () => setActiveTab(VIEWS.ENTER);
  const activateView = () => setActiveTab(VIEWS.VIEW);
  const activateQuick = () => setActiveTab(VIEWS.QUICK);

  const tabContent = {
    [VIEWS.ENTER]: (
      <TabEnter
        handleSubmit={processEntry}
        sortWords={sortWordList}
        words={wordlist}
        onchange={handleTextArea}
        updateWords={updateWords}
      />
    ),
    [VIEWS.VIEW]: <TabView wordlist={wordlist} />,
    [VIEWS.QUICK]: <TabQuick />,
  };

  return (
    <ControlBox>
      <TabsHeader>
        <TabLabel onClick={activateEnter}>{VIEWS.ENTER}</TabLabel>
        <TabLabel onClick={activateView}>{VIEWS.VIEW}</TabLabel>
        <TabLabel onClick={activateQuick}>{VIEWS.QUICK}</TabLabel>
      </TabsHeader>
      {tabContent[activeTab]}
    </ControlBox>
  );
};
export default WordContainer;
