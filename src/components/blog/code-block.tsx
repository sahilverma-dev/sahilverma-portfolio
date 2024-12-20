"use client";

import { JSX } from "react";

interface CodeBlockProps {
  children: JSX.IntrinsicElements;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  return (
    <div>
      <button
        onClick={() => {
          console.log({ children });
        }}
      >
        click
      </button>
    </div>
  );
};
export default CodeBlock;
