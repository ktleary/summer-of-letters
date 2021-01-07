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
  background: rgba(23, 23, 24, 1);
  border: 0;
  color: rgba(255, 255, 255, 0.78);
  margin: 48px auto;
  max-width: 600px;
  min-height: 384px;
  width: 78%;
`;
const TabsHeader = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 16px;
`;

const TabLabel = styled.div`
  align-items: center;

  color: ${({ active }) =>
    active ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.50)"};
  cursor: pointer;
  display: flex;
  font-size: 16px;
  justify-content: center;
  padding: 8px 0;
  flex: 1;
  &:hover {
    background-color: ${({ active }) =>
      !active ? "rgba(39, 39, 40, 1)" : null};
    color: ${({ active }) => (!active ? "rgba(255, 255, 255, 1)" : null)};
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
    setWordList([...new Set(parsed)].sort().join(", "));
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
        <TabLabel onClick={activateEnter} active={activeTab === VIEWS.ENTER}>
          {VIEWS.ENTER}
        </TabLabel>
        <TabLabel onClick={activateView} active={activeTab === VIEWS.VIEW}>
          {VIEWS.VIEW}
        </TabLabel>
        <TabLabel onClick={activateQuick} active={activeTab === VIEWS.QUICK}>
          {VIEWS.QUICK}
        </TabLabel>
      </TabsHeader>
      {tabContent[activeTab]}
    </ControlBox>
  );
};
export default WordContainer;
