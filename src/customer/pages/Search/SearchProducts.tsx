import React, { ChangeEvent, useState } from 'react';
import { searchProduct } from '../../../Redux Toolkit/Customer/ProductSlice';
import { useAppDispatch, useAppSelector } from '../../../Redux Toolkit/Store';
import ProductCard from '../Products/ProductCard/ProductCard';
import { TypeAnimation } from 'react-type-animation';

const SearchProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((store) => store);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleProductSearch = () => {
    if (searchQuery.trim()) {
      dispatch(searchProduct(searchQuery.trim()));
    }
  };

  return (
    <div className="min-h-screen px-20">
      <div className="flex justify-center py-5">
        <input
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleProductSearch();
            }
          }}
          onChange={handleSearchChange}
          value={searchQuery}
          className="border-none outline-none bg-slate-100 px-10 py-3 w-full lg:w-1/2"
          type="text"
          placeholder="Search Product..."
        />
      </div>

      <section>
        {products.searchProduct?.length > 0 ? (
          <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-5 justify-center">
            {products.searchProduct.map((item: any, index: number) => (
              <div key={index * 9}>
                <ProductCard item={item} />
              </div>
            ))}
          </section>
        ) : (
          <div className="h-[70vh] flex flex-col justify-center items-center">
            <TypeAnimation
              sequence={[
                'Search for washing machines...',
                2000,
                'Search for refrigerators...',
                2000,
                'Search for air conditioners...',
                2000,
                'Search for laptops...',
                2000,
                'Search for smartphones...',
                2000,
              ]}
              wrapper="h1"
              speed={50}
              repeat={Infinity}
              className="font-bold text-4xl text-center"
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default SearchProducts;