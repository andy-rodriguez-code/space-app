import styled from "styled-components";
import CampoTexto from "../CampoTexto";



const StylesHeader = styled.header`
    padding:20px 40px;
    display:flex;
    height:10%;
    align-items:center;
    justify-content:space-between;
    img{
        width:210px;   
    }

`
const Cabecera = ()=>{
    return<>
    <StylesHeader>
        <img src="img/logo.png" alt="" />
        <CampoTexto />
    </StylesHeader>
    </>
        
        
}
export default Cabecera;