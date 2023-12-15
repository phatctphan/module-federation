import { HTMLAttributes } from "react";
import "./Button.css";

export type ButtonProps = {} & HTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  return <button {...props} className="sample-2-button"></button>;
}
