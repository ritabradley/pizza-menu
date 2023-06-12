import Pizza from './Pizza';
import { pizzaData } from '../data';

function Menu() {
  return (
    <div className='menu'>
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all
        delicious.
      </p>
      <ul className='pizzas'>
        {pizzaData.map((pizza) => (
          <Pizza pizzaData={pizza} key={pizza.name} />
        ))}
      </ul>
    </div>
  );
}
export default Menu;
