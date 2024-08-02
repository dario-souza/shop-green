
'use client'
import React from 'react';

type CategorySelectProps = React.ComponentProps<'select'> & {
  categories: string[]
  selectedCategory: string
}

const CategorySelect = ({ categories, selectedCategory, ...rest }: CategorySelectProps) => {
  return (
    <select value={selectedCategory} {...rest} className='mt-4 shadow-md rounded-md outline-none mb-4' >
      <option value="">All</option>
      {categories.map((category, index) => (
        <option key={index} value={category}>{category}</option>
      ))}
    </select>
  );
};

export default CategorySelect;
