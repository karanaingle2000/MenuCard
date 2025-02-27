import React, { useState } from 'react';

const CATEGORIES = [
  { id: 1, name: 'Starters', icon: '🥗' },
  { id: 2, name: 'Main Course', icon: '🍖' },
  { id: 3, name: 'Desserts', icon: '🍰' },
  { id: 4, name: 'Drinks', icon: '🍷' },
];

const MENU_ITEMS = {
  Starters: [
    {
      id: 1,
      name: 'Bruschetta',
      price: 100.00,
      description: 'Toasted bread with tomatoes, garlic, and basil',
      image1: 'https://api.a0.dev/assets/image?text=Bruschetta&aspect=16:9',
    },
    {
      id: 2,
      name: 'Calamari',
      price: 312.99,
      description: 'Crispy fried squid rings with marinara sauce',
      image1: 'https://api.a0.dev/assets/image?text=Calamari&aspect=16:9',
    },
  ],
  'Main Course': [
    {
      id: 3,
      name: 'Grilled Salmon',
      price: 224.99,
      description: 'Fresh salmon with herbs and lemon butter sauce',
      image1: 'https://api.a0.dev/assets/image?text=Grilled+Salmon&aspect=16:9',
    },
    {
      id: 4,
      name: 'Beef Tenderloin',
      price: 290.99,
      description: 'Premium cut beef with red wine reduction',
      image1: 'https://api.a0.dev/assets/image?text=Beef+Tenderloin&aspect=16:9',
    },
  ],
  Desserts: [
    {
      id: 5,
      name: 'Tiramisu',
      price: 98.99,
      description: 'Classic Italian coffee-flavored dessert',
      image1: 'https://api.a0.dev/assets/image?text=Tiramisu&aspect=16:9',
    },
    {
      id: 6,
      name: 'Chocolate Lava Cake',
      price: 999.99,
      description: 'Warm chocolate cake with molten center',
      image1: 'https://api.a0.dev/assets/image?text=Chocolate+Lava+Cake&aspect=16:9',
    },
  ],
  Drinks: [
    {
      id: 7,
      name: 'Craft Cocktails',
      price: 126.99,
      description: 'Signature house cocktails',
      image1: 'https://th.bing.com/th/id/OIP.9ALJLCKbhadHhlCrdw6-pQHaEQ?w=324&h=186&c=7&pcl=1b1a19&r=0&o=5&dpr=1.3&pid=1.7',
    },
    {
      id: 8,
      name: 'Wine Selection',
      price: 149.99,
      description: 'Premium wines by the glass',
      image1: 'https://images5.alphacoders.com/407/thumb-1920-407194.jpg',
    },
  ],
};

const RestaurantMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState('Starters');
  const [cart, setCart] = useState([]);
  const [tableNumber, setTableNumber] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  const addToCart = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const placeOrder = () => {
    if (!tableNumber) {
      alert('Please enter your table number');
      return;
    }
    alert(`Order placed successfully!\nTable: ${tableNumber}\nTotal: ₹${getTotalPrice()}`);
    setCart([]);
    setTableNumber('');
    setSpecialRequests('');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}

      <div className="bg-red-500 text-black py-8 ">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Waah Taj ⭐⭐⭐🌟💫</h1>
          <p className="text-center mt-2 text-black">जेवणाचा आस्वाद घ्या !!!</p>
        </div>
      </div>

      {/* Categories */}

      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex space-x-4 overflow-x-auto">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center px-6 py-3 rounded-full transition-colors ${selectedCategory === category.name
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                <span className="mr-2">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Menu Items */}

          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">{selectedCategory}</h2>
            <div className="grid gap-6">
              {MENU_ITEMS[selectedCategory].map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className='flex justify-center items-center'>
                    <img
                      src={item.image1}
                      alt={item.name}
                      className="w-1/2 h-48 object-cover"
                    />

                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-2xl font-bold text-indigo-600">₹{item.price}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        Add to Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Order</h2>

              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Table Number"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <textarea
                  placeholder="Special Requests"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 h-24"
                />
              </div>

              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-6">Order Delicious Food</p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-gray-800">{item.name}</h3>
                        <p className="text-gray-600">₹{item.price}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 pt-6 border-t">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-gray-800">Total:</span>
                  <span className="text-2xl font-bold text-indigo-600">₹{getTotalPrice()}</span>
                </div>
                <button
                  onClick={placeOrder}
                  disabled={cart.length === 0}
                  className={`w-full py-3 rounded-lg text-white text-lg font-semibold transition-colors ${cart.length === 0
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-700'
                    }`}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;