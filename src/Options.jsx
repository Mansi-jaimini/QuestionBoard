import React from 'react'
import './App.css'

function Options({index,option,answerType,onChange,onRemove}) {
    if(answerType==='None'){
        return null;
    }
  return (
    <div className='option'>
    {['Number','Text','Textarea','Checkbox','Dropdown','Radio','Slider'].includes(answerType)&&(
        <input
        type="text"
        placeholder='Placeholder'
        className='optionInput'
        value={option.placeholder}
        onChange={(e)=>onChange(index,'placeholder',e.target.value)}
        />
    )}
    {['Number','Text','Textarea'].includes(answerType)&&(
        <>
        <input
        type="number"
        placeholder='Min'
        value={option.min}
        className='optionInput'
        onChange={(e)=>onChange(index,'min',e.target.value)}
        />
        <input
        type="number"
        placeholder='Max'
        value={option.max}
        className='optionInput'
        onChange={(e)=>onChange(index,'max',e.target.value)}
        />
        </>
    )}
    {['Text','Textarea'].includes(answerType)&&(
        <input
        type="number"
        placeholder='Rows'
        value={option.rows}
        className='optionInput'
        onChange={(e)=>onChange(index,'rows',e.target.value)}
        />
    )}
    <button type="button" className='remove' onClick={()=>onRemove(index)}>Remove</button>
    </div>
  )
}

export default Options