import React from 'react';
import { IconProps } from '../models/icon-props.model';

const IconFSharp: React.FC<IconProps> = ({ size }: IconProps) => {
  return (
    <svg viewBox="0 0 128 128" width={size} height={size}>
      <path fill="#378BBA" d="M0 64.5L60.7 3.8v30.4L30.4 64.5l30.4 30.4v30.4L0 64.5z" />
      <path fill="#378BBA" d="M39.1 64.5l21.7-21.7v43.4L39.1 64.5z" />
      <path fill="#30B9DB" d="M128 64.5L65.1 3.8v30.4l30.4 30.4-30.4 30.3v30.4L128 64.5z" />
    </svg>
  );
};

export default IconFSharp;
