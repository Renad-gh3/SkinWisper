import React, { useContext } from 'react'; // Import useContext
import Navbar from '../Navbar/Navbar';
import ExploreMenuItem from '../pages/ExploreMenuItem';
import Product from '../pages/product';
import { StoreContext } from './StoreContext';
const Display = ({ category }) => {
    const { List = [] } = useContext(StoreContext);
    return (
        <section>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='ExploreMenu'>
                <ExploreMenuItem />
            </div>

            <h1>Skincare Products</h1>
            <p></p>
            <div className="display-container">
                {List.map((item) => (
                    <Product
                        key={item.id}  // Corrected to item.id instead of index.id
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                        image={item.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default Display;
