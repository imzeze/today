import { Div } from '@/components/atoms';
import React from 'react';

interface ContentPreviewBox {
  title: JSX.Element | string;
  description?: string;
  createDate?: string;
  children: JSX.Element;
}

const ContentPreviewBox = ({
  title,
  description,
  children,
}: ContentPreviewBox) => {
  return (
    <Div
      display="flex"
      alignItems="flex-start"
      justifyContent="space-between"
      flex="1"
      background="var(--white)"
      borderRadius="10px"
      padding="20px"
    >
      <Div display="felx" alignItems="flex-start">
        <Div>{title}</Div>
        <Div>{description}</Div>
      </Div>
      <Div width="100px" height="100px">
        {children}
      </Div>
    </Div>
  );
};

export default ContentPreviewBox;
