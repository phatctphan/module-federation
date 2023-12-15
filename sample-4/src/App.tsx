import { Provider } from "react-redux";
import TodoWidget from "./widgets/TodoWidget";
import { store } from "./store";

function App() {
  console.log(store);
  return (
    <Provider store={store}>
      <TodoWidget />
    </Provider>
  );
}

export default App;
