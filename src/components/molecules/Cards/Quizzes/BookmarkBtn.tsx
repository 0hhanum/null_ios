import Bookmark, { IBookmark } from "components/atoms/Icons/Bookmark";
import React from "react";
import { getDatabase, ref } from "firebase/database";
import { getAuth } from "firebase/auth";
import { Pressable } from "react-native";
import { bookmarkQuiz } from "firebases/databases/quizzes";
import { useSetRecoilState } from "recoil";
import { localQuizDataAtom } from "recoil/quizzes/atom";

interface IBookmarkBtn extends IBookmark {
  quizId: string;
}
const BookmarkBtn = ({ isBookmarked, quizId, ...props }: IBookmarkBtn) => {
  const setLocalQuizDataAtom = useSetRecoilState(localQuizDataAtom);
  const setLocalBookmark = (quizId: string) => {
    setLocalQuizDataAtom((current) => {
      const newBookmarks = { ...current.bookmarks };
      if (isBookmarked) {
        newBookmarks[quizId] = false;
      } else {
        newBookmarks[quizId] = true;
      }
      return {
        ...current,
        bookmarks: newBookmarks,
      };
    });
  };
  const saveBookmarkOnDB = (quizId: string) => {
    const dbRef = ref(getDatabase());
    const uid = getAuth().currentUser.uid;
    bookmarkQuiz(dbRef, quizId, uid, isBookmarked);
  };
  const bookmark = (quizId: string) => {
    saveBookmarkOnDB(quizId);
    setLocalBookmark(quizId);
  };
  return (
    <Pressable onPress={() => bookmark(quizId)}>
      <Bookmark isBookmarked={isBookmarked} {...props}></Bookmark>
    </Pressable>
  );
};

export default BookmarkBtn;
