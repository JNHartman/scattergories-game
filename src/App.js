import './App.css';
import Letter from './letter/letter'
import Timer from './timer/timer';
import Categories from './categories/categories';

function App() {
  return (
    <div className="App">
      <div className='App-Section-One'>
        <Letter />
        <Timer />
      </div>
      <div className='App-Section-Two'>
        <Categories />
      </div>
    </div>
  );
}

export default App;
