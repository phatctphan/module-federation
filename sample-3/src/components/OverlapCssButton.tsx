import { HTMLAttributes } from "react";
import { Style } from "react-style-tag";

export type OverlapCssButtonProps = {} & HTMLAttributes<HTMLButtonElement>;

export default function OverlapCssButton(props: OverlapCssButtonProps) {
  return (
    <>
      <button {...props} className="sample-3-button"></button>
      <Style>{`
        .sample-3-button {
            padding: 4px 6px;
            background-color: blue;
            color: white;
        }

        .sample-3-button:hover {
            opacity: .8;
        }
        `}</Style>
    </>
  );
}
