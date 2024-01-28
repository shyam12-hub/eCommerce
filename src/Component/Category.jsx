export function Category() {
  const category = ["SmartPhone", "Laptop", "Tablet", "Accessories"];

  return (
    <div>
      <ul className="flex justify-evenly p-2 text-xl font-bold">
        {category.map((category) => (
          <li>{category}</li>
        ))}
      </ul>
    </div>
  );
}
