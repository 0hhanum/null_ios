import Bookmark, { IBookmark } from "components/atoms/Icons/Bookmark";
import React, { useState } from "react";
import { getDatabase, ref } from "firebase/database";
import { getAuth } from "firebase/auth";
import { Pressable } from "react-native";
import { bookmarkQuiz } from "firebases/databases/quizzes";
import { useSetRecoilState } from "recoil";
import { setLocalBookmarkSelector } from "recoil/quizzes/selector";

interface IBookmarkBtn extends IBookmark {
  quizId: string;
}
const BookmarkBtn = ({
  isBookmarked: initialBookmarked,
  quizId,
  ...props
}: IBookmarkBtn) => {
  const setLocalBookmark = useSetRecoilState(setLocalBookmarkSelector);
  const [isBookmarked, setIsBookmarked] = useState(initialBookmarked); // btn own state
  const saveBookmarkOnDB = () => {
    const dbRef = ref(getDatabase());
    const uid = getAuth().currentUser.uid;
    bookmarkQuiz(dbRef, quizId, uid, isBookmarked);
  };
  const bookmark = () => {
    saveBookmarkOnDB();
    setLocalBookmark({ quizId, isBookmarked });
    setIsBookmarked((curr) => !curr);
  };
  return (
    <Pressable onPress={bookmark}>
      <Bookmark isBookmarked={isBookmarked} {...props}></Bookmark>
    </Pressable>
  );
};

export default BookmarkBtn;
