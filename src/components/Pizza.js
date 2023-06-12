function Pizza({ pizzaData }) {
  return pizzaData.soldOut ? (
    <li className='pizza sold-out'>
      <img src={pizzaData.photoName} alt={pizzaData.name} />
      <div>
        <h3>{pizzaData.name}</h3>
        <p>{pizzaData.ingredients}</p>
        <span>SOLD OUT</span>
      </div>
    </li>
  ) : (
    <li className='pizza'>
      <img src={pizzaData.photoName} alt={pizzaData.name} />
      <div>
        <h3>{pizzaData.name}</h3>
        <p>{pizzaData.ingredients}</p>
        <span>{pizzaData.price}</span>
      </div>
    </li>
  );
}

export default Pizza;
