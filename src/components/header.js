import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
  align-items: center;
  color: rgba(255, 255, 255, 0.87);
  display: flex;
  justify-content: flex-start;
  padding: 1em 0;
`;

const Title = styled.h1`
  align-items: center;
  color: rgba(255, 255, 255, 0.87);
  display: flex;
  font-size: 24px;
  font-weight: normal;
  margin: 0;
  padding: 0;
`;

export default function Header() {
  return (
    <HeaderStyle>
      <Title>Summer of Letters</Title>
    </HeaderStyle>
  );
}
