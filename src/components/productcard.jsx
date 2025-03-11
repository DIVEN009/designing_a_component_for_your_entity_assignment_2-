// write product card here
// cart/Productcard.jsx
import ViewProductButton from "./button";

const Productcard = () => {
  // Static product details
  const productImage = "https://via.placeholder.com/150"; // Dummy image
  const productName = "Smart Watch";
  const productPrice = "$199.99";

  return (
    <div className="border shadow-lg p-4 rounded-lg w-64 text-center">
      <img
        src={productImage}
        alt={productName}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{productName}</h2>
      <p className="text-gray-600 font-bold">{productPrice}</p>
      <div className="mt-4">
        <ViewProductButton />
      </div>
    </div>
  );
};

export default Productcard;
