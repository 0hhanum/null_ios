import { atom } from "recoil";

export const userUidAtom = atom<string>({
  key: "userUid",
  default: null,
});
