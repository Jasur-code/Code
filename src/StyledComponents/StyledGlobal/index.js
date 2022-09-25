import  { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.bgInfo{
   background: #29BAF9;
}
.bgBox{
    background-color: #754FFE;
}
.bgPurple{
    background-color: #754FFE ;
}
.nav-item{
    .nav-link{
        color: white;
        &:hover{
            color: white;
        }
    }
}

.navbar-toggler-icon{
    color: #ffff;
}

.navbar-brand{
    img{
        filter: brightness(0) invert(1);
    }
}

.bgColor{
    background-color: #18113C;
}

.allColor{
    color: #18113C;
}

.spanColors{
    color: #754FFE;
}

.collapsed{
    font-weight: bold;
    font-size: 18px;
    &:hover{
        color: purple;
    }
}

body{
    overflow-x: hidden;
}

ul{
    list-style: none;
}
a{
    text-decoration: none;
}
`

export default GlobalStyle