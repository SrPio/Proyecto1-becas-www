import './App.css';
import BecasList from './components/becas/BecasList/BecasList'
import Carousel from './components/Carousel_NYTimes/Carousel';

function App() {
  return (
    <div>
      <Carousel />
      <div className="container my-4">
        <BecasList />
      </div>
    </div>
  );
}

export default App;
