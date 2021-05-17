import React from "react";
import { useState } from "react/cjs/react.development";
import { TouchableHighlight } from "react-native";
import { Slide } from "./styles/index";
import {
  SkillsTitle,
  IconsContainer,
  SpellIcon,
  DataContainer,
  SkillContainer,
  SkillName,
  SkillStatsContainer,
  SkillNumbers,
  SkillDesc,
} from "./styles/Skills";
import { StatIcon, StatIconImage } from "./styles/Stats";
import statsIcons from "../../assets/StatsIcons";

function Skills({ data }) {
  const [skillShowing, setSkillShowing] = useState(0);

  function SkillIcon({ index, skill, isPassive }) {
    return (
      <TouchableHighlight onPress={() => setSkillShowing(index)}>
        <SpellIcon
          source={{
            uri: `http://ddragon.leagueoflegends.com/cdn/11.9.1/img/${
              !isPassive ? "spell" : "passive"
            }/${skill.image.full}`,
          }}
          opacity={index == skillShowing ? 1 : 0.5}
          alt="icon"
        />
      </TouchableHighlight>
    );
  }

  function SkillInfo({ index, skill }) {
    return (
      <SkillContainer display={index == skillShowing ? "flex" : "none"}>
        <SkillName>{skill.name}</SkillName>

        <SkillStatsContainer>
          {skill.cooldown ? (
            <>
              <StatIcon>
                <StatIconImage source={statsIcons["CDR"]} />
              </StatIcon>
              <SkillNumbers>{skill.cooldown} (segundos)</SkillNumbers>
            </>
          ) : null}
        </SkillStatsContainer>

        <SkillStatsContainer>
          {skill.cost ? (
            <>
              <StatIcon>
                <StatIconImage source={statsIcons["mana"]} />
              </StatIcon>
              <SkillNumbers>
                {skill.cost} ({skill.costType.toLowerCase()})
              </SkillNumbers>
            </>
          ) : null}
        </SkillStatsContainer>

        <SkillDesc>{skill?.description?.replace(/<[^>]+>/g, "")}</SkillDesc>
      </SkillContainer>
    );
  }

  return (
    <Slide>
      <SkillsTitle>Habilidades</SkillsTitle>

      <IconsContainer>
        <SkillIcon index={0} skill={data.passive} isPassive={true} />
        {data.spells.map((skill, index) => (
          <SkillIcon key={index} index={index + 1} skill={skill} />
        ))}
      </IconsContainer>

      <DataContainer>
        <SkillInfo index={0} skill={data.passive} isPassive={true} />
        {data.spells.map((skill, index) => (
          <SkillInfo key={index} index={index + 1} skill={skill} />
        ))}
      </DataContainer>
    </Slide>
  );
}

export default Skills;
