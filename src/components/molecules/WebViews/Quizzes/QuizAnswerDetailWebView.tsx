import BaseView from "components/atoms/View/BaseView";
import BaseWebView from "components/atoms/WebViews/BaseWebView";
import React from "react";
import { WebViewProps } from "react-native-webview";
import { useTheme } from "styled-components";
import styled from "styled-components/native";
import { IQuiz } from "types/quizzes/quizTypes";

interface IQuizAnswerDetailWebView extends WebViewProps {
  quizId: IQuiz["id"];
}
const WEBVIEW_BORDER_RADIUS = 20;
const Container = styled(BaseView)`
  flex: 1;
  width: 100%;
`;
const QuizAnswerDetailWebView = ({
  quizId,
  ...props
}: IQuizAnswerDetailWebView) => {
  const theme = useTheme();
  const uri = `${process.env.EXPO_PUBLIC_NULL_ANSWER_HUB_URI}/${quizId}`;
  return (
    <Container>
      <BaseWebView
        style={{
          backgroundColor: theme.headerColor,
          borderEndEndRadius: WEBVIEW_BORDER_RADIUS,
          borderEndStartRadius: WEBVIEW_BORDER_RADIUS,
        }}
        uri={uri}
        {...props}
      />
    </Container>
  );
};

export default QuizAnswerDetailWebView;
