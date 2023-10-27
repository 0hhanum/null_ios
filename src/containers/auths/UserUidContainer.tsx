import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { userUidAtom } from "recoil/auths/atom";

interface IUserUidContainer {
  uid: string;
}
const UserUidContainer = ({ uid }: IUserUidContainer) => {
  const setUserUid = useSetRecoilState(userUidAtom);
  useEffect(() => {
    setUserUid(uid);
  }, []);
  return null;
};
export default UserUidContainer;
