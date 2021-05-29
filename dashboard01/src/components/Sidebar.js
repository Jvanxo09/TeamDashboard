import {NavLink} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'


const Sidebar=()=>{
    return(
        <div className="sidebar bg-light">
            <ul>
                <li>
                    <NavLink to="/Ticket" exact className="text-dark rounded py-2 px-3 w-100 d-inline-block " activeClassName="active" ><FaIcons.FaHome className="me-2" /> Ticket</NavLink>
                </li>
                <li>
                    <NavLink to="/sales" exact className="text-dark rounded py-2 px-3 w-100 d-inline-block" activeClassName="active" ><FaIcons.FaRegChartBar className="me-2" /> Boleta</NavLink>
                </li>
                <li>
                    <NavLink to="/" exact className="text-dark rounded py-2 px-3 w-100 d-inline-block" activeClassName="active" ><FaIcons.FaUserPlus className="me-3" /> R. Clientes </NavLink>
                </li>
                <li>
                    <NavLink to="/reportes" exact className="text-dark rounded py-2 px-3 w-100 d-inline-block" activeClassName="active" ><FaIcons.FaFileAlt className="me-3" /> Reportes</NavLink>
                </li>
                <li>
                    <NavLink to="/registroFacturas" exact className="text-dark rounded py-2 px-3 w-100 d-inline-block" activeClassName="active" ><FaIcons.FaMoneyCheckAlt className="me-3" /> R. Facturas</NavLink>
                </li>
                <li>
                    <NavLink to="/valorizacion" exact className="text-dark rounded py-2 px-3 w-100 d-inline-block" activeClassName="active" ><FaIcons.FaPencilRuler className="me-3" /> Valorizacion</NavLink>
                </li>
                <li>
                    <NavLink to="/sedes"  exact className="text-dark rounded py-2 px-3 w-100 d-inline-block" activeClassName="active"><FaIcons.FaHospital className="me-3" /> Sedes</NavLink>
                </li>
                <li>
                    <NavLink to="/hotel" exact className="text-dark rounded py-2 px-3 w-100 d-inline-block"  activeClassName="active"><FaIcons.FaHotel className="me-3" /> Hotel</NavLink>
                </li>
                <li>
                    <NavLink to="/protocolos" exact className="text-dark rounded py-2 px-3 w-100 d-inline-block" activeClassName="active" ><FaIcons.FaUsers className="me-3" /> Protocolos</NavLink>
                </li>
                <li>
                    <NavLink to="/importar" exact className="text-dark rounded py-2 px-3 w-100 d-inline-block" activeClassName="active" ><FaIcons.FaFileImport className="me-3" /> Importar</NavLink>
                </li>
            
            </ul>
        </div>
    )
}

export default Sidebar;