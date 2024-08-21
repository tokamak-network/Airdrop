import { DEPLOYED_ADDRESS } from "./address";

const {
  TON_ADDRESS,
  WTON_ADDRESS,
  TOS_ADDRESS,
  DOC_ADDRESS,
  AURA_ADDRESS,
  LYDA_ADDRESS,
} = DEPLOYED_ADDRESS;
export const tokens = [
  { tokenName: "TON", address: TON_ADDRESS },
  { tokenName: "WTON", address: WTON_ADDRESS },
  { tokenName: "TOS", address: TOS_ADDRESS },
  { tokenName: "DOC", address: DOC_ADDRESS },
  { tokenName: "AURA", address: AURA_ADDRESS },
  { tokenName: "LYDA", address: LYDA_ADDRESS },
  { tokenName: "Custom Token", address: "" },
];
