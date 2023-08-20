import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import BaseText from "../../atoms/Texts/BaseText";
import PageLayout from "../../atoms/View/PageLayout";

const MyPage: React.FC<NativeStackScreenProps<any, "MyPage">> = ({}) => {
  return (
    <PageLayout>
      <BaseText size={"large"}>my page</BaseText>
    </PageLayout>
  );
};

export default MyPage;
