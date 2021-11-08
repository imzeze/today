import { Div } from '@/components/atoms';
import { ContentPreviewBox } from '@/components/organisms';
import React from 'react';

interface SectionItemProps {
  name: string;
}

const SectionItem = ({ name }: SectionItemProps) => {
  return (
    <Div padding="60px">
      <Div borderBottom="1px solid var(--lightGrey)">
        <Div fontSize="24px" fontWeight={700} marginBottom="40px">
          {name}
        </Div>
        <Div display="flex" justifyContent="space-between" gap="60px">
          <ContentPreviewBox title="Flex" description="flex">
            <Div background="yellow" width="100%" height="100%"></Div>
          </ContentPreviewBox>
          <ContentPreviewBox title="Flex" description="flex">
            <Div background="yellow" width="100%" height="100%"></Div>
          </ContentPreviewBox>
          <ContentPreviewBox title="Flex" description="flex">
            <Div background="yellow" width="100%" height="100%"></Div>
          </ContentPreviewBox>
        </Div>
      </Div>
    </Div>
  );
};

export default SectionItem;
