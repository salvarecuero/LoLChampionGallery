import styled from "styled-components/native";

export const TipsContainer = styled.View`
  flex: 1;
  margin-top: 5%;
  margin-bottom: 5%;
  justify-content: center;
  align-items: center;
`;

export const TipSection = styled.View`
  height: 40%;
  text-align: center;
`;

export const TipsTitle = styled.Text`
  font-size: 30px;
  color: ${(props) => props.color};
`;

export const TipText = styled.Text`
  font-size: 16px;
  color: white;
  font-style: italic;
  margin-top: 25px;
  margin-left: 5px;
  margin-right: 5px;
`;
