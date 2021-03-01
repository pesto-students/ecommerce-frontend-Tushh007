import './App.css';
import Footer from './components/Footer/Footer';
import ProductRow from './components/ProductRow/ProductRow';

function App() {
  const products = [
    {
      name: 'product1',
      price: '50',
      rating: '4.3',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbGbYAkpz-56ziPIuelqlNXZSxACgM5BRKPg&usqp=CAU',
    },
    {
      name: 'product2',
      price: '55',
      rating: '3.3',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbGbYAkpz-56ziPIuelqlNXZSxACgM5BRKPg&usqp=CAU',
    },
    {
      name: 'product3',
      price: '65',
      rating: '4.7',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbGbYAkpz-56ziPIuelqlNXZSxACgM5BRKPg&usqp=CAU',
    },
  ];
  return (
    <div className="App">
      {/**Navigation bar */}
      {/**Carousel Banner */}
      {/**Category Tiles */}
      <ProductRow title="Featured Products" items={products} />
      <ProductRow title="Recommended for you" items={products} />
      <Footer />
    </div>
  );
}

export default App;
