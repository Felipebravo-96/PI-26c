import { ASCENDENTE, DESCENDENTE } from "../../constantes/filtro";
import {useDispatch} from 'react-redux'
import { filter } from "../../redux/actions";
import {filtro} from './order.module.css'

function Order(){
    const dispatch = useDispatch()
    function onSelectedChange(change){
        dispatch(filter(change.target.value))
    }

    return<div>
        <select name="Order" onChange={onSelectedChange} className={filtro}>
            <option>Order By</option>
            <option value={ASCENDENTE}> A-Z </option>
            <option value={DESCENDENTE} >Z-A</option>
            <option value="Population High">Population High</option>
            <option value="Population Low">Population Low</option>
        </select>
    </div>
}
export default Order;