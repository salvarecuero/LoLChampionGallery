import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { ChampionContainer } from "./styles/Champion";
import { ActivityIndicator, useWindowDimensions } from "react-native";
import DetailedChampion from "../components/DetailedChampion";

function Champion({ route }) {
  const { patchVersion, championID } = route.params;
  const [championData, setChampionData] = useState({});
  const [championImg, setChampionImg] = useState("");

  const windowsWidth = useWindowDimensions().width;
  const windowsHeight = useWindowDimensions().height;

  useEffect(() => {
    fetch(
      `http://ddragon.leagueoflegends.com/cdn/${patchVersion}/data/es_ES/champion/${championID}.json`
    )
      .then((response) => response.json())
      .then((data) => setChampionData(data.data[championID]));
  }, []);

  useEffect(() => {
    if (windowsWidth <= 400 && windowsHeight <= 900) {
      setChampionImg(
        `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championID}_0.jpg`
      );
    } else {
      setChampionImg(
        `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championID}_0.jpg`
      );
    }
  }, [windowsWidth, windowsHeight]);

  return (
    <ChampionContainer>
      {Object.keys(championData).length ? (
        <DetailedChampion
          championData={championData}
          championImg={championImg}
        />
      ) : (
        <ActivityIndicator size="large" />
      )}
    </ChampionContainer>
  );
}

export default Champion;
