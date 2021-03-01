import './App.css';
import Footer from './components/Footer/Footer';
import ProductRow from './components/ProductRow/ProductRow';

function App() {
  const products = [
    {
      id: 1,
      name: 'Tinny Three Quarter Sleeve Dress',
      price: '750',
      rating: '4.3',
      imageUrl:
        'https://cdn.iclothing.com/media/catalog/product/cache/1/thumbnail/1345x1992/9df78eab33525d08d6e5fb8d27136e95/t/i/tinny_three_quarter_sleeve_dress_in_navy_and_green_stripe-3.jpg',
    },
    {
      id: 2,
      name: 'Vila Striped T-Shirt Dress',
      price: '550',
      rating: '3.3',
      imageUrl:
        'https://i.pinimg.com/originals/7b/ac/47/7bac47bee7924bee927afaa3ef86ed2a.jpg',
    },
    {
      id: 3,
      name: 'Sleeveless Deana Maxi Dress',
      price: '950',
      rating: '4.7',
      imageUrl:
        'https://media.debenhams.com/i/debenhams/350010660943/navy_stripe_print_sleeveless_deana_maxi_dress.jpg?w=640&h=640&fmt=jpg',
    },
    {
      id: 1,
      name: 'Tinny Three Quarter Sleeve Dress',
      price: '750',
      rating: '4.3',
      imageUrl:
        'https://cdn.iclothing.com/media/catalog/product/cache/1/thumbnail/1345x1992/9df78eab33525d08d6e5fb8d27136e95/t/i/tinny_three_quarter_sleeve_dress_in_navy_and_green_stripe-3.jpg',
    },
    {
      id: 2,
      name: 'Vila Striped T-Shirt Dress',
      price: '550',
      rating: '3.3',
      imageUrl:
        'https://i.pinimg.com/originals/7b/ac/47/7bac47bee7924bee927afaa3ef86ed2a.jpg',
    },
    {
      id: 3,
      name: 'Sleeveless Deana Maxi Dress',
      price: '950',
      rating: '4.7',
      imageUrl:
        'https://media.debenhams.com/i/debenhams/350010660943/navy_stripe_print_sleeveless_deana_maxi_dress.jpg?w=640&h=640&fmt=jpg',
    },
    {
      id: 1,
      name: 'Tinny Three Quarter Sleeve Dress',
      price: '750',
      rating: '4.3',
      imageUrl:
        'https://cdn.iclothing.com/media/catalog/product/cache/1/thumbnail/1345x1992/9df78eab33525d08d6e5fb8d27136e95/t/i/tinny_three_quarter_sleeve_dress_in_navy_and_green_stripe-3.jpg',
    },
    {
      id: 2,
      name: 'Vila Striped T-Shirt Dress',
      price: '550',
      rating: '3.3',
      imageUrl:
        'https://i.pinimg.com/originals/7b/ac/47/7bac47bee7924bee927afaa3ef86ed2a.jpg',
    },
    {
      id: 3,
      name: 'Sleeveless Deana Maxi Dress',
      price: '950',
      rating: '4.7',
      imageUrl:
        'https://media.debenhams.com/i/debenhams/350010660943/navy_stripe_print_sleeveless_deana_maxi_dress.jpg?w=640&h=640&fmt=jpg',
    },
    {
      id: 1,
      name: 'Tinny Three Quarter Sleeve Dress',
      price: '750',
      rating: '4.3',
      imageUrl:
        'https://cdn.iclothing.com/media/catalog/product/cache/1/thumbnail/1345x1992/9df78eab33525d08d6e5fb8d27136e95/t/i/tinny_three_quarter_sleeve_dress_in_navy_and_green_stripe-3.jpg',
    },
    {
      id: 2,
      name: 'Vila Striped T-Shirt Dress',
      price: '550',
      rating: '3.3',
      imageUrl:
        'https://i.pinimg.com/originals/7b/ac/47/7bac47bee7924bee927afaa3ef86ed2a.jpg',
    },
    {
      id: 3,
      name: 'Sleeveless Deana Maxi Dress',
      price: '950',
      rating: '4.7',
      imageUrl:
        'https://media.debenhams.com/i/debenhams/350010660943/navy_stripe_print_sleeveless_deana_maxi_dress.jpg?w=640&h=640&fmt=jpg',
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
