import React from "react"

import piDecimals from "utils/piMillionDecimals"

const Header = ({}) => {
  const digitLength = piDecimals.length.toLocaleString()

  return (
    <div>
      <h3 className="text-center">{digitLength} Digits of Pi</h3>
      <p className="text-center">
        First {digitLength} fractional digits of the number Pi, using color
        coded digits 0 through 9.
      </p>
    </div>
  )
}

export default Header
