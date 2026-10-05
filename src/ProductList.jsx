import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems } from './CartSlice';

const plantCatalog = [
  {
    category: 'Low Light',
    items: [
      { id: 'snake-plant', name: 'Snake Plant', price: 28, image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80', description: 'Clean, sculptural leaves that thrive in easygoing conditions.' },
      { id: 'zz-plant', name: 'ZZ Plant', price: 32, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80', description: 'Glossy foliage that brings lush texture to darker rooms.' },
      { id: 'peace-lily', name: 'Peace Lily', price: 26, image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80', description: 'Elegant white blooms with a soft tropical feel.' },
      { id: 'dracaena', name: 'Dracaena', price: 30, image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=900&q=80', description: 'A striking vertical accent for shelves and corners.' },
      { id: 'cast-iron-plant', name: 'Cast Iron Plant', price: 34, image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=900&q=80', description: 'Durable and forgiving, ideal for beginner growers.' },
      { id: 'parlor-palm', name: 'Parlor Palm', price: 29, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80', description: 'Soft fronds that add a relaxed, leafy look.' },
    ],
  },
  {
    category: 'Pet-Friendly',
    items: [
      { id: 'calathea', name: 'Calathea Orbifolia', price: 35, image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=900&q=80', description: 'A vibrant striped plant with a gentle, airy style.' },
      { id: 'areca-palm', name: 'Areca Palm', price: 38, image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80', description: 'Feathery foliage that brightens up any room.' },
      { id: 'hoya', name: 'Hoya', price: 24, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80', description: 'A trailing beauty with waxy leaves and easy charm.' },
      { id: 'boston-fern', name: 'Boston Fern', price: 27, image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80', description: 'Towering fronds that create a soft, lush statement.' },
      { id: 'spider-plant', name: 'Spider Plant', price: 22, image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=900&q=80', description: 'A cheerful, beginner-friendly favorite for bright spaces.' },
      { id: 'castor-bean', name: 'Castor Bean', price: 41, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80', description: 'Bold foliage with a tropical, dramatic silhouette.' },
    ],
  },
  {
    category: 'Air Purifying',
    items: [
      { id: 'rubber-plant', name: 'Rubber Plant', price: 36, image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=900&q=80', description: 'Deep green leaves and a polished, modern look.' },
      { id: 'philodendron', name: 'Philodendron', price: 33, image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=900&q=80', description: 'A classic trailing plant with lush, arching foliage.' },
      { id: 'monstera', name: 'Monstera', price: 39, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80', description: 'Signature split leaves that add instant tropical style.' },
      { id: 'pothos', name: 'Pothos', price: 21, image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80', description: 'Fast-growing vines with easy care and wispy movement.' },
      { id: 'weeping-fig', name: 'Weeping Fig', price: 42, image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=900&q=80', description: 'Graceful canopy foliage for statement spaces.' },
      { id: 'fern', name: 'Birds Nest Fern', price: 25, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80', description: 'Textured fronds add softness and freshness.' },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <main className="products-page section-shell">
      <div className="products-header">
        <p className="eyebrow">Shop collection</p>
        <h1>Healthy plants for every corner.</h1>
      </div>

      {plantCatalog.map((category) => (
        <section key={category.category} className="plant-category">
          <h2>{category.category}</h2>
          <div className="product-grid">
            {category.items.map((plant) => {
              const alreadyAdded = cartItems.some((item) => item.id === plant.id);

              return (
                <article key={plant.id} className="product-card">
                  <img src={plant.image} alt={plant.name} className="product-image" />
                  <div className="product-info">
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <div className="product-footer">
                      <span className="price">${plant.price}</span>
                      <button
                        type="button"
                        className="add-button"
                        onClick={() => handleAddToCart(plant)}
                        disabled={alreadyAdded}
                      >
                        {alreadyAdded ? 'Added' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
};

export default ProductList;
