import { Provider } from "react-redux";
import { Editor } from "./components/Editor";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Editor />
      </PersistGate>
    </Provider>
  );
}

export default App;
