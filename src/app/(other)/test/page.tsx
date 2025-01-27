import TestSvg from "@/components/animated/diagrams/test-svg";
import NewCodeBlock from "@/components/blog/new-code-block";
// import test_svg from "@/content/assets/diagrams/svgs/test.svg";
// import Image from "next/image";

const Test = () => {
  return (
    <div className="p-4 mx-auto max-w-5xl prose dark:prose-invert !text-white">
      <h1>Test Page</h1>
      <p>
        Yo! you&apos;re not suppose to see this page. This is only for me to
        test my components here. Because REAL DEVELOPERS TEST ON PRODUCTION 😈
        <br />
        Just go away !
      </p>
      {/* <Image src={test_svg} alt="" height={600} width={600} /> */}
      <TestSvg />
      <NewCodeBlock
        codeString={`const CodeBlock = (props: CodeBlockProps) => {
  const { codeString, language, metastring } = props;

  const highlightLineFn = calculateLinesToHighlight(metastring);
  const title = hasTitle(metastring);

  return (
    <div className="bg-gray-900 rounded overflow-hidden w-full">
      {title && (
        <div className="flex justify-between items-center bg-gray-800 px-4 py-2">
          <p className="text-sm font-medium text-gray-200">{title}</p>
          <CopyToClipboardButton title={title} text={codeString} />
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

export default CodeBlock;`}
        language="jsx"
        metastring={""}
      />
    </div>
  );
};

export default Test;
