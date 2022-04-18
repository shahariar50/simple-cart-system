const SingleProductTableRow = ({
  cartItem,
  removeCartItem,
  setItemQuantity,
}) => {
  return (
    <tr>
      <td
        className="text-sm text-center py-1 overflow-hidden text-ellipsis whitespace-nowrap"
        style={{ maxWidth: 80 }}
      >
        {cartItem.title}
      </td>
      <td className="text-sm text-center py-1">৳{cartItem.price}</td>
      <td className="text-sm text-center py-1">
        <input
          type="number"
          value={cartItem.quantity}
          onChange={({ target }) =>
            setItemQuantity(cartItem.id, Number(target.value))
          }
          className="w-12 text-center border border-gray-500"
          min={1}
        />
      </td>
      <td className="text-sm text-center py-1">
        ৳{cartItem.quantity * cartItem.price}
      </td>
      <td className="text-sm text-center py-1">
        <span
          className="material-icons text-red-500 text-xl cursor-pointer"
          onClick={() => removeCartItem(cartItem.id)}
        >
          close
        </span>
      </td>
    </tr>
  );
};

export default SingleProductTableRow;
