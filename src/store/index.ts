import { createGlobalState } from "react-hooks-global-state";

export const { getGlobalState, useGlobalState, setGlobalState } =
  createGlobalState({
    connectedAccount: localStorage.getItem("wallet") || "",
  });
