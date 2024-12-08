import React from 'react';

const MenuPage: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      <header className="bg-cover bg-center h-48 flex items-center justify-center" style={{ backgroundImage: 'url(/our menu-bg.png)' }}>
        <h1 className="text-5xl font-bold text-white tracking-wide">Our Menu</h1>
      </header>

      <main className="py-12 px-6 md:px-16 lg:px-28">
        {/* Appetizers Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Appetizers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex">
              <img src="/starter menu.png" alt="Appetizer" className="w-24 h-24 object-cover rounded mr-4" />
              <div>
                <h3 className="text-lg font-medium">Aloo Samosas</h3>
                <p className="text-sm text-gray-600">Crispy samosas stuffed with spiced potatoes</p>
              </div>
              <span className="ml-auto text-lg font-medium">$6.00</span>
            </div>
            {/* Repeat for more appetizers */}
          </div>
        </section>

        {/* Main Course Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Main Course</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex">
              <img src="/main course.png" alt="Main Course" className="w-24 h-24 object-cover rounded mr-4" />
              <div>
                <h3 className="text-lg font-medium">Grilled Chicken</h3>
                <p className="text-sm text-gray-600">Served with roasted vegetables and mashed potatoes</p>
              </div>
              <span className="ml-auto text-lg font-medium">$12.00</span>
            </div>
            {/* Repeat for more main courses */}
          </div>
        </section>

        {/* Dessert Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Desserts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex">
              <img src="/desert.png" alt="Dessert" className="w-24 h-24 object-cover rounded mr-4" />
              <div>
                <h3 className="text-lg font-medium">Chocolate Cake</h3>
                <p className="text-sm text-gray-600">Rich chocolate cake with a molten center</p>
              </div>
              <span className="ml-auto text-lg font-medium">$5.00</span>
            </div>
            {/* Repeat for more desserts */}
          </div>
        </section>

        {/* Drinks Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Drinks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex">
              <img src="/drinks.png" alt="Drink" className="w-24 h-24 object-cover rounded mr-4" />
              <div>
                <h3 className="text-lg font-medium">Citrus Lemonade</h3>
                <p className="text-sm text-gray-600">Freshly squeezed lemonade with a hint of mint</p>
              </div>
              <span className="ml-auto text-lg font-medium">$3.50</span>
            </div>
            {/* Repeat for more drinks */}
          </div>
        </section>

        {/* Fun Facts Section */}
        <section className="bg-gray-50 py-12 rounded-lg mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-6">
            <div>
            <img src="/1 logo.png" alt="logo1" width={100} height={100} className="h-16 mx-auto" />
              <h3 className="text-4xl font-bold">420+</h3>
              <p className="text-sm text-gray-600">Satisfied Customers</p>
            </div>
            <div>
            <img src="/2 logo.png" alt="logo2" width={100} height={100} className="h-16 mx-auto" />
              <h3 className="text-4xl font-bold">250+</h3>
              <p className="text-sm text-gray-600">Dishes Served</p>
            </div>
            <div>
            <img src="/3 logo.png" alt="logo3" width={100} height={100} className="h-16 mx-auto" />
              <h3 className="text-4xl font-bold">36+</h3>
              <p className="text-sm text-gray-600">Chefs</p>
            </div>
            <div>
            <img src="/4 logo.png" alt="logo4" width={100} height={100} className="h-16 mx-auto" />
              <h3 className="text-4xl font-bold">200+</h3>
              <p className="text-sm text-gray-600">Five Star Ratings</p>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-12 text-center">
          <h2 className="text-2xl font-semibold mb-6">We work with the best people</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
            <img src="/image 1.png" alt="Partner 1" className="h-16 mx-auto" />
            <img src="/image 2.png" alt="Partner 2" className="h-16 mx-auto" />
            <img src="/image 3.png" alt="Partner 3" className="h-16 mx-auto" />
            <img src="/image 4.png" alt="Partner 4" className="h-16 mx-auto" />
            <img src="/image 5.png" alt="Partner 5" className="h-16 mx-auto" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default MenuPage;