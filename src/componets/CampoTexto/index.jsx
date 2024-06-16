import styled from "styled-components";
import search from "./search.png";

const StyleContainer = styled.div`
  position: relative;
  display: inline-block;
`;
const StyleCampoTextp = styled.input`
  height: 40px;
  padding: 10px 14px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 560px;
  color: #d9d9d9;
  font-size: 18px;
  font-weight: 400;
  &::placeholder {
    color: #d9d9d9;
  }
  line-height: 20px;
`;
const IconoLupa = styled.img`
  position: absolute;
  right: 10px;
  width: 38px !important;
  height: 38px !important;
`;

const CampoTexto = (props) => {
  return (
    <StyleContainer>
      <StyleCampoTextp type="text" placeholder="Busca una foto" {... props} />
      <IconoLupa src={search} alt="Icono de lupa" />
    </StyleContainer>
  );
};
export default CampoTexto;
