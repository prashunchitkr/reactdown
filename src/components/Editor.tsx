import { useCallback, useContext } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { EditorContext } from "../contexts/EditorContext";
import { ViewUpdate } from "@codemirror/view";

const Editor = () => {
  const { value, onChange } = useContext(EditorContext);

  const updateValue = useCallback((value: string, _viewUpdate: ViewUpdate) => {
    console.log(value);
    onChange(value);
  }, []);

  return (
    <CodeMirror
      theme={vscodeDark}
      value={value}
      height="200px"
      extensions={[
        markdown({ base: markdownLanguage, codeLanguages: languages }),
      ]}
      onChange={updateValue}
    />
  );
};

export default Editor;
