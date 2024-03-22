import { FaShoppingCart } from "react-icons/fa";

const CartButton = () => {
  return (
    <button className="cart-button btn btn-dark d-flex align-items-center gap-1">
      <FaShoppingCart /> Komandy • 0
    </button>
  );
};

export default CartButton;
