import { createGlobalStyle } from "styled-components";

import githubImg from '../assets/1587379725719-attachment.svg';

export default createGlobalStyle`

* {
    margin: 0;
    padding:0;
    outline:0;
    box-sizing: border-box;
}
/* verde de alguma coisa #1d886b, novo background #252036 */
body {
    background: #100e17 url(${githubImg}) no-repeat 75% top;
    -webkit-font-smoothing: antialiased;
}
body, input, button {
    font: 16px Roboto, sans-serif;
}
#root {
    max-width: 960px;
    padding: 40px 20px;
    margin: 0 auto;
}

`;
