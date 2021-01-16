import React from "react";
import styled from "styled-components";
import { VIEWS } from "../constants";

const TabsHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const TabLabel = styled.div`
  align-items: center;
  border-bottom: ${({ active }) =>
    active ? "1px solid rgba(76, 76, 78, 1)" : "1px solid rgba(39, 39, 40, 1)"};
  color: ${({ active }) =>
    active ? "rgba(255, 255, 255, 1)" : "rgba(235.0, 235.0, 245.0, 0.6)"};
  cursor: pointer;
  display: flex;
  font-size: calc(10px + 1vmin);
  justify-content: center;
  margin: 0;
  padding: 16px 0;
  flex-grow: 2;
  &:hover {
    background-color: ${({ active }) =>
      !active ? "rgba(39, 39, 40, 1)" : null};
    color: ${({ active }) =>
      !active ? "rgba(235.0, 235.0, 245.0, 0.87)" : null};
  }
  &:active {
    color: ${({ active }) => (!active ? "rgba(48.0, 209.0, 88.0, 1)" : null)};
  }
`;

const Tabs = ({ activeTab, setActiveTab }) => {
  const handleClick = (e) => {
    const { id } = e.target;
    setActiveTab(id);
  };
  return (
    <TabsHeader>
      {Object.values(VIEWS).map((view, idx) => (
        <TabLabel
          key={`tabs-${idx}`}
          name={view}
          id={view}
          onClick={handleClick}
          active={activeTab === view}
        >
          {view}
        </TabLabel>
      ))}
    </TabsHeader>
  );
};

export default Tabs;
