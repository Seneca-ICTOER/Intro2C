import ClassicCodeBlock from '@theme-original/CodeBlock';
import OutputBlock from '../OutputBlock';
import WasmLoader from './wasm-loader';
import React, { useState } from 'react';

export default function CodeBlock(props) {
  const [rawOutputText, setRawOutputText] = useState('');
  let outputTextBuffer = '';

  function appendToOutputStreamBuffer(text) {
    // outputTextBuffer holds all the output of the program.
    // For some reason, if we use the setRawOutputText function,
    // it might not update the state as frequently, which will end up
    // just showing the last line.
    //
    // A guess is that if React receives several calls to the
    // same function, it will only handle the last in the queue.
    outputTextBuffer += text + '\n';
    setRawOutputText(outputTextBuffer);
  }

  if (!props.wasm) {
    return <ClassicCodeBlock {...props} />;
  }

  return (
    <>
      <button
        onClick={() => {
          WasmLoader('/wasm/' + props.wasm, appendToOutputStreamBuffer, appendToOutputStreamBuffer);
        }}
      >
        Run
      </button>
      <ClassicCodeBlock {...props} />
      <OutputBlock rawText={rawOutputText} />
    </>
  );
}
