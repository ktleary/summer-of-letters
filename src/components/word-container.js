import React, { useState } from "react";
import styled from "styled-components";
import Controls from "./controls";
import Tabs from "./tabs";
import TabEnter from "./tab-enter";
import TabQuick from "./tab-quick";
import TabView from "./tab-view";
import letterSummerCore from "../lib/letter-summer-core";
import { VIEWS } from "../constants";
import { summerSort } from "../util/parse";

const LetterBox = styled.div`
  background: rgba(23, 23, 24, 1);
  color: rgba(255, 255, 255, 0.78);
  margin: 48px auto;
  max-width: 600px;
  min-height: 424px;
  width: 78%;
`;

const Content = styled.div``;

const WordContainer = () => {
  const [activeTab, setActiveTab] = useState(VIEWS.ENTER);
  const [wordlist, setWordList] = useState("");
  const [quickQuery, setQuickQuery] = useState("");

  const handleTextArea = (e) => {
    const { value } = e.target;
    setWordList(value);
  };
  const handleQuickQuery = (e) => {
    const { value } = e.target;
    setQuickQuery(value);
  };
  const sortWordList = () => {
    const summerSorted = summerSort(wordlist);
    setWordList(summerSorted);
  };
  const processEntry = () => setActiveTab(VIEWS.VIEW);
  const updateWords = (words) => setWordList(words);

  const handleActivate = (e) => {
    const view = e.currentTarget.getAttribute("name");
    setActiveTab(view);
  };

  const resultData = quickQuery && letterSummerCore(quickQuery);

  return (
    <LetterBox>
      <Tabs activeTab={activeTab} handleClick={handleActivate} />
      <Content>
        {
          {
            [VIEWS.ENTER]: (
              <TabEnter
                words={wordlist}
                onchange={handleTextArea}
                updateWords={updateWords}
              />
            ),
            [VIEWS.VIEW]: <TabView wordlist={wordlist} />,
            [VIEWS.QUICK]: (
              <TabQuick
                handleChange={handleQuickQuery}
                resultData={resultData}
                query={quickQuery}
              />
            ),
          }[activeTab]
        }
      </Content>
      {activeTab === VIEWS.ENTER && (
        <Controls sortWords={sortWordList} handleSubmit={processEntry} />
      )}
    </LetterBox>
  );
};
export default WordContainer;
