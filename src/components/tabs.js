import React from "react";
import styled from "styled-components";
import { VIEWS } from "../constants";

const TabsHeader = styled.div`
  align-items: center;
  display: flex;
`;

const TabLabel = styled.div`
  align-items: center;
  color: ${({ active }) =>
    active ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.50)"};
  cursor: pointer;
  display: flex;
  font-size: calc(10px + 1vmin);
  justify-content: center;
  padding: 16px 0;
  flex: 1;
  &:hover {
    background-color: ${({ active }) =>
      !active ? "rgba(39, 39, 40, 1)" : null};
    color: ${({ active }) => (!active ? "rgba(255, 255, 255, 1)" : null)};
  }
`;

const Tabs = ({ activeTab, handleClick }) => (
  <TabsHeader>
    {Object.values(VIEWS).map((view, idx) => (
      <TabLabel
        key={`tabs-${idx}`}
        name={view}
        onClick={handleClick}
        active={activeTab === view}
      >
        {view}
      </TabLabel>
    ))}
  </TabsHeader>
);

export default Tabs;
