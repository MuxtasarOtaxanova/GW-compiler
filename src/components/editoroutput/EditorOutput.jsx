import React from 'react';
import Editor from '@monaco-editor/react';
import './EditorOutput.css';

const EditorOutput = ({ code, setCode, output, isError }) => {
  return (
    <div className="editor-output">
      <div className="editor-box">
        <h2>Editor</h2>

        <Editor
          height="500px"
          defaultLanguage="javascript"
          value={code}
          onChange={(value) => setCode(value || '')}
          theme="vs-dark"
          options={{
            fontSize: 16,
            minimap: { enabled: false },
            wordWrap: 'on',
          }}
        />
      </div>

      <div className="output-box">
        <h2>Output</h2>
        <div
          className={`output-area ${isError ? 'error-output' : 'success-output'}`}
        >
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
};

export default EditorOutput;
