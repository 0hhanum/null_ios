import Bookmark, { IBookmark } from "components/atoms/Icons/Bookmark";
import React from "react";
import { getDatabase, ref } from "firebase/database";
import { getAuth } from "firebase/auth";
import { Pressable } from "react-native";
import { bookmarkQuiz } from "firebases/databases/quizzes";
import { useSetRecoilState } from "recoil";
import { localQuizDataAtom } from "recoil/quizzes/atom";
import { category } from "types/quizzes/quizTypes";

interface IBookmarkBtn extends IBookmark {
  quizId: string;
  category: category;
}
const BookmarkBtn = ({
  isBookmarked,
  quizId,
  category,
  ...props
}: IBookmarkBtn) => {
  const setLocalQuizDataAtom = useSetRecoilState(localQuizDataAtom);
  const setLocalBookmark = () => {
    setLocalQuizDataAtom((current) => {
      const newBookmarks = { ...current.bookmarks };
      const bookmarkObj = {
        isBookmarked: !isBookmarked,
        category,
      };
      newBookmarks[quizId] = bookmarkObj;
      return {
        ...current,
        bookmarks: newBookmarks,
      };
    });
  };
  const saveBookmarkOnDB = () => {
    const dbRef = ref(getDatabase());
    const uid = getAuth().currentUser.uid;
    bookmarkQuiz(dbRef, quizId, uid, category, isBookmarked);
  };
  const bookmark = () => {
    saveBookmarkOnDB();
    setLocalBookmark();
  };
  return (
    <Pressable onPress={() => bookmark()}>
      <Bookmark isBookmarked={isBookmarked} {...props}></Bookmark>
    </Pressable>
  );
};

export default BookmarkBtn;
