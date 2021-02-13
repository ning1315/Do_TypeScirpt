import { type } from 'os'
import React from 'react'

type Props = {
  name: string,
  age : number,
  mark? : string,
  onClick : (name : string) => void;
}

const Greed = ({name, mark, age, onClick}: Props ) => {
  const handleClick = () => onClick(name)
  return (
    <div>
      Hello {name}{mark}, are you {age} old?
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

Greed.defaultProps = {
  mark : '!'
}
export default Greed