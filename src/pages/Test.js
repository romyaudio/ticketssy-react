import React from 'react'
import NumberFormat from 'react-number-format';



function Example() {
  

  const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      
    })

    var value = 2000

   return formatter.format(value) // "$10,000     
  

}
export default Example
