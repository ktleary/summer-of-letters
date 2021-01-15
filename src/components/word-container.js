import React, { useState } from "react";
import styled from "styled-components";
import Controls from "./controls";
import Tabs from "./tabs";
import TabEnter from "./tab-enter";
import TabQuick from "./tab-quick";
import TabView from "./tab-view";
import letterSummerCore from "../lib/letter-summer-core";
import { sortWords } from "../util/parse";
import { LABELS, SUMMERTYPES, VIEWS } from "../constants";

const LetterBox = styled.div`
  background: rgba(23, 23, 24, 1);
  color: rgba(255, 255, 255, 0.78);
  margin: 48px auto;
  max-width: 600px;
  min-height: 424px;
  width: 78%;
`;

const Content = styled.div``;

const labelKey = (val) =>
  Object.keys(LABELS).reduce(
    (selected, key) => (LABELS[key] === val ? key : selected),
    "WORD"
  );

const WordContainer = () => {
  const [activeTab, setActiveTab] = useState(VIEWS.ENTER);
  const [wordlist, setWordList] = useState("");
  const [quickQuery, setQuickQuery] = useState("");

  const sortWordList = (e) => {
    const name = e.currentTarget.getAttribute("name");
    const sorted = sortWords(wordlist, SUMMERTYPES[labelKey(name)]);
    setWordList(sorted);
  };

  const processEntry = () => setActiveTab(VIEWS.VIEW);
  const updateWords = (words) => setWordList(words);
  const resultData = quickQuery && letterSummerCore(quickQuery);

  return (
    <LetterBox>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Content>
        {
          {
            [VIEWS.ENTER]: (
              <TabEnter
                words={wordlist}
                setWordList={setWordList}
                updateWords={updateWords}
              />
            ),
            [VIEWS.VIEW]: (
              <TabView
                handleSort={sortWordList}
                wordlist={wordlist}
              />
            ),
            [VIEWS.QUICK]: (
              <TabQuick
                setQuickQuery={setQuickQuery}
                resultData={resultData}
                query={quickQuery}
              />
            ),
          }[activeTab]
        }
      </Content>
      {activeTab === VIEWS.ENTER && (
        <Controls handleSort={sortWordList} handleSubmit={processEntry} />
      )}
    </LetterBox>
  );
};
export default WordContainer;
