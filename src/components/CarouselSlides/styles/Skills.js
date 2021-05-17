import styled from "styled-components/native";

export const SkillsTitle = styled.Text`
  font-size: 30px;
  color: white;
  font-weight: 300;
`;

export const IconsContainer = styled.View`
  flex-direction: row;
  margin-left: 10px;
  margin-right: 10px;
`;

export const SpellIcon = styled.Image`
  margin: 5px;
  width: 32px;
  height: 32px;
  opacity: ${(props) => props.opacity};
`;

export const DataContainer = styled.View`
  height: 50%;
  flex-direction: row;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  overflow: scroll;
`;

export const SkillContainer = styled.View`
  flex: 1;
  flex-direction: column;
  display: ${(props) => props.display};
`;

export const SkillName = styled.Text`
  font-size: 22px;
  color: white;
`;

export const SkillStatsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SkillNumbers = styled.Text`
  font-size: 14px;
  font-style: italic;
  color: white;
`;

export const SkillDesc = styled.Text`
  font-size: 14px;
  color: white;
`;
