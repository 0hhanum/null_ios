import BaseText from "components/atoms/Texts/BaseText";
import BaseView, { BaseViewContainer } from "components/atoms/View/BaseView";
import PageLayout from "components/atoms/View/PageLayout";
import BaseCard from "components/molecules/Cards/BaseCard";
import EmailLoginForm from "components/organisms/Auths/EmailLogin/EmailLoginForm";
import React from "react";
import styled from "styled-components/native";

const HeaderContainer = styled(BaseViewContainer)`
  padding-top: 20px;
  padding-bottom: 40px;
`;
const EmailLogin = () => {
  return (
    <PageLayout>
      <HeaderContainer>
        <BaseText size="large">Email로 계속하기</BaseText>
      </HeaderContainer>
      <BaseView>
        <BaseCard cardType="largeSqaure" trafficLight={true}>
          <BaseView>
            <EmailLoginForm />
          </BaseView>
        </BaseCard>
      </BaseView>
    </PageLayout>
  );
};

export default EmailLogin;
