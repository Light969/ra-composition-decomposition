import News from './react-component/News';
import SearchBar from './react-component/SearchBar';
import MarketingBanner from './react-component/MarketingBanner';
import Widgets from './react-component/Widgets';

import './App.css';

function App() {
  return (
    <div className="page">
      <div>
        <News />
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <MarketingBanner />
      </div>
      <div>
        <Widgets />
      </div>
    </div>
  );
}

export default App;
