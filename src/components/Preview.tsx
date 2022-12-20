import { EditorContext } from "@contexts/EditorContext";
import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Preview = () => {
  const { value } = useContext(EditorContext);
  return (
    <ReactMarkdown
      className="markdown-body preview"
      remarkPlugins={[remarkGfm]}
    >
      {value}
    </ReactMarkdown>
  );
};

export default Preview;
