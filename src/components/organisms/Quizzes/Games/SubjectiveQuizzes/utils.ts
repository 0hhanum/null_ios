const LETTER_LIST_KO = [
  "웹",
  "어",
  "셈",
  "블",
  "리",
  "컴",
  "포",
  "넌",
  "트",
  "기",
  "반",
  "아",
  "키",
  "텍",
  "처",
  "상",
  "태",
  "관",
  "라",
  "이",
  "브",
  "러",
  "액",
  "앵",
  "귤",
  "뷰",
  "덕",
  "스",
  "머",
  "티",
  "가",
  "코",
  "드",
  "플",
  "팅",
  "서",
  "버",
  "사",
  "렌",
  "더",
  "링",
  "클",
  "언",
  "모",
  "듈",
  "번",
  "들",
  "팩",
  "바",
  "벨",
  "프",
  "에",
  "핸",
  "함",
  "수",
  "형",
  "훅",
  "컨",
  "우",
  "저",
  "호",
  "환",
  "성",
  "레",
  "임",
  "워",
  "크",
  "응",
  "디",
  "자",
  "인",
  "일",
  "최",
  "적",
  "화",
  "동",
  "테",
  "캐",
  "싱",
  "미",
  "웨",
  "장",
  "소",
  "퍼",
  "먼",
  "품",
  "질",
  "검",
  "벤",
  "작",
  "용",
  "능",
  "빌",
  "립",
  "문",
  "객",
  "체",
  "델",
  "비",
  "네",
  "게",
  "션",
  "표",
  "준",
  "접",
  "근",
  "확",
  "랫",
  "폼",
  "패",
  "지",
  "타",
  "시",
  "전",
  "셋",
];
const LETTER_LIST_EN = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "u",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "U",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const LETTER_LIST_NUM = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const KEYS_COUNT = 21;
const NUM_COUNT = 10;

const getRandomIndex = (number) => Math.floor(Math.random() * number);

const checkIsKorean = (text: string): boolean =>
  /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(text);
const checkIsNumber = (text: string): boolean => /[0-9]/.test(text);

export const getRandomLetters = (answer: string): string[] => {
  const resultSet = new Set(answer.split(""));
  const isKorean = checkIsKorean(answer);
  const isNumber = checkIsNumber(answer);
  const keyCount = isNumber ? KEYS_COUNT - NUM_COUNT : KEYS_COUNT;
  const letterList = isKorean ? LETTER_LIST_KO : LETTER_LIST_EN;
  while (resultSet.size < keyCount) {
    const randomIndex = getRandomIndex(letterList.length);
    resultSet.add(letterList[randomIndex]);
  }
  const shuffledResult = [...resultSet].sort(() =>
    Math.random() > 0.5 ? 1 : -1
  );
  return isNumber ? [...LETTER_LIST_NUM, ...shuffledResult] : shuffledResult;
};