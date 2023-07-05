import styled from "styled-components"


export const H1 = styled.h1`
text-align: center;
margin-top: 25px;
color: #FFF;
font-size: 28px;
font-family: Roboto;
font-style: normal;
font-weight: 700;
line-height: normal;

`

export const Container = styled.div`
img{
display: block;
margin-left:auto;
margin-right:auto;
margin-top:11px;

}

`

export const ContainerItens = styled.div`
display: flex;
flex-direction:column;
align-items: center;
margin-top: 76px;

`

export const Label = styled.p`
color: #EEE;
font-size: 18px;
font-family: Roboto;
font-style: normal;
font-weight: 700;
line-height: 22px;
letter-spacing: -0.408px;

`

export const Input = styled.input`
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
display: flex;
padding: 19px 139px 18px 15px;
width: 342px;
height: 58px;
border: none;
outline: none;
color: #FFF;
font-size: 18px;
font-family: Roboto;
font-style: normal;
font-weight: 300;
line-height: normal;


`

export const Button = styled.button`
margin-top: 76px;
background: #D93856;
width: 342px;
height: 68px;
padding: 0px 113px;
color: #FFF;
text-align: center;
font-size: 17px;
font-family: Roboto;
font-style: normal;
font-weight: 900;
line-height: 2.5px;
border: none;
cursor: pointer;

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.5;
}

`

export const List = styled.li`
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
display: flex;
padding: 19px 139px 18px 15px;
width: 342px;
height: 101px;
border: none;
outline: none;
color: #FFF;
font-size: 18px;
font-family: Roboto;
font-style: normal;
font-weight: 300;
line-height: normal;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: flex-start;
gap: 20px;
margin-top: 20px;


p{
    margin-top:10px;
    margin-left: 50px;

}

.name{
    color: #FFF;
font-size: 18px;
font-family: Roboto;
font-style: normal;
font-weight: 700;
line-height: normal;
}



button{
    background:none;
    border: none;
}


`

