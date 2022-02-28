import React from 'react';

export default function OutputBlock(props) {
  return (
    <>
      <span>Output</span>
      <pre>{props.rawText}</pre>
    </>
  );
}
