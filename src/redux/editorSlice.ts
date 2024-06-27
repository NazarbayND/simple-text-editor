import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { EditorSliceState } from "./types";

const defaultState = {
  value: "",
  isBold: false,
  isItalic: false,
};

const initialState: EditorSliceState = {
  currentState: defaultState,
  statesList: [defaultState],
  pointer: 0,
};
const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<string>) {
      state.currentState.value = action.payload;

      state.statesList = [
        ...state.statesList.slice(0, state.pointer + 1),
        state.currentState,
      ];
      state.pointer++;
    },
    undo(state) {
      if (state.pointer > 0) {
        state.pointer--;
        state.currentState = state.statesList[state.pointer];
      }
    },
    redo(state) {
      if (state.pointer < state.statesList.length - 1) {
        state.pointer++;
        state.currentState = state.statesList[state.pointer];
      }
    },
    setIsBold(state) {
      state.currentState.isBold = !state.currentState.isBold;

      state.statesList = [
        ...state.statesList.slice(0, state.pointer + 1),
        state.currentState,
      ];
      state.pointer++;
    },
    setIsItalic(state) {
      state.currentState.isItalic = !state.currentState.isItalic;

      state.statesList = [
        ...state.statesList.slice(0, state.pointer + 1),
        state.currentState,
      ];
      state.pointer++;
    },
  },
});

export const { undo, redo, setValue, setIsBold, setIsItalic } =
  editorSlice.actions;

export default editorSlice.reducer;
