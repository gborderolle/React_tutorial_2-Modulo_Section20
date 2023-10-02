import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: '1', title: 'Libro 1', price: 55, description: 'Libro bueno' },
  { id: '2', title: 'Libro 2', price: 23, description: 'Libro malo' },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Compre sus libros favoritos</h2>
      <ul>
        {DUMMY_PRODUCTS.map(item => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
