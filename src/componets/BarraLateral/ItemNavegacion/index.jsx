import styled from "styled-components";
import PropTypes from 'prop-types';

const ListaStlizada = styled.li`
font-size:18px;
font-weight:400;
color:white;
`;
const ItemNavegacion = ({
  children,
  iconoActivo,
  iconoInactivo,
  activo = false,
}) => {
    return <>
      <ListaStlizada>
        <img src={activo ? iconoActivo : iconoInactivo} alt="Icono" />
        {children}
      </ListaStlizada>
    </>
};
ItemNavegacion.propTypes={
    children:PropTypes.node.isRequired,
    iconoActivo:PropTypes.string.isRequired,
    iconoInactivo:PropTypes.string.isRequired,
    activo:PropTypes.bool
}
export default ItemNavegacion;
