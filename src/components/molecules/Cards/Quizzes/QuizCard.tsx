import QuizStateBadge from "components/atoms/Quizzes/QuizStateBadge";
import BaseText from "components/atoms/Texts/BaseText";
import Tag from "components/atoms/Texts/Tag";
import React from "react";
import styled from "styled-components/native";
import { IQuiz } from "types/quizzes/quizTypes";
import BookmarkBtn from "./BookmarkBtn";
import BaseView from "components/atoms/View/BaseView";
import QuizCardSkeletonUIAnimation from "./QuizCardSkeletonUIAnimation";
import NewQuizIndicator from "components/atoms/Texts/NewQuizIndicator";

interface IQuizCard
  extends Pick<IQuiz, "id" | "title" | "tags" | "isBookmarked" | "state"> {
  onPress: () => void;
  isSkeletonUI: boolean;
  isNewQuiz: boolean;
}
const Container = styled.TouchableHighlight`
  height: 80px;
  margin-bottom: 15px;
  border-radius: 5px;
  width: 100%;
`;
const Card = styled(BaseView)`
  flex: 1;
  border-radius: 5px;
  border-style: solid;
  border-width: 0.8px;
  border-color: ${(props) => props.theme.borderColor};
  padding: 10px;
  flex-direction: row;
  overflow: hidden;
`;
const CardLeftSection = styled(BaseView)`
  flex: 8;
  justify-content: center;
`;
const CardRightSection = styled(BaseView)`
  flex: 1;
`;
const TagContainer = styled(BaseView)`
  flex-direction: row;
  margin-top: 7px;
  overflow: hidden;
`;
const QuizTitle = styled(BaseText)`
  font-weight: 600;
`;

const QuizCard = ({
  id,
  title,
  tags,
  isBookmarked,
  state,
  onPress,
  isSkeletonUI = false,
  isNewQuiz,
}: IQuizCard) => {
  return (
    <Container onPress={onPress}>
      <Card>
        <CardLeftSection>
          <QuizTitle numberOfLines={1} size={18}>
            {isNewQuiz && NewQuizIndicator}
            {title}
          </QuizTitle>
          <TagContainer>
            {tags.map((tag) => (
              <Tag tagName={tag} key={tag} />
            ))}
          </TagContainer>
        </CardLeftSection>
        <CardRightSection style={{ flex: 1 }}>
          <BookmarkBtn
            isBookmarked={isBookmarked}
            quizId={id}
            style={{ position: "absolute", top: -19, right: 0 }}
          />
          <QuizStateBadge
            state={state}
            style={{ position: "absolute", bottom: 2, right: 0 }}
          />
        </CardRightSection>
        {isSkeletonUI && <QuizCardSkeletonUIAnimation />}
      </Card>
    </Container>
  );
};

export default QuizCard;
