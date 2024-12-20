import { highlight } from "sugar-high";

const CodeBlock = ({ children, ...props }: { children: string }) => {
  const codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
};

export default CodeBlock;
