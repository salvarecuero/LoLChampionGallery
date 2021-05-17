import React, { useEffect, useState } from "react";
import { HomeMain } from "./styles/Home";
import Logo from "../components/Logo";
import SearchField from "../components/SearchField";
import ChampionList from "../components/ChampionList";

function Home({ navigation }) {
  const [patchVersion, setPatchVersion] = useState(null);
  const [allChampions, setAllChampions] = useState([]);
  const [championsToShow, setChampionsToShow] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setChampionsToShow(allChampions);
  }, [allChampions]);

  useEffect(() => {
    if (searchQuery) {
      const search = searchQuery
        .toLowerCase()
        .replace(/\s+/g, "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      const searchResult = allChampions.filter(
        (champ) =>
          champ.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .search(search) >= 0
      );
      setChampionsToShow(searchResult);
    } else {
      setChampionsToShow(allChampions);
    }
  }, [searchQuery]);

  useEffect(() => {
    fetch(`https://ddragon.leagueoflegends.com/api/versions.json`)
      .then((response) => response.json())
      .then((data) => setPatchVersion(data[0]));
  }, []);

  useEffect(() => {
    patchVersion && getAllChampions(patchVersion);
  }, [patchVersion]);

  function getAllChampions(patchVersion) {
    fetch(
      `http://ddragon.leagueoflegends.com/cdn/${patchVersion}/data/es_ES/champion.json`
    )
      .then((response) => response.json())
      .then((data) =>
        setAllChampions(Object.keys(data.data).map((champ) => data.data[champ]))
      );
  }

  return (
    <HomeMain>
      <Logo />
      <SearchField value={searchQuery} setValue={setSearchQuery} />
      {allChampions ? (
        <ChampionList patchVersion={patchVersion} champions={championsToShow} />
      ) : null}
    </HomeMain>
  );
}

export default Home;
