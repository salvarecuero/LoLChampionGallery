import styled from "styled-components/native";

export const StatsTitle = styled.Text`
  font-size: 30px;
  color: white;
`;

export const StatsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-left: 20%;
`;

export const StatItem = styled.View`
  flex-direction: row;
  width: 50%;
  align-items: center;
`;

export const StatIcon = styled.View`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;

export const StatIconImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const StatValue = styled.Text`
  margin-left: 5px;
  font-size: 16px;
  color: white;
`;
