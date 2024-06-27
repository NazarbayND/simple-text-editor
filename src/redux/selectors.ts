import { RootState } from "./types";

export const currentStateSelector = (state: RootState) =>
  state.editor.currentState;

export const isUndoDisabledSelector = (state: RootState) =>
  state.editor.pointer === 0;

export const isRedoDisabledSelector = (state: RootState) =>
  state.editor.pointer === state.editor.statesList.length - 1;
