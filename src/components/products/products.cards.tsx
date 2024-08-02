'use client'
import { Product } from '@/types/products.type'
import React from 'react'
import ProductCard from './product.card'
import { fetchCategories } from '@/services/api/fetch.category'
import CategorySelect from './category.select'
import { FilterProducts } from './filter.products'

type ProductsCardsProps = {
  product: Product[]
}

const ProductsCards = ({ product }: ProductsCardsProps) => {
  const [selectedCategory, setSelectedCategory] = React.useState('')
  const [categories, setCategories] = React.useState<string[]>([])
  const [value, setValue] = React.useState('')

  React.useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };
    getCategories();
  }, []);

  const filteredProduct = React.useMemo(() => {
    const lowercaseText = value.toLowerCase()
    return product.filter(item =>
      item.title.toLowerCase().includes(lowercaseText) &&
      (selectedCategory === '' || item.category === selectedCategory)
    )
  }, [product, value, selectedCategory])

  return (
    <>
      <FilterProducts onChange={(e) => setValue(e.target.value)} value={value} placeholder='Buscar' />
      <CategorySelect categories={categories}
        selectedCategory={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 min-[950px]:grid-cols-5 gap-2 md:gap-4">
        {
          filteredProduct.map((prod, i) => <ProductCard index={i} key={prod.id} data={prod} />)
        }
      </div>
    </>
  )
}

export default ProductsCards 
