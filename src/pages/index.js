import Navbar from '../components/Navbar';
import CardSlider from '../components/CardSlider';

const Home = () => {
  const categories = [
    { title: 'Latest', cards: ['Card 1', 'Card 2', 'Card 3'] },
    { title: 'Spotlight', cards: ['Card 4', 'Card 5', 'Card 6'] },
    { title: 'Highlights', cards: ['Card 7', 'Card 8', 'Card 9'] },
    { title: 'Memories', cards: ['Card 10', 'Card 11', 'Card 12'] },
    { title: 'For you', cards: ['Card 13', 'Card 14', 'Card 15'] },
    { title: 'Learning content', cards: ['Card 16', 'Card 17', 'Card 18'] },
  ];

  return (
    <div>
      <Navbar />
      <h1>Schoolcoin</h1>
      {categories.map((category, index) => (
        <CardSlider key={index} title={category.title} cards={category.cards} />
      ))}
    </div>
  );
};

export default Home;