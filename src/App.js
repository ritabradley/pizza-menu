import Menu from './components/Menu';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='container'>
      <header className='header'>
        <h1>Really Good Pizza</h1>
      </header>
      <Menu />
      <Footer />
    </div>
  );
}
