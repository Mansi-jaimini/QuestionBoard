import React, { useState } from 'react'
import Options from './Options';
import './App.css'

function Form() {
    const [questionTitle,setQuestionTitle]=useState('');
    const [answerType,setAnswerType]=useState('None');
    const [options,setOptions]=useState([{placeholder:'',min:'',max:'',rows:''}])

    const handleAddOption=()=>{
        setOptions([...options,{placeholder:'',min:'',max:'',rows:''}])

    }

    const handleRemoveOption=(index)=>{
        setOptions(options.filter((_,i)=> i!==index))

    }
    const handleOptionChange=(index,field,value)=>{
        const newOptions=[...options];
        newOptions[index][field]=value;
        setOptions(newOptions);

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log({questionTitle,answerType,options});
        alert('form submitted successfully');
        setQuestionTitle('');
        setAnswerType('None');
        setOptions([{placeholder:'',min:'',max:'',rows:''}])
    }

  return (
    <form onSubmit={handleSubmit} className='form'>
        <h2>Add Question</h2>
        <input type="text"
        placeholder='Question Title'
        value={questionTitle}
        className='formInput'
        required
        onChange={(e)=>setQuestionTitle(e.target.value)}
        />
        <select
        value={answerType}
        className='formInput'
        onChange={(e)=>setAnswerType(e.target.value)}
        >
            <option value="None">None</option>
            <option value="Text">Text</option>
            <option value="Textarea">Textarea</option>
            <option value="Number">Number</option>
            <option value="Dropdown">Dropdown</option>
            <option value="Radio">Radio</option>
            <option value="Checkbox">Checkbox</option>
            <option value="Slider">Slider</option>
        </select>
        {answerType!=='None' && options.map((option,index)=>(
            <Options
            key={index}
            index={index}
            option={option}
            answerType={answerType}
            onChange={handleOptionChange}
            onRemove={handleRemoveOption}
            />
        ))}
        <div className='button'>
        {answerType!=='None'&&(
        <button type="button" className="add" onClick={handleAddOption}>Add Option</button>
    )}
        <button type="Submit" className='submit'>Submit</button>
        </div>
        </form>
  )
}

export default Form