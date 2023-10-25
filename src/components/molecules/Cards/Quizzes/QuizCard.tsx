import Bookmark from "components/atoms/Icons/Bookmark";
import QuizStateBadge from "components/atoms/Quizzes/QuizStateBadge";
import BaseText from "components/atoms/Texts/BaseText";
import Tag from "components/atoms/Texts/Tag";
import React from "react";
import styled from "styled-components/native";
import { IQuiz } from "types/quizzes/quizTypes";

interface IQuizCard {
  quiz: IQuiz;
}

const Container = styled.TouchableHighlight`
  height: 80px;
  margin-bottom: 15px;
  border-radius: 5px;
`;
const Card = styled.View`
  flex: 1;
  border-radius: 5px;
  border-style: solid;
  border-width: 0.5px;
  border-color: ${(props) => props.theme.borderColor};
  padding: 10px;
  flex-direction: row;
`;
const CardLeftSection = styled.View`
  flex: 8;
  justify-content: center;
`;
const CardRightSection = styled.View`
  flex: 1;
`;
const TagContainer = styled.View`
  flex-direction: row;
  margin-top: 7px;
`;
const TITLE_FONT_SIZE = 18;

const QuizCard = ({ quiz }: IQuizCard) => {
  return (
    <Container>
      <Card>
        <CardLeftSection>
          <BaseText size={TITLE_FONT_SIZE} numberOfLines={1}>
            {quiz.title}
          </BaseText>
          <TagContainer>
            {quiz.tags.map((tag) => (
              <Tag tagName={tag} key={tag} />
            ))}
          </TagContainer>
        </CardLeftSection>
        <CardRightSection style={{ flex: 1 }}>
          <Bookmark
            isBookmarked={false}
            style={{ position: "absolute", top: -19, right: 0 }}
          />
          <QuizStateBadge
            state="pending"
            style={{ position: "absolute", bottom: 2, right: 0 }}
          />
        </CardRightSection>
      </Card>
    </Container>
  );
};

export default QuizCard;
