import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import BaseText from "../../atoms/Texts/BaseText";
import BaseView from "../../atoms/View/BaseView";

const MyPage: React.FC<NativeStackScreenProps<any, "MyPage">> = ({}) => {
  return (
    <BaseView>
      <BaseText size={"large"}>my page</BaseText>
    </BaseView>
  );
};

export default MyPage;
