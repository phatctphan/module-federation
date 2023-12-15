import { HTMLAttributes } from "react";
// @ts-ignore
import styles from "./ModularCssButton.css";

export type ModularCssButtonProps = {} & HTMLAttributes<HTMLButtonElement>;

export default function ModularCssButton(props: ModularCssButtonProps) {
  return <button {...props} className={styles.button} />;
}
