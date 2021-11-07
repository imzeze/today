import { Div } from '@/components/atoms';
import React from 'react';

interface SectionItemProps {
  name: string;
}

const SectionItem = ({ name }: SectionItemProps) => {
  return (
    <Div padding="40px">
      <Div borderBottom="1px solid var(--lightGrey)">
        <Div fontSize="18px">{name}</Div>
        <Div width="200px" height="400px"></Div>
      </Div>
    </Div>
  );
};

export default SectionItem;
