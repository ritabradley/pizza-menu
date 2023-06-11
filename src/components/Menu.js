function Menu({ children }) {
  return (
    <div className='menu'>
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all
        delicious.
      </p>
      <ul className='pizzas'>{children}</ul>
    </div>
  );
}
export default Menu;
