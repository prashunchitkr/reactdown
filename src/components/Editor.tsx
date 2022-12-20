import { useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import type { ViewUpdate } from "@codemirror/view";

const Editor = () => {
  const onChange = useCallback((value: string, viewUpdate: ViewUpdate) => {
    console.log(value, viewUpdate);
  }, []);

  return (
    <CodeMirror
      theme={vscodeDark}
      value="# Welcome"
      height="200px"
      extensions={[
        markdown({ base: markdownLanguage, codeLanguages: languages }),
      ]}
      onChange={onChange}
    />
  );
};

export default Editor;
