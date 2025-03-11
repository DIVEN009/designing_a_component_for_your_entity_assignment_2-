import Productcard from "./components/productcard";

const App = () => {
  // Array of 10 product objects (Static Data)
  const products = [
    { id: 1, name: "Smart Watch", price: "$199.99", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Wireless Earbuds", price: "$99.99", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Gaming Mouse", price: "$49.99", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Mechanical Keyboard", price: "$89.99", image: "https://via.placeholder.com/150" },
    { id: 5, name: "4K Monitor", price: "$299.99", image: "https://via.placeholder.com/150" },
    { id: 6, name: "External Hard Drive", price: "$79.99", image: "https://via.placeholder.com/150" },
    { id: 7, name: "VR Headset", price: "$399.99", image: "https://via.placeholder.com/150" },
    { id: 8, name: "Portable Charger", price: "$29.99", image: "https://via.placeholder.com/150" },
    { id: 9, name: "Bluetooth Speaker", price: "$59.99", image: "https://via.placeholder.com/150" },
    { id: 10, name: "Smartphone Gimbal", price: "$149.99", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <Productcard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
