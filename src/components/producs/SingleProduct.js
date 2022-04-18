import { useCartItemContext } from "../../hooks/useCartItem";

const SingleProduct = ({ product }) => {
  const { addCartItem } = useCartItemContext();
  return (
    <div className="bg-white shadow-md h-full group relative">
      <div className="overflow-hidden">
        <img
          className="transform scale-110 group-hover:scale-100 transition duration-300"
          src={product?.img_url}
          alt={product?.title}
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{product?.title}</h3>
        <p>৳{product?.price}</p>
      </div>
      <div
        className="absolute top-0 left-0 h-full w-full bg-black/60 cursor-pointer flex items-center justify-center text-white text-3xl opacity-0 group-hover:opacity-100 transition duration-300"
        onClick={() => addCartItem(product)}
      >
        Add
      </div>
    </div>
  );
};

export default SingleProduct;
