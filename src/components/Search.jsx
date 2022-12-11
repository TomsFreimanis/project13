import React from 'react'
import {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import './search.css'
const Search = () => {

    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' +input)


    }
  return ( 
    <form onSubmit={submitHandler}>
        <div className='inputdiv'>
            <FaSearch></FaSearch>
        <input onChange={(e) => setInput(e.target.value)} type='text' value={input}/>
        
        </div>
    </form>
  )
}

export default Search