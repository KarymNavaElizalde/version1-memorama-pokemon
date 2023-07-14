
import './App.css';
import {useEffect, useState} from "react"
import {arrayCards} from "./initialState"
import Logo from './components/Logo';
import Card from './components/Card';
import {shuffleArray} from './assets/shuffleArray'


function App() {

  const initialStateCards = {name:'', id:0}
  const [ arrayCradsState, setArrayCardsState ] = useState([])
  const [ firstCard, setFirstCard ] = useState(initialStateCards)
  const [ secondCard, setSecondCard ] = useState(initialStateCards)
  const [ arrayCardsToDisabled, setArrayCardsToDisabled ] = useState([])
  const [ arrayCardsToFlipped, setArrayCardsToFlipped ] = useState([])

  useEffect(()=>{ 
    setArrayCardsState(shuffleArray(arrayCards))
  },[])

  useEffect(()=>{
    compareCards()
  },[secondCard])

  const setCardsValues = (nombre, index)=> {
    if ( firstCard.name === nombre && firstCard.id === index ) {
        return 0
    }
    if ( !firstCard.name ) {
      setFirstCard({
        name: nombre,
        id: index
      }) 
    } else if ( !secondCard.name ) {
      setSecondCard({
        name: nombre,
        id: index
      }) 
    }
    return 1
  }

  const compareCards = ()=> {
    if ( firstCard.name && secondCard.name ) {
      firstCard.name === secondCard.name ? disabledCards() : flippedCards()
    }
  }

  const disabledCards = ()=> {
    setArrayCardsToDisabled([firstCard.id, secondCard.id])
    resetCards() 
  }

  const flippedCards = ()=> {
    setArrayCardsToFlipped([firstCard.id, secondCard.id])
    resetCards()
  }

  const resetCards = ()=> {
    setFirstCard(initialStateCards)
    setSecondCard(initialStateCards)
  } 

  return (
    <div className="card-container">

      <div className='logo-container'>
        <Logo id="logo" />
      </div>
      <div className='cards-list-container'>
        {
          arrayCradsState.map(card => (
            <Card frente={card.image} 
                  reverso={card.reverso} 
                  titulo={card.title} 
                  id={card.id}
                  key={card.id}
                  setCardsValues={setCardsValues}
                  arrayCardsToDisabled={arrayCardsToDisabled}
                  arrayCardsToFlipped={arrayCardsToFlipped}
            />
          ))
        } 
      </div>
      
    </div>
  );
}

export default App;
