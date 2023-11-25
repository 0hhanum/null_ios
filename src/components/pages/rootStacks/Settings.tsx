import React, { useState } from "react";
import PageLayout from "../../atoms/View/PageLayout";
import {
  ActivityIndicator,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import BaseText from "components/atoms/Texts/BaseText";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { localQuizDataAtom } from "recoil/quizzes/atom";
import { getDatabase, ref } from "firebase/database";
import { userUidAtom } from "recoil/auths/atom";
import { initializeUserQuizData } from "firebases/databases/quizzes";

const Btn = styled(TouchableHighlight)`
  border-width: 0.5px;
  border-radius: 10px;
  border-style: solid;
  border-color: ${(props) => props.theme.borderColor};
  padding: 18px;
  height: 64px;
  justify-content: center;
`;
const ProgressDialog = styled(ActivityIndicator)`
  position: absolute;
  top: 50%;
  right: 50%;
`;
enum menus {
  "초기화",
}
const Settings = () => {
  const [progressStates, setProgressStates] = useState<menus | null>(null);
  const setLocalQuizData = useSetRecoilState(localQuizDataAtom);
  const userId = useRecoilValue(userUidAtom);
  const initialize = () => {
    setProgressStates(menus.초기화);
    setLocalQuizData({
      bookmarks: {},
      quizzes: {},
    }); // initialize local data
    const dbRef = ref(getDatabase());
    initializeUserQuizData(dbRef, userId)
      .then(() => {
        setProgressStates(null);
      })
      .catch((error) => {
        console.error(error);
        alert("Something goes wrong.");
        setProgressStates(null);
        throw error;
      });
  };
  return (
    <PageLayout>
      <ScrollView>
        <Btn onPress={initialize}>
          {progressStates !== menus.초기화 ? (
            <BaseText>초기화</BaseText>
          ) : (
            <ProgressDialog size="large" />
          )}
        </Btn>
      </ScrollView>
    </PageLayout>
  );
};

export default Settings;
