const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

export default function MyLists() {
  return (
    <>
      <h1>List</h1>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            className={product.isFruit ? "text-indigo-500" : "text-green-500"}
          >
            {product.title}
          </li>
        ))}
      </ul>
    </>
  );
}
