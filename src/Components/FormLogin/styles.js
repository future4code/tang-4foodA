import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Title = styled.h1`
  text-align: center;
  font-size: 1rem;
  /* font-weight: normal; */
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`;

export const CampoText = styled.div`
  margin: 1rem 0;
`;

export const InputArea = styled(TextField)`
  height: 3.5rem;
`;

export const ContainerButton = styled(Button)`
  width: 100%;
  display: flex;
  align-items: center;
  color: #000;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: -0.39px;
  text-transform: capitalize;
`;

export const CampoButton = styled.div`
  text-align: center;
  margin: 1rem 0;
`;
