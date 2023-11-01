interface IExtractDataFromCodeTagString {
  content: string;
  language: string;
}
const extractContentFromCodeTagString = (str: string) => {
  const codeMatch = str.match(/<code([^>]*)>(.*?)<\/code>/s);
  if (codeMatch && codeMatch[2]) {
    return codeMatch[2];
  } else {
    return null;
  }
};
const extractLangAttrValueFromCodeTagString = (str: string) => {
  const langMatch = str.match(/lang=([^\s>]+)/);
  if (langMatch && langMatch[1]) {
    return langMatch[1];
  } else {
    return null;
  }
};
export const extractDataFromCodeTagString = (
  str: string
): IExtractDataFromCodeTagString => {
  return {
    content: extractContentFromCodeTagString(str),
    language: extractLangAttrValueFromCodeTagString(str),
  };
};
