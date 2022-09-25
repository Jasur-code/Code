import styled from "styled-components";

const StyledButton = styled.button `
    background-color: white;
    color: black;
    border-radius: 6px;
    padding: 13px 16px;
    outline: none;
    border: 1px solid gray;
   
     ${
        (props) => {
            switch (props.type) {
                case "purple":
                    return `
                      background-color:#754FFE;
                      color: white;
                    `
                    
            }
        }
     }
`;

export default StyledButton