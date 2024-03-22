import { FaShoppingCart } from "react-icons/fa";

const CartButton = ({cart}) => {
  return (
    <button className="cart-button btn btn-dark d-flex align-items-center gap-1">
      <FaShoppingCart /> • {cart.length ? cart.length : 0}
    </button>
  );
};

export default CartButton;
