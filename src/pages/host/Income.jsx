import React, { useEffect, useState } from 'react'
import {transactionsData} from "./dataIncome"
import Graph from "../../assets/Graph.jpg"

const Income = () => {

  const [transactionValues, setTransactionValues] = useState(0)
  useEffect(()=> {
    function getTotalTransactionsValue() {
      let value = 0
      transactionsData.forEach(elem => value+= elem.amount)
      let commaValue = value.toLocaleString("en-US")  /* i used to localeString in order to add a comma to the final value */
      setTransactionValues(commaValue)
    }
    getTotalTransactionsValue()
  }, [])

  return (
    <div className='h-full p-5 m-auto bg-vanPalette '>

      <div className='flex flex-col gap-2 md:gap-4'> {/* FLEXBOX */}
        <h1 className='text-xl font-bold md:text-3xl'>Income</h1>
        <p>Last <span className='font-bold underline '>30 days</span></p>
        <p className='text-2xl font-bold md:text-4xl'>${transactionValues}</p>
      </div>
      <img src={Graph} className='mt-4 ' />

      <div className='pb-20 mt-8 text-lg bg-vanPalette'> 
        <div className='flex items-center justify-between max-w-lg md:text-lg '> {/* FLEX */}
          <p className='font-bold'>Your transactions <span>({transactionsData.length})</span></p>
          <p className='text-base '>Last <span className='font-bold underline '>30 days</span></p>
        </div>
        <ul className='flex flex-col max-w-lg gap-4 mt-4 text-xl'>
          {transactionsData.map(obj => {
            const {amount, date} = obj
            return <li className='flex items-center justify-between p-2 py-4 bg-white rounded'>
            <span className='font-bold'>${amount}</span>
            <span className='text-base text-gray-400 '>{date}</span>
          </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Income