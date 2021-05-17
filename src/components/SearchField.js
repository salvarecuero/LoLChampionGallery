import React from "react";
import { TextInput } from "./styles/SearchField";

function SearchField({ value, setValue }) {
  return (
    <TextInput
      value={value}
      onChangeText={setValue}
      placeholder="Buscar personaje..."
    ></TextInput>
  );
}

export default SearchField;
