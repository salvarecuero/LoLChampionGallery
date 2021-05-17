import React from "react";
import { Slide } from "./styles/index";
import { ChampionTitle, ChampionDesc } from "./styles/BasicData";

function BasicData({ data }) {
  return (
    <Slide>
      <ChampionTitle>{data.name}</ChampionTitle>
      <ChampionDesc>{data.description}</ChampionDesc>
    </Slide>
  );
}

export default BasicData;
