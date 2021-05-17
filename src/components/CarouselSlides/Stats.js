import React from "react";
import { Slide } from "./styles/index";
import {
  StatsTitle,
  StatsContainer,
  StatItem,
  StatIcon,
  StatIconImage,
  StatValue,
} from "./styles/Stats";
import statsIcons from "../../assets/StatsIcons";

function Stats({ data }) {
  function Stat({ stat, value }) {
    return (
      <StatItem>
        <StatIcon>
          <StatIconImage source={statsIcons[stat]} />
        </StatIcon>
        <StatValue>{value}</StatValue>
      </StatItem>
    );
  }

  return (
    <Slide>
      <StatsTitle>Estadísticas</StatsTitle>
      <StatsContainer>
        {Object.keys(data).map((stat, key) => (
          <Stat key={key} stat={stat} value={data[stat]}></Stat>
        ))}
      </StatsContainer>
    </Slide>
  );
}

export default Stats;
