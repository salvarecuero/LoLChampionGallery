import React from "react";
import { Slide } from "./styles/index";
import { TipsContainer, TipSection, TipsTitle, TipText } from "./styles/Tips";
import { ScrollView } from "react-native";

function Tips({ data }) {
  return (
    <Slide>
      <TipsContainer>
        <TipsTitle color="#57cc99">Tips para aliados</TipsTitle>
        <TipSection>
          <ScrollView>
            {data.allyTips.map((tip, index) => (
              <TipText key={index}>- {tip}</TipText>
            ))}
          </ScrollView>
        </TipSection>

        <TipsTitle color="#e5383b">Tips para enemigos</TipsTitle>
        <ScrollView>
          <TipSection>
            {data.enemyTips.map((tip, index) => (
              <TipText key={index}>- {tip}</TipText>
            ))}
          </TipSection>
        </ScrollView>
      </TipsContainer>
    </Slide>
  );
}

export default Tips;
