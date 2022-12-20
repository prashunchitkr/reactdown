import { useCallback, useContext } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { EditorContext } from "../contexts/EditorContext";
import { ViewUpdate } from "@codemirror/view";
import { githubDark } from "@uiw/codemirror-theme-github";

const Editor = () => {
  const { value, onChange } = useContext(EditorContext);

  const updateValue = useCallback((value: string, _viewUpdate: ViewUpdate) => {
    onChange(value);
  }, []);

  return (
    <CodeMirror
      theme={githubDark}
      value={value}
      height="100%"
      className="editor"
      basicSetup={{
        foldGutter: false,
        lineNumbers: false,
      }}
      extensions={[
        markdown({ base: markdownLanguage, codeLanguages: languages }),
      ]}
      onChange={updateValue}
    />
  );
};

export default Editor;
