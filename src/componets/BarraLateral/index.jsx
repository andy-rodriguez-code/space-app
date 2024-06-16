import styled from "styled-components"
import ItemNavegacion from "./ItemNavegacion"


const ListasStilizadas =styled.ul`
    margin:0;
    padding:0;
    list-style: none;
`

const BarraLateral=()=>{
    return(
        <aside>
            <nav>
                <ListasStilizadas>
                    <ItemNavegacion iconoActivo="iconos/home-activo.png" iconoInactivo="iconos/home-inactivo.png">
                        Inicio
                    </ItemNavegacion >
                    <ItemNavegacion iconoActivo="iconos/mas-vistas-activo" iconoInactivo="iconos/mas-vistas-inactivo.png">
                        Más visitados
                    </ItemNavegacion >
                </ListasStilizadas>
            </nav>
        </aside>
        )
}
export default BarraLateral