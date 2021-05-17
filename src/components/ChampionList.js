import React from "react";
import { TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import {
  ChampionListContainer,
  ChampionItemContainer,
  Icon,
} from "./styles/ChampionList";

function ChampionList({ patchVersion, champions }) {
  const navigation = useNavigation();

  function parseObjectAsArray(object) {
    return Object.keys(object).map((key) => object[key]);
  }

  function GenerateChampInlist({ champion }) {
    return (
      <ChampionItemContainer>
        <TouchableHighlight
          onPress={() =>
            navigation.navigate("Champion", {
              patchVersion: patchVersion,
              championID: champion.id,
            })
          }
        >
          <Icon
            source={{
              uri: `http://ddragon.leagueoflegends.com/cdn/${patchVersion}/img/champion/${champion.image.full}`,
            }}
          />
        </TouchableHighlight>
      </ChampionItemContainer>
    );
  }

  return (
    <>
      {
        <ScrollView>
          <ChampionListContainer>
            {parseObjectAsArray(champions).map((champion) => (
              <GenerateChampInlist key={champion.key} champion={champion} />
            ))}
          </ChampionListContainer>
        </ScrollView>
      }
    </>
  );
}

export default ChampionList;
