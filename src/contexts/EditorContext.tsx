import React, { createContext, PropsWithChildren, useState } from "react";

export interface IEditorContext {
  value: string;
  onChange: (value: string) => void;
}

export const EditorContext = createContext<IEditorContext>({
  value: "",
  onChange: () => {},
});

export const EditorProvider = ({ children }: PropsWithChildren) => {
  const [value, setValue] = useState("# Hello");
  return (
    <EditorContext.Provider value={{ value, onChange: setValue }}>
      {children}
    </EditorContext.Provider>
  );
};
