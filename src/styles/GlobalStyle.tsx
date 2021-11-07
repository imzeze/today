import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
  -webkit-tap-highlight-color: transparent;
  font-family: 'Spoqa Han Sans Neo', Helvetica, Arial, sans-serif;
}

html,
body {
  margin: 0px;
  padding: 0px;
  -webkit-touch-callout: none;
  user-select: none;
  width: 100%;
  height: 100%;

  position: fixed;
  overflow: hidden;
}

#root {
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch; /* enables “momentum” (smooth) scrolling */
}

/* Hide ScrollBar */
body::-webkit-scrollbar,
div::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  background: transparent;
}

div {
  box-sizing: border-box;
}

* {
  -webkit-text-size-adjust: none;
}

a {
  text-decoration: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='date']::-webkit-calendar-picker-indicator {
  padding: 0;
  margin: auto;
}

input[type='date'] {
  background: white;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}

::placeholder {
  color: var(--textGrey);
  font-weight: 400;
  font-size: 11px;
}

button {
  background: none;
  border: none;
}

button:hover,
button:focus {
  outline: 0;
  -webkit-appearance: none;
}

button:active {
  box-shadow: inset 0px 0px 50px rgba(0, 0, 0, 0.1);
}

select {
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

select::-ms-expand {
  display: none;
}

*:focus {
  outline: none;
}

td {
  padding: 0px;
  box-sizing: border-box;
}

.css_animation_red-opacity {
  animation: redOpacity 0.35s;
}

.css_animation_blue-opacity {
  animation: blueOpacity 0.35s;
}

 :root {
     --lightSteelBlue: #B0C4DE;
     --white: #FFFFFF;
     --linen: #FAF0E6;
     --lightGrey: #D3D3D3;
     --whiteSmoke: #F5F5F5;
 }
`;

export default GlobalStyle;
