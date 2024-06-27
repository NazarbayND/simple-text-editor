import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setValue,
  undo,
  redo,
  setIsBold,
  setIsItalic,
} from "../redux/editorSlice";
import { ActionType } from "../types/actions";
import {
  currentStateSelector,
  isRedoDisabledSelector,
  isUndoDisabledSelector,
} from "../redux/selectors";

export function Editor() {
  const dispatch = useDispatch();
  const { value, isBold, isItalic } = useSelector(currentStateSelector);
  const isUndoDisabled = useSelector(isUndoDisabledSelector);
  const isRedoDisabled = useSelector(isRedoDisabledSelector);

  const handleValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setValue(e.target.value));
  };

  const handleAction = (type: ActionType) => {
    switch (type) {
      case ActionType.UNDO:
        dispatch(undo());
        break;
      case ActionType.REDO:
        dispatch(redo());
        break;
      case ActionType.BOLD:
        dispatch(setIsBold());
        break;
      case ActionType.ITALIC:
        dispatch(setIsItalic());
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <textarea
          value={value}
          onChange={handleValueChange}
          className="w-full h-24 p-2 border"
          style={{
            fontWeight: isBold ? "bold" : "normal",
            fontStyle: isItalic ? "italic" : "normal",
          }}
        />
        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => handleAction(ActionType.UNDO)}
            className="h-10 px-2 py-1 border bg-gray-500 text-white rounded hover:bg-gray-700 disabled:bg-gray-300"
            disabled={isUndoDisabled}
          >
            Undo
          </button>
          <button
            onClick={() => handleAction(ActionType.REDO)}
            className="h-10 px-2 py-1 border bg-gray-500 text-white rounded hover:bg-gray-700 disabled:bg-gray-300"
            disabled={isRedoDisabled}
          >
            Redo
          </button>
          <button
            onClick={() => handleAction(ActionType.BOLD)}
            className={`px-2 py-1 border ${isBold ? "font-bold" : ""}`}
          >
            B
          </button>
          <button
            onClick={() => handleAction(ActionType.ITALIC)}
            className={`px-2 py-1 border ${isItalic ? "italic" : ""}`}
          >
            I
          </button>
        </div>
      </div>
    </div>
  );
}
