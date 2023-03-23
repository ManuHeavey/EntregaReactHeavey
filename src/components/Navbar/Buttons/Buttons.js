import { NavLink } from "react-router-dom"

const Buttons = () => {
    return (
      <div className="list">
        <NavLink to='/categoria/vehiculos' className="categoryNav">Vehículos</NavLink>
        <NavLink to='/categoria/electronica' className="categoryNav">Electrónica</NavLink>
        <NavLink to='/categoria/armas' className="categoryNav">Armas</NavLink>
    </div>
)
}

export default Buttons