import styled from "styled-components";

const Input = styled.input`
  background: rgba(17, 17, 18, 1);
  border: 1px solid rgba(28, 28, 29, 1);
  color: rgba(255, 255, 255, 0.87);
  font-size: 16px;
  height: 20px;
  max-width: 500px;
  padding: 8px;
  width: 87%;
  &:hover {
    border: 1px solid rgba(44, 44, 46, 1);
  }
  &:focus {
    border: 1px solid rgba(44, 44, 46, 1);
    outline: 0;
  }

  &:active {
    border: 1px solid rgba(44, 44, 46, 1);
    outline: 0;
  }
`;

const InputContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export { Input, InputContainer };
