import React from 'react'
import { charOcurrenceCount, piDecimals } from 'utils'
import GridStyles from 'styles/grids/Grid_10_Items.module.scss'
import Styles from 'Components/PiDigitCount/PiDigitCount.module.css'

import classNames from 'classnames'

const PiDigitCount = () => (
  <div className="m-3">
    <h6 className="text-center mb-1">Ocurrences</h6>
    <div className={classNames(GridStyles.Grid_3_3)}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
        return (
          <div key={index} className={Styles.DigitBox}>
            <div className="fw-bold text-center">{index}</div>

            <span key={index} className="small text-center">
              {new Intl.NumberFormat('en-US', {
                maximumSignificantDigits: 8,
              }).format(charOcurrenceCount(piDecimals, index))}
            </span>
          </div>
        )
      })}
    </div>
  </div>
)

export default PiDigitCount
