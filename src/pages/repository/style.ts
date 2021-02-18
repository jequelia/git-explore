import styled, {css} from 'styled-components';
import {shade} from 'polished';

interface FormProps{
    hasError: boolean;
}

export const Header = styled.header `

    display: flex;
    align-items: center;
    justify-content: space-between;

    a{
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8b3;
        transition: color 0.2s;

        &:hover{
            color: #666;
        }

        svg{
            margin-right: 4px;
        }
    }

  
`
export const InfoRepo = styled.section `

    margin-top: 80px;
    margin-bottom: 50px;

    header{
        display: flex;

        img{
            width: 200px;
            height: 200px;
            border-radius: 50%;
            margin-right: 5%;
        }

        div{
            margin-top: 15px;

            strong {
                font-size: 25px;
                color: #3D3D4D;
            }
            p{
                font-size: 15px;
                color: #3D3D4D;
                margin-top: 5%;
            }
        }
    }

    ul{
        display: flex;
        list-style: none;
        margin-top: 40px;

        li{

            & + li{
                margin-left: 80px
            }
            strong{
                display:block;
                font-size: 36px;
                font-weight: bold;
                color: #333333;
            }
            span{
                display: block;
                margin-top: 4px;
                color: #949494;
            }
        }
    }

`


export const Issues = styled.section`

a{
        background-color: #FFF;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: flex;
        text-decoration: none;
        align-items: center;
        transition: 0.5s;

        &:hover{
            transform: translateX(10px);
        }

        & + a {
            margin-top: 18px;
        }

        div{
            margin-left: 16px;

            strong {
                font-size: 20px;
                color: #3D3D4D;
            }
            p{
                font-size: 18px;
                color: #3D3D4D;
            }
        }

        svg{
            margin-left: auto;
            color: #cbcbd6;
        }

    }



`