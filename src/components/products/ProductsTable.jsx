import React from 'react'

import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const PRODUCT_DATA = [
	{ id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
	{ id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800 },
	{ id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650 },
	{ id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950 },
	{ id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720 },
	{ id: 6, name: "Bluetooth Speaker", category: "Electronics", price: 45.99, stock: 120, sales: 600 },
	{ id: 7, name: "LED Monitor", category: "Electronics", price: 149.99, stock: 40, sales: 300 },
	{ id: 8, name: "Laptop Stand", category: "Electronics", price: 32.50, stock: 95, sales: 480 },
	{ id: 9, name: "Graphic T-shirt", category: "Clothing", price: 19.99, stock: 200, sales: 1050 },
	{ id: 10, name: "Denim Jeans", category: "Clothing", price: 49.99, stock: 150, sales: 870 },
	{ id: 11, name: "Hooded Sweatshirt", category: "Clothing", price: 59.99, stock: 130, sales: 750 },
	{ id: 12, name: "Wall Clock", category: "Home & Garden", price: 25.99, stock: 80, sales: 310 },
	{ id: 13, name: "Indoor Plant Set", category: "Home & Garden", price: 35.00, stock: 60, sales: 420 },
	{ id: 14, name: "Cookware Set", category: "Home & Garden", price: 129.99, stock: 45, sales: 350 },
	{ id: 15, name: "Mystery Novel", category: "Books", price: 12.99, stock: 190, sales: 980 },
	{ id: 16, name: "Self-Help Guide", category: "Books", price: 14.99, stock: 170, sales: 640 },
	{ id: 17, name: "Science Encyclopedia", category: "Books", price: 22.50, stock: 75, sales: 310 },
	{ id: 18, name: "Basketball", category: "Sports & Outdoors", price: 29.99, stock: 90, sales: 530 },
	{ id: 19, name: "Camping Tent", category: "Sports & Outdoors", price: 89.99, stock: 35, sales: 210 },
	{ id: 20, name: "Fitness Tracker", category: "Sports & Outdoors", price: 69.99, stock: 50, sales: 410 },
	{ id: 21, name: "Noise Cancelling Headphones", category: "Electronics", price: 129.99, stock: 60, sales: 540 },
	{ id: 22, name: "Bluetooth Keyboard", category: "Electronics", price: 49.99, stock: 85, sales: 420 },
	{ id: 23, name: "Formal Shirt", category: "Clothing", price: 35.00, stock: 110, sales: 780 },
	{ id: 24, name: "Winter Jacket", category: "Clothing", price: 89.99, stock: 70, sales: 430 },
	{ id: 25, name: "Table Lamp", category: "Home & Garden", price: 27.50, stock: 65, sales: 300 },
	{ id: 26, name: "Vacuum Cleaner", category: "Home & Garden", price: 99.99, stock: 40, sales: 260 },
	{ id: 27, name: "Historical Biography", category: "Books", price: 18.99, stock: 120, sales: 390 },
	{ id: 28, name: "Fantasy Novel", category: "Books", price: 16.50, stock: 130, sales: 620 },
	{ id: 29, name: "Tennis Racket", category: "Sports & Outdoors", price: 74.99, stock: 55, sales: 340 },
	{ id: 30, name: "Hiking Backpack", category: "Sports & Outdoors", price: 59.99, stock: 45, sales: 390 },

];

const ProductsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
	const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = PRODUCT_DATA.filter(
			(product) => product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term)
		);

		setFilteredProducts(filtered);
	};

  return (
    <motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Product List</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search products...'
						className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
						onChange={handleSearch}
						value={searchTerm}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
			</div>

			<div className='overflow-x-auto max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800'>
				<table className='min-w-full divide-y divide-gray-700'>
					<thead>
						<tr>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Name
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Category
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Price
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Stock
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Sales
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Actions
							</th>
						</tr>
					</thead>

					<tbody className='divide-y divide-gray-700'>
						{filteredProducts.map((product) => (
							<motion.tr
								key={product.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
									<img
										src='https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww'
										alt='Product img'
										className='size-10 rounded-full'
									/>
									{product.name}
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									{product.category}
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									${product.price.toFixed(2)}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{product.stock}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{product.sales}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<button className='text-indigo-400 hover:text-indigo-300 mr-2'>
										<Edit size={18} />
									</button>
									<button className='text-red-400 hover:text-red-300'>
										<Trash2 size={18} />
									</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
  )
}

export default ProductsTable
