import Data from './quotes.json';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const genRandomIndex = (length) => Math.floor(Math.random() * length)
const getRandomQuote = () => Data.quotes[genRandomIndex(Data.quotes.length)]

const QuoteBox = ({quotePayload, fetchNewQuote, currentColor}) => {
  const { quote, author } = quotePayload;
  return (
    <div className="QuoteBox">
      <div className="QuoteText" style={{color: currentColor}}>
        <span className="mr-icon">
          <FontAwesomeIcon  size="lg" icon={faQuoteLeft} />
        </span>
      {quote}
      </div>
      <div className="AuthorText" style={{color: currentColor}}>
        - {author}
      </div>
      <div className="ActionsRow">
        <button className="button" style={{backgroundColor: currentColor}}><FontAwesomeIcon icon={faTwitter} /></button>
        <button className="button NewQuote" onClick={fetchNewQuote} style={{backgroundColor: currentColor}}>New Quote</button>
      </div>
    </div>
  )
}

function App() {
  const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];
  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());
  const [currentColor, setCurrentColor] = useState(colors[genRandomIndex(colors.length)])
  const handleFetchCurrentNote = (event) => {
    setCurrentQuote(getRandomQuote());
    setCurrentColor(colors[genRandomIndex(colors.length)])
  }
  return (
    <div className="App" style={{backgroundColor: currentColor}}>
      <QuoteBox currentColor={currentColor} quotePayload={currentQuote} fetchNewQuote={handleFetchCurrentNote}/>
    </div>
  );
}

export default App;
