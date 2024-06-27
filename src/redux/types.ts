import store from "./store";

export interface EditorState {
  value: string;
  isBold: boolean;
  isItalic: boolean;
}

export interface EditorSliceState {
  currentState: EditorState;
  statesList: EditorState[];
  pointer: number;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
