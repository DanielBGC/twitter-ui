import { Sparkle } from 'phosphor-react';

import './index.css';

type HeaderPropsType = {
  title: string;
};

export default function Header(props: HeaderPropsType) {
  return (
    <div className='timeline-header'>
      {props.title}
      <Sparkle />
    </div>
  );
}
