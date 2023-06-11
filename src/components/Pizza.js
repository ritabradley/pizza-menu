import { pizzaData } from '../data';

function Pizza() {
  return pizzaData.map((pizza) =>
    pizza.soldOut ? (
      <div className='pizza sold-out' key={pizza.name}>
        <div>
          <img src={pizza.photoName} alt={pizza.name} />
          <h3>{pizza.name}</h3>
          <p>{pizza.ingredients}</p>
          <span>{pizza.price}</span>
        </div>
      </div>
    ) : (
      <div className='pizza' key={pizza.name}>
        <div>
          <img src={pizza.photoName} alt={pizza.name} />
          <h3>{pizza.name}</h3>
          <p>{pizza.ingredients}</p>
          <span>{pizza.price}</span>
        </div>
      </div>
    )
  );
}

export default Pizza;
