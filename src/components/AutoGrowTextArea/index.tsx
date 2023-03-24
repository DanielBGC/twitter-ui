import React, {
  useState,
  useEffect,
  useRef,
  TextareaHTMLAttributes,
} from 'react';

import './index.css';

type AutoGrowTextAreaPropsType = {};

export default function AutoGrowTextArea(
  // props: TextareaHTMLAttributes<HTMLTextAreaElement>
  props: any
) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState('');
  const [textAreaHeight, setTextAreaHeight] = useState('auto');
  const [parentHeight, setParentHeight] = useState('auto');

  useEffect(() => {
    setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
    setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`);
  }, [text]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
    setText(event.target.value);

    if (text.length % 20 === 0 || text.length < 5) {
      setTextAreaHeight('auto');
    }

    props?.onChange(event.target.value);
  };

  return (
    <div
      style={{
        minHeight: parentHeight,
        flex: 1,
      }}
    >
      <textarea
        {...props}
        ref={textAreaRef}
        rows={1}
        style={{
          height: textAreaHeight,
          flex: 1,
          width: '100%',
        }}
        onChange={(e) => onChangeHandler(e)}
        value={props.value ?? ''}
      />
    </div>
  );
}
