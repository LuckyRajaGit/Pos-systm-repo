import React, { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { ProductGrid } from './components/pos/ProductGrid';
import { Cart } from './components/pos/Cart';
import { ProductSearch } from './components/pos/ProductSearch';
import { useCartStore } from './store/useCartStore';
import { Payment, Product } from './types';

// Sample product data
const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Paracetamol',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=200',
    category: 'Medicine',
    stock: 100
  },
  {
    id: '2',
    name: 'Aspirin',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=200',
    category: 'Medicine',
    stock: 150
  },
];

function App() {
  const { items, addItem, removeItem, updateQuantity, clearCart } = useCartStore();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = sampleProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePaymentComplete = (payments: Payment[]) => {
    // Here you would typically:
    // 1. Create a bill in the database
    // 2. Update inventory
    // 3. Send confirmation SMS
    // 4. Generate receipt
    console.log('Payment completed:', payments);
    clearCart();
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex">
        <div className="flex-1 overflow-auto">
          <div className="p-4">
            <ProductSearch onSearch={setSearchQuery} />
            <ProductGrid
              products={filteredProducts}
              onProductSelect={addItem}
            />
          </div>
        </div>
        <div className="w-96 bg-white border-l border-gray-200">
          <Cart
            items={items}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeItem}
            onPaymentComplete={handlePaymentComplete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;