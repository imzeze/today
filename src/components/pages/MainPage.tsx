import { Div } from '@/components/atoms';
import { Header } from '@/components/organisms';
import { SectionContainer } from '@/components/templates';
import React from 'react';

const MainPage = () => {
  return (
    <Div
      background="linear-gradient( to top, var(--linen), var(--lightSteelBlue) )"
      height="100%"
      overflowY="scroll"
    >
      <Header />
      <SectionContainer />
    </Div>
  );
};

export default MainPage;
