import styled from 'styled-components';

const Berry = styled.div.attrs((props: React.HTMLProps<HTMLDivElement>) => ({
    style: {
      ...props,
      ...props.style,
    },
  }))


export default Berry;