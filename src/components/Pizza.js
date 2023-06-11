import { pizzaData } from '../data';

function Pizza() {
  return pizzaData.map((pizza) => (
    <div className='pizza' key={pizza.name}>
      <img src={pizza.photoName} alt={pizza.name} />
      <h3>{pizza.name}</h3>
      <p>{pizza.ingredients}</p>
      <p>{pizza.price}</p>
    </div>
  ));
}

export default Pizza;
