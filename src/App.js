import Pizza from './components/Pizza';
import Menu from './components/Menu';

export default function App() {
  return (
    <div className='container'>
      <Menu>
        <Pizza />
      </Menu>
    </div>
  );
}
