import React, { useState } from 'react';
import noteImg from '../assets/images/notes.png'
import tick from '../assets/images/double-tick.png'
import plus from '../assets/images/plus.png'
import { useDispatch } from 'react-redux';
import { added, allCompleted, clearCompleted } from '../redux/todos/actions';
import { addData } from '../redux/todos/addData';


const Header = () => {
   const [inputData, setInputData] = useState('')
   const dispatch = useDispatch()
   const onchangeHandler = (data) => {
      setInputData(data)
   }


   const submitFormData = (e) => {
      e.preventDefault()
      dispatch(addData(inputData))
      setInputData("")
   }

   const clearCompletedHandler = () => {
      dispatch(clearCompleted())
   }

   const allClearHandler = () => {
      dispatch(allCompleted())
   }



   return (

      <div>
         <form onSubmit={submitFormData} className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
            <img
               src={noteImg}
               className="w-6 h-6"
               alt="Add todo"
            />
            <input
               value={inputData}
               onChange={(e) => onchangeHandler(e.target.value)}
               type="text"
               placeholder="Type your todo"
               className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
            />

            <button style={{ fontSize: '25px' }}
               type="submit"
               className={` w-8 h-8 bg-[url('${plus}')] bg-no-repeat bg-contain`}
            >+</button>
         </form>

         <ul className="flex justify-between my-4 text-xs text-gray-500">
            <li onClick={allClearHandler} className="flex space-x-1 cursor-pointer">
               <img
                  className="w-4 h-4"
                  src={tick}
                  alt="Complete"
               />
               <span>Complete All Tasks</span>
            </li>
            <li onClick={clearCompletedHandler} className="cursor-pointer">Clear completed</li>
         </ul>
      </div>

   );
};

export default Header;
