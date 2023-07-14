import { useEffect, useState } from "react"
import ReactCardFlip from "react-card-flip"

const Card = ({frente, reverso, titulo, id, setCardsValues, arrayCardsToDisabled, arrayCardsToFlipped})=> {

    const [ isFlipped, setIsFlipped ] = useState(false)
    const [ isEquals, setIsEquals ] = useState(true)

    useEffect(()=>{
      if ( arrayCardsToDisabled.includes(id) ) {
        setIsEquals(false)
      }
    },[arrayCardsToDisabled])

    useEffect(()=>{
      if ( arrayCardsToFlipped.includes(id) ) {
        setTimeout(()=>{
          setIsFlipped(false)
        },700)
      }
    },[arrayCardsToFlipped])

    const handleClick = (e) => {
        e.preventDefault()
      const compare = setCardsValues(titulo, id)
      console.log(compare)
      if (compare === 1){
          setIsFlipped(!isFlipped)
        }
      }
    return (
        <ReactCardFlip isFlipped={isFlipped}  >
        
            <div className='card-container'  >
                  <img 
                      src={reverso} 
                      alt={titulo} c
                      className='card reverso' 
                      id={id} 
                      onClick={ isEquals ? handleClick : null } 
                  />
            </div>
            <div className='card-container' >
                  <img 
                      src={frente} 
                      alt={titulo} 
                      className='card' 
                      id={id} 
                      onClick={  isEquals ? handleClick : null } 
                  />
            </div>
        </ReactCardFlip>
    )       
}
export default Card


