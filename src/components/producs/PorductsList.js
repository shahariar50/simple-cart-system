import { PRODUCTS_LIST } from "../../constants/products";
import SingleProduct from "./SingleProduct";

const PorductsList = () => {
  return (
    <div className="container px-2 mx-auto py-8">
      <div className="-m-2 sm:-m-3 flex flex-wrap">
        {PRODUCTS_LIST.map((item) => (
          <div
            className="p-2 sm:p-3 w-1/2 sm:w-4/12 lg:w-3/12 xl:w-2/12"
            key={item.id}
          >
            <SingleProduct product={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PorductsList;
