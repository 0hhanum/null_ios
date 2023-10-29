import QuizStateBadge from "components/atoms/Quizzes/QuizStateBadge";
import BaseText from "components/atoms/Texts/BaseText";
import Tag from "components/atoms/Texts/Tag";
import React from "react";
import styled from "styled-components/native";
import { IQuiz, category } from "types/quizzes/quizTypes";
import BookmarkBtn from "./BookmarkBtn";

interface QuizCard extends Partial<IQuiz> {
  category: category;
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
const QuizTitle = styled(BaseText)`
  font-size: 18px;
  font-weight: 600;
`;

const QuizCard = ({
  id,
  title,
  tags,
  isBookmarked,
  state,
  category,
}: QuizCard) => {
  return (
    <Container>
      <Card>
        <CardLeftSection>
          <QuizTitle numberOfLines={1}>{title}</QuizTitle>
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
            category={category}
          />
          <QuizStateBadge
            state={state}
            style={{ position: "absolute", bottom: 2, right: 0 }}
          />
        </CardRightSection>
      </Card>
    </Container>
  );
};

export default QuizCard;
