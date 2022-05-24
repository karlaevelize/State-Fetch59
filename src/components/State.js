import { useState, } from "react"

const State = () => {

  const [ amount, setAmount ] = useState(0)
  //amount = getter
  //setAmount = setter
  const [ like, setLike ] = useState(false)

  //check the values changing
  //always console.log outside the function, otherwise is delayed
  console.log("amount", amount)
  console.log("like", like)

  //increment button
  const increment = () => {
    setAmount(amount + 1)
  }

  //like button
  const toggleLike = () => {
    setLike(!like)

    //alternative solution
    // if(like === true){
    //   setLike(false)
    // } else {
    //   setLike(true)
    // }
  }

  return (
    <div>
      <h2>State Component</h2>
      Current amount:<b> {amount}</b>
      <br/>
      <button onClick={increment}>+ 1</button>
      {/* decrement button */}
      <button onClick={() => setAmount(amount - 1)}>- 1</button>
      <br/>
      <br/>
      <button onClick={toggleLike}>{like ? "Dislike" : "Like"}</button>
    </div>
  )
}

export default State
