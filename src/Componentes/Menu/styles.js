import styled from 'styled-components'

export const ContainerMenu = styled.nav`

    ul{
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
        justify-content: center;
        align-items: center;

        li{
            margin-left: 30px;
            margin-right: 30px;
            a{
                text-decoration: none;
                color: white;
                font-size: 20px;
                cursor: pointer;
                transition-duration: 0.5s;

                
                &:hover{
                    color: #00cbff;
                    transition-duration: 0.2s;
                }
            }
        }
    
    }

`;
