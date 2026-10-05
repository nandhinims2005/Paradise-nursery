import { NavLink, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import { selectCartCount } from './CartSlice';
import './App.css';

function Navbar() {
  const itemCount = useSelector(selectCartCount);

  return (
    <nav className="main-nav">
      <div className="brand">Paradise Nursery</div>
      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/products">Plants</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/cart" className="cart-link">
          <span>Cart</span>
          <span className="cart-badge">{itemCount}</span>
        </NavLink>
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <main className="landing-page">
      <section className="hero-banner">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Fresh, vibrant living</p>
          <h1>Paradise Nursery</h1>
          <p className="hero-copy">
            Discover lush houseplants, easy-care greens, and statement botanicals to
            transform your home into a natural retreat.
          </p>
          <NavLink to="/products" className="cta-button">
            Get Started
          </NavLink>
        </div>
      </section>
    </main>
  );
}

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </div>
  );
}

export default App;
