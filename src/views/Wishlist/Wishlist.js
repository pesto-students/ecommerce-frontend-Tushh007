import React from 'react';
import './Wishlist.css';
import { useStateValue } from '../../store/StoreProvider';

function Wishlist() {
  const [{ wishlist, user }, dispatch] = useStateValue();
  
  return (
    <div className="wishlist">
      <p>wishlist view</p>
    </div>
  );
}

export default Wishlist;
