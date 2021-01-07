import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
  align-items: center;
  color: rgba(255, 255, 255, 0.87);
  display: flex;
  justify-content: center;
  margin: 16px 0;
`;

const Title = styled.div`
  color: rgba(255, 255, 255, 0.666);
  font-size: 32px;
`;

export default function Header() {
  return (
    <HeaderStyle>
      <Title>Summer of Letters</Title>
    </HeaderStyle>
  );
}
