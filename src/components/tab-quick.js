import React from "react";
import styled from "styled-components";
import ResultsRow from "./result-row";
import ResultsHeader from "./results-header";
import SearchBox from "./search-box";

const TabQuickWrapper = styled.div`
  padding-top: 0;
`;

const QuickResultsRow = styled(ResultsRow)`
  border-bottom: 0;
  font-size: 16px;
  margin-top: 16px;
`;

const TabQuick = ({ setQuickQuery, query, resultData }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    setQuickQuery(value);
  };
  const handleClose = (e) => {
    setQuickQuery("");
  };

  return (
    <TabQuickWrapper data-testid="tab-quick">
      <SearchBox
        handleChange={handleChange}
        handleClose={handleClose}
        query={query}
        data-testid="quick-input"
      />
      <ResultsHeader isSingle={true} />
      {resultData && <QuickResultsRow isSingle={true} row={resultData} />}
    </TabQuickWrapper>
  );
};

export default TabQuick;
