/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState<{ id: number; title: string }[]>([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen text-center py-12">
      <table>
        <thead>
          <tr className="bg-slate-300">
            <th className="px-4 py-2 border border-black">Product-ID</th>
            <th className="px-4 py-2 border border-black">Product-Name</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="bg-slate-100">
              <td className="px-4 py-2 border border-black">{product.id}</td>
              <td className="px-4 py-2 border border-black">{product.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
