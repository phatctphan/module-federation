import { HTMLAttributes } from "react";
import { Style } from "react-style-tag";

export type PrefixCssButton = {} & HTMLAttributes<HTMLButtonElement>;

export default function PrefixCssButton(props: PrefixCssButton) {
  return (
    <>
      <button {...props} className="prefix-button"></button>
      <Style>{`
        .prefix-button {
          display: "inline-block";
          padding: 4px 6px;
          background-color: #fefefe;
          transition: background-color 0.2s;
          border-radius: 5px;
          width: max-content;
        }
        
        .prefix-button:hover {
          background-color: #efefef;
        }
        
        .prefix-button:active {
          background-color: #dedede;
        }
      `}</Style>
    </>
  );
}
