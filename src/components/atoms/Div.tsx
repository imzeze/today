import styled from 'styled-components';

const Div = styled.div.attrs((props: React.HTMLProps<HTMLDivElement>) => ({
    style: {
      ...props,
      ...props.style,
    },
  }))


export default Div;