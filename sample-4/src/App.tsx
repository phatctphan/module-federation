import { Provider } from "react-redux";
import TodoWidget from "./widgets/TodoWidget";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <TodoWidget />
    </Provider>
  );
}

export default App;
