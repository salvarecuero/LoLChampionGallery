import React from "react";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { useEffect, useState } from "react/cjs/react.development";
import Slides from "./CarouselSlides/";
import { CarouselContainer } from "./styles/ChampionCarousel";

function ChampionCarousel({ championData }) {
  const [basicdata, setBasicData] = useState(null);
  const [initialStats, setInitialStats] = useState(null);
  const [skills, setSkills] = useState(null);
  const [tips, setTips] = useState(null);

  useEffect(() => {
    parseData();
  }, []);

  function parseData() {
    setBasicData({
      name: championData.name,
      description: championData.title,
    });
    setInitialStats({
      hp: championData.stats.hp,
      mana: championData.stats.mp,
      moveSpeed: championData.stats.movespeed,
      armor: championData.stats.armor,
      attackDamage: championData.stats.attackdamage,
      attackSpeed: championData.stats.attackspeed,
    });

    setSkills({
      passive: championData.passive,
      spells: championData.spells.map((spell) => {
        return {
          name: spell.name,
          description: spell.description,
          cooldown: spell.cooldownBurn,
          cost: spell.costBurn,
          image: spell.image,
          costType: championData.partype,
        };
      }),
    });

    setTips({
      allyTips: Object.entries(championData.allytips).map(
        (allyTip, index) => championData.allytips[index]
      ),
      enemyTips: Object.entries(championData.enemytips).map(
        (enemyTip, index) => championData.enemytips[index]
      ),
    });
  }

  return (
    <CarouselContainer>
      <SwiperFlatList>
        {basicdata ? <Slides.BasicData data={basicdata} /> : null}
        {initialStats ? <Slides.Stats data={initialStats} /> : null}
        {skills ? <Slides.Skills data={skills} /> : null}
        {tips ? <Slides.Tips data={tips} /> : null}
      </SwiperFlatList>
    </CarouselContainer>
  );
}

export default ChampionCarousel;
