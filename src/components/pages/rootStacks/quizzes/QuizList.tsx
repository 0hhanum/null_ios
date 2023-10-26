import React from "react";
import PageLayout from "../../../atoms/View/PageLayout";
import Widget from "components/molecules/Widgets/Widget";
import BaseView from "components/atoms/View/BaseView";
import styled from "styled-components/native";
import QuizListBottomBar from "components/organisms/Quizzes/QuizListBottomBar";
import QuizCard from "components/molecules/Cards/Quizzes/QuizCard";
import { useRecoilValueLoadable } from "recoil";
import { quizSelector } from "recoil/quizzes/selector";

const quizs = [
  {
    id: "123",
    answer: ["prototype"],
    level: 3,
    question: [
      "빈칸에 들어갈 말은? (영어)",
      " <code> function Person() { ... this.getName = function() { return this.name; } } </code> ",
      "생성자 함수 작성 시 메모리 측면에서 위 방식은 적합하지 않습니다.",
      "해당 함수의 ______을 이용하는 것이 좋습니다.",
    ],
    questionType: "주관식",
    tags: ["JS"],
    title: "생성자 함수와 prototype 메서드드드메서드드드메서드드드",
  },
  {
    isBookmarked: true,
    id: "10",
    answer: ["B"],
    choices: [
      "1, 2, 3",
      "[ Promise { <pending> }, Promise { <pending> } ]",
      "오류 발생",
      "[]",
    ],
    level: 3,
    question: [
      "일반적인 경우. 다음 코드 스니펫의 결과로 적당한 것은?",
      " <code> async function someFunction(array) { return await array.map(async (item) => await someAsyncFunction(item)); } console.log(await someFunction(arr)); </code> ",
    ],
    questionType: "객관식",
    tags: ["JS", "JS미세팁"],
    title: "map()는 await을 기다리지 않는다.",
  },
  {
    id: "110",
    answer: ["B"],
    choices: [
      "1, 2, 3",
      "[ Promise { <pending> }, Promise { <pending> } ]",
      "오류 발생",
      "[]",
    ],
    level: 3,
    question: [
      "일반적인 경우. 다음 코드 스니펫의 결과로 적당한 것은?",
      " <code> async function someFunction(array) { return await array.map(async (item) => await someAsyncFunction(item)); } console.log(await someFunction(arr)); </code> ",
    ],
    questionType: "객관식",
    tags: ["JS", "JS미세팁"],
    title: "map()는 await을 기다리지 않는다.",
  },
  {
    id: "120",
    answer: ["B"],
    choices: [
      "1, 2, 3",
      "[ Promise { <pending> }, Promise { <pending> } ]",
      "오류 발생",
      "[]",
    ],
    level: 3,
    question: [
      "일반적인 경우. 다음 코드 스니펫의 결과로 적당한 것은?",
      " <code> async function someFunction(array) { return await array.map(async (item) => await someAsyncFunction(item)); } console.log(await someFunction(arr)); </code> ",
    ],
    questionType: "객관식",
    tags: ["JS", "JS미세팁"],
    title: "map()는 await을 기다리지 않는다.",
  },
  {
    id: "130",
    answer: ["B"],
    choices: [
      "1, 2, 3",
      "[ Promise { <pending> }, Promise { <pending> } ]",
      "오류 발생",
      "[]",
    ],
    level: 3,
    question: [
      "일반적인 경우. 다음 코드 스니펫의 결과로 적당한 것은?",
      " <code> async function someFunction(array) { return await array.map(async (item) => await someAsyncFunction(item)); } console.log(await someFunction(arr)); </code> ",
    ],
    questionType: "객관식",
    tags: ["JS", "JS미세팁"],
    title: "map()는 await을 기다리지 않는다.",
  },
  {
    id: "140",
    answer: ["B"],
    choices: [
      "1, 2, 3",
      "[ Promise { <pending> }, Promise { <pending> } ]",
      "오류 발생",
      "[]",
    ],
    level: 3,
    question: [
      "일반적인 경우. 다음 코드 스니펫의 결과로 적당한 것은?",
      " <code> async function someFunction(array) { return await array.map(async (item) => await someAsyncFunction(item)); } console.log(await someFunction(arr)); </code> ",
    ],
    questionType: "객관식",
    tags: ["JS", "JS미세팁"],
    title: "map()는 await을 기다리지 않는다.",
  },
  {
    id: "1410",
    answer: ["B"],
    choices: [
      "1, 2, 3",
      "[ Promise { <pending> }, Promise { <pending> } ]",
      "오류 발생",
      "[]",
    ],
    level: 3,
    question: [
      "일반적인 경우. 다음 코드 스니펫의 결과로 적당한 것은?",
      " <code> async function someFunction(array) { return await array.map(async (item) => await someAsyncFunction(item)); } console.log(await someFunction(arr)); </code> ",
    ],
    questionType: "객관식",
    tags: ["JS", "JS미세팁"],
    title: "map()는 await을 기다리지 않는다.",
  },
  {
    id: "14220",
    answer: ["B"],
    choices: [
      "1, 2, 3",
      "[ Promise { <pending> }, Promise { <pending> } ]",
      "오류 발생",
      "[]",
    ],
    level: 3,
    question: [
      "일반적인 경우. 다음 코드 스니펫의 결과로 적당한 것은?",
      " <code> async function someFunction(array) { return await array.map(async (item) => await someAsyncFunction(item)); } console.log(await someFunction(arr)); </code> ",
    ],
    questionType: "객관식",
    tags: ["JS", "JS미세팁"],
    title: "map()는 await을 기다리지 않는다.",
  },
];
const ListContainer = styled.FlatList`
  margin-vertical: 15px;
`;

const QuizList = ({
  route: {
    params: { category },
  },
}) => {
  const quizzes = useRecoilValueLoadable(quizSelector(category));
  // const quizzes = quizs.forEach((quiz) => {});
  console.log(quizzes);
  return (
    <PageLayout>
      <Widget category={category} cardType="banner" />
      <BaseView style={{ flex: 1 }}>
        <ListContainer
          data={quizs}
          renderItem={({ item: quiz, index }) => (
            <QuizCard quiz={quiz} key={quiz.id} />
          )}
        />
      </BaseView>
      <QuizListBottomBar />
    </PageLayout>
  );
};

export default QuizList;
