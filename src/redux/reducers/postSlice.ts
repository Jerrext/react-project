import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "../../components/Card";

import { RootState } from "../store";

type PostState = {
  postValue: CardType | null;
  isModalPostOpened: boolean;
};

const initialState: PostState = {
  postValue: null,
  isModalPostOpened: false,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    selectPost(state, action: PayloadAction<CardType | null>) {
      state.postValue = action.payload;
    },
    visibilityPost(state, action: PayloadAction<boolean>) {
      state.isModalPostOpened = action.payload;
    },
  },
});

export const { selectPost, visibilityPost } = postSlice.actions;
export default postSlice.reducer;

export const PostSelectors = {
  getPostValue: (state: RootState) => {
    if (state.post.postValue) {
      return state.post.postValue;
    }
    return {
      id: 0,
      image: "",
      text: "",
      date: "",
      lesson_num: 0,
      title: "",
      description: "",
      author: 0,
    };
  },
  getPostVisibility: (state: RootState) => state.post.isModalPostOpened,
};
