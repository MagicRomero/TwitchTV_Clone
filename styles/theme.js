import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
 ${normalize}

 @font-face {
  font-family: "Poppins";
  src: url("/fonts/Poppins/Poppins-Regular.ttf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: "Poppins";
  src: url("/fonts/Poppins/Poppins-Medium.ttf");
  font-style: medium;
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: "Poppins";
  src: url("/fonts/Poppins/Poppins-SemiBold.ttf");
  font-style: medium;
  font-weight: 600;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter/static/Inter-Regular.ttf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter/static/Inter-Medium.ttf");
  font-style: medium;
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter/static/Inter-SemiBold.ttf");
  font-style: medium;
  font-weight: 600;
  font-display: swap;
}


* {
  box-sizing: border-box;
}

html, body {
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
    font-size:  ${(props) => props.theme.baseFontSize};
    overflow-x: hidden; 
    font-family:  ${(props) => props.theme.primaryFont};
    background: ${(props) => props.theme.primaryBackgroundColor};
}

body * {
  transition: 0.3s;
}

a {
  color: ${(props) => props.theme.primaryLinkColor};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight:600;

  &:hover,
  &:active {
    color: ${(props) => props.theme.primaryBrandColor};
  }
}

ul {
  list-style: none;
}

h1 {
  font-size: 3.5rem;
}
h2 {
  font-size: 2.25rem;
}
h3 {
  font-size: 1.75rem;
}
h4 {
  font-size: 1.5rem;
}
h5 {
  font-size: 1.25rem;
}
h6 {
  font-size: 1rem;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
li,
span,
label,
input,
textarea {
  color:  ${(props) => props.theme.primaryTextColor};
}

p,
li,
span,
label,
input,
textarea {
  font-size: 1rem;
  font-family:  ${(props) => props.theme.secondaryFont};
}

@media screen and (max-width: 680px) {
  h1 {
    font-size: 2.25rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.25rem;
  }
  h5 {
    font-size: 1rem;
  }

  h6 {
    font-size: 0.85rem;
  }

  p,
  li,
  span,
  label,
  input,
  textarea {
    font-size: 0.8rem;
  }
}`;

export const theme = {
  default: {
    baseFontSize: "16px",
    primaryBackgroundColor: "#F7F7F8",
    primaryTextColor: "#242428",
    primaryFont:
      "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    secondaryFont: "Poppins, -apple-system, BlinkMacSystemFont, sans-serif",
    primaryLinkColor: "#0e0e10",
    primaryBrandColor: "#8542EA",
    secondaryBrandColor: "#772CE8",
    navbarHeight: "3.2rem",
  },
};
