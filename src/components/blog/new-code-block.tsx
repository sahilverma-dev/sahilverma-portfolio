/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { Highlight, Language, Prism } from "prism-react-renderer";
import { calculateLinesToHighlight, hasTitle } from "./code-block/utils";

// @ts-ignore
(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-swift");
require("prismjs/components/prism-glsl");

export interface CodeBlockProps {
  codeString: string;
  language: Language;
  metastring: string | null;
}

export interface HighlightedCodeTextProps {
  codeString: string;
  language: Language | "glsl";
  highlightLine?: (index: number) => boolean;
}
export const HighlightedCodeText = (props: HighlightedCodeTextProps) => {
  const { codeString, language, highlightLine } = props;

  if (!codeString) return null;

  return (
    <Highlight
      theme={{ plain: {}, styles: [] }}
      code={codeString}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`bg-gray-900 text-gray-200 p-2 overflow-auto rounded ${className}`}
          style={style}
        >
          {tokens.map((line, index) => {
            const { className: lineClassName } = getLineProps({
              className:
                highlightLine && highlightLine(index)
                  ? "bg-gray-800 border-l-4 border-blue-500"
                  : "",
              key: index,
              line,
            });

            return (
              <div
                data-testid={
                  highlightLine && highlightLine(index)
                    ? "highlight-line"
                    : "line"
                }
                key={index}
                className={`table-row ${lineClassName}`}
              >
                <div className="table-cell text-right pr-4 text-gray-500 select-none">
                  {index + 1}
                </div>
                <span className="table-cell">
                  {line.map((token, key) => (
                    <span
                      data-testid="content-line"
                      key={key}
                      {...getTokenProps({
                        key,
                        token,
                      })}
                    />
                  ))}
                </span>
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

const NewCodeBlock = ({ codeString, language, metastring }: CodeBlockProps) => {
  const highlightLineFn = calculateLinesToHighlight(metastring);
  const title = hasTitle(metastring);

  return (
    <div className="bg-gray-900 rounded overflow-hidden w-full">
      {title && (
        <div className="flex justify-between items-center bg-gray-800 px-4 py-2">
          <p className="text-sm font-medium text-gray-200">{title}</p>
          {/* <CopyToClipboardButton title={title} text={codeString} /> */}
        </div>
      )}
      <HighlightedCodeText
        codeString={codeString}
        language={language}
        highlightLine={highlightLineFn}
      />
    </div>
  );
};

export default NewCodeBlock;
