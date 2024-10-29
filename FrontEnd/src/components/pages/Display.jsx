/*import React, { useContext } from 'react';
import ExploreMenuItem from '../pages/ExploreMenuItem';
import Product from './product';
import { StoreContext } from './StoreContext';
import './Display.css';

const Display = ({ category }) => {
    const { List = [] } = useContext(StoreContext);

    return (
        <section>
            <div className='ExploreMenu'>
                <ExploreMenuItem />
            </div>

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

export default Display;*/
import React, { useContext, useState } from 'react';
import ExploreMenuItem from '../pages/ExploreMenuItem';
import Product from './Product'; // Ensure the import is correct
import { StoreContext } from './StoreContext';
import './Display.css';

const Display = () => {
    const { List = [] } = useContext(StoreContext);
    const [category, setCategory] = useState('All'); // Initial category state

    return (
        <section>
            <div className='ExploreMenu'>
                <ExploreMenuItem category={category} setCategory={setCategory} /> {/* Pass category and setCategory */}
            </div>

            <div className="display-container">
                {List.filter(item => category === 'All' || item.category === category).map((item) => (
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
