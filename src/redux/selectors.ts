import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "./types";

export const editorSelector = (state: RootState) => state.editor;

export const currentStateSelector = createSelector(
  editorSelector,
  (state) => state.currentState
);

export const isUndoDisabledSelector = createSelector(
  editorSelector,
  (state) => state.pointer === 0
);

export const isRedoDisabledSelector = createSelector(
  editorSelector,
  (state) => state.pointer === state.statesList.length - 1
);
