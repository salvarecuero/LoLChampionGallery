import React from "react";
import { ActivityIndicator } from "react-native";
import { useEffect, useState } from "react/cjs/react.development";
import { useNavigation } from "@react-navigation/native";
import ChampionCarousel from "./ChampionCarousel";

import {
  styleClasses,
  DetailedChampionContainer,
  DetailedChampionInfoContainer,
  ImageBackground,
} from "./styles/DetailedChampion";

function DetailedChampion({ championData, championImg }) {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    navigation.setOptions({ title: championData.name });
  }, []);

  return (
    <DetailedChampionContainer>
      {isLoading ? <ActivityIndicator size="large" /> : null}
      <ImageBackground
        style={isLoading ? styleClasses.hidden : ""}
        imageStyle={styleClasses.imageBackground}
        source={{ uri: championImg }}
        onLoad={() => setIsLoading(false)}
      >
        <DetailedChampionInfoContainer>
          <ChampionCarousel championData={championData} />
        </DetailedChampionInfoContainer>
      </ImageBackground>
    </DetailedChampionContainer>
  );
}

export default DetailedChampion;
