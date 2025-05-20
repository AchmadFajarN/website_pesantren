import React from "react";
import { useState } from "react";

const useInput = (keyword = "") => {
  const [key, setKey] = useState(keyword);
  const onChangeKey = (ev) => {
    setKey(ev.target.value);
  };

  return [key, onChangeKey];
};

export default useInput;
