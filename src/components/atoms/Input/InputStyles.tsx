import styled from 'styled-components';

export const FormikInput = styled.input<{ radius: string; margin: string }>`
  border-radius: ${(props) => props.radius};
  border: 2px solid #cec8c8;
  outline: none;
  rows:"5";
  height: 35px;
  padding-left: 6px;
  margin: ${(props) => props.margin};
  width: 100%;
  ::-webkit-input-placeholder { 
  color:#f1e5e5;
}}
`;

export const InputError = styled.span`
  color: red;
  margin-bottom: 5px;
`;

export const FieldBox = styled.div`
  display: flex;
  flex-direction: column;
`;
