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
    <div className={`min-h-screen bg-gray-100 text-gray-800`} >
      
      {/* Fixed Header */}
      <div className={`fixed top-0 left-0 right-0 py-4 shadow-lg flex items-center bg-gradient-to-r from-purple-500 to-pink-500 z-10`}>
        <img 
          src="https://www.shutterstock.com/image-vector/letter-d-coffee-shop-cafe-600nw-1530888344.jpg" 
          alt="Cafe Logo" 
          className="w-auto h-25 mr-6 pl-20 mix-blend-multiply"  
        />
        <div className="text-center flex-1 pr-55">
          <h1 className="text-5xl font-bold italic">DURYODHANA'S CAFE</h1>
          <p className="mt-1 text-lg italic">Savor the Flavors of India!</p>
        </div>
      </div>

      {/* Restaurant Description */}
      <div className="container mx-auto px-4 mt-35">
        <div className={` shadow-md rounded-lg p-5`}>
          <h2 className="text-2xl font-semibold">Welcome to Duryodhana's Cafe!</h2>
          <p className="mt-2">Experience the rich and diverse flavors of Indian cuisine, crafted with love and tradition. Our menu features a variety of dishes that are sure to tantalize your taste buds.</p>
        </div>
      </div>

      {/* Categories */}
      <div className={` shadow-md mt-4`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex space-x-4 overflow-x-auto">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center px-6 py-3 rounded-full transition-colors ${selectedCategory === category.name
                    ? 'bg-indigo-700 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
              >
                <span className="mr-2 text-2xl">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Menu Items */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-semibold">{selectedCategory}</h2>
            <div className="grid gap-6">
              {MENU_ITEMS[selectedCategory].map((item) => (
                <div key={item.id} className={` rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105`}>
                  <div className='flex justify-center items-center'>
                    <img
                      src={item.image1}
                      alt={item.name}
                      className="w-auto h-90 object-cover"  
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="mt-2">{item.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-2xl font-bold text-indigo-600">₹{item.price}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-4 py-2 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 transition-colors"
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
            <div className={`rounded-lg shadow-md p-6 sticky top-40`}>
              <h2 className="text-3xl font-semibold mb-6">Your Order</h2>

              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Table Number"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                />
                <textarea
                  placeholder="Special Requests"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 h-24`}
                />
              </div>

              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-6">Order Delicious Food</p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p>₹{item.price}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 pt-6 border-t">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-indigo-600">₹{getTotalPrice()}</span>
                </div>
                <button
                  onClick={placeOrder}
                  disabled={cart.length === 0}
                  className={`w-full py-3 rounded-lg text-white text-lg font-semibold transition-colors ${cart.length === 0
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-indigo-700 hover:bg-indigo-800'
                    }`}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
        
    
      </div>
      {/* Footer */}
<footer className="bg-purple-500 text-white py-4 mt-8">
  <div className="container mx-auto text-center">
    <p className="text-lg">
      {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} 
      - {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
    </p>
    <p className="text-sm">Thank you for dining with us!</p>
  </div>
</footer>

    </div>
  );
};

export default RestaurantMenu;
