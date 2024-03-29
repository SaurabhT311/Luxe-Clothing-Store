import { ReactComponent as ShoppingBagIcon} from '../../assets/shopping-bag.svg';
import './CartIcon.scss';


const CartIcon = () => {
    return (
        <div className='cart-icon-container'>
            <ShoppingBagIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    );
}

export default CartIcon;