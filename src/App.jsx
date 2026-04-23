import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import EditorOutput from './components/editoroutput/EditorOutput';
import Footer from './components/footer/Footer';

function App() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const savedCode = localStorage.getItem('myCode');
    if (savedCode) {
      setCode(savedCode);
    } else {
      setCode('console.log("Salom")');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myCode', code);
  }, [code]);

  const runCode = () => {
    const originalLog = console.log;
    let logs = [];

    try {
      console.log = (...args) => {
        logs.push(args.join(' '));
      };

      new Function(code)();

      setOutput(logs.join('\n') || 'Natija yo‘q');
      setIsError(false);
    } catch (error) {
      setOutput('Xatolik: ' + error.message);
      setIsError(true);
    } finally {
      console.log = originalLog;
    }
  };

  const clearCode = () => {
    setCode('');
    setOutput('');
    setIsError(false);
    localStorage.removeItem('myCode');
  };

  return (
    <div>
      <Navbar runCode={runCode} clearCode={clearCode} />
      <EditorOutput
        code={code}
        setCode={setCode}
        output={output}
        isError={isError}
      />
      <Footer />
    </div>
  );
}

export default App;
