import { PRODUCTS_LIST } from "../../constants/products";
import SingleProduct from "./SingleProduct";

const PorductsList = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="-mx-3 flex flex-wrap">
        {PRODUCTS_LIST.map((item) => (
          <div className="px-3 w-2/12" key={item.id}>
            <SingleProduct product={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PorductsList;
