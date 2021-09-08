import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "@redux-saga/core/effects";

import { State } from "./types";

import { fetchUserData } from "../../api";

const initialState: State = {
  data: undefined,
};

// > Slice
const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<{ name: string }>) => ({
      ...state,
      data: action.payload,
    }),
  },
});

// > Effect
const setUserDataAsync = createAction("setUserDataAsync");

function* setUserDataGenerate() {
  const data: { name: "Huy" } = yield call(fetchUserData);
  yield put(actions.setUserData(data));
}

// > Export
export function* saga() {
  yield takeLatest(setUserDataAsync.toString(), setUserDataGenerate);
}

export const { reducer } = slice;

export const actions = { ...slice.actions, setUserDataAsync };
