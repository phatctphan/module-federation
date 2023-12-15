import ModularCssButton from "./components/ModularCssButton";
import PrefixCssButton from "./components/PrefixCssButton";
import "./index.css";

export default function App() {
  return (
    <div className="layout">
      <ModularCssButton>Modular CSS Button</ModularCssButton>
      <br />
      <PrefixCssButton>Prefix CSS Button</PrefixCssButton>
    </div>
  );
}
