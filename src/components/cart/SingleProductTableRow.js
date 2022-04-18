const SingleProductTableRow = () => {
  return (
    <tr className="border-b border-gray-500">
      <td className="text-sm text-center py-1">Dusty Pink...</td>
      <td className="text-sm text-center py-1">৳1500</td>
      <td className="text-sm text-center py-1">
        <input
          type="number"
          value={1}
          className="w-12 text-center border border-gray-500"
        />
      </td>
      <td className="text-sm text-center py-1">৳1500</td>
      <td className="text-sm text-center py-1">
        <span class="material-icons text-red-500 text-xl cursor-pointer">
          close
        </span>
      </td>
    </tr>
  );
};

export default SingleProductTableRow;
