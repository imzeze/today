import { Div } from '@/components/atoms';
import React from 'react';

const Header = () => {
  return (
    <Div
      height="60px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="0 30px"
    >
      <Div>IMZEZE</Div>
      <Div>search bar</Div>
    </Div>
  );
};

export default Header;
