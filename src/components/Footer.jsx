import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorChanged, statusChanged } from '../redux/filters/actons';

const taskRemainer = (length) => {
   switch (length) {
      case 0:
         return 'No Tasks'

      case 1:
         return '1 Task'


      default:
         return `${length} Tasks`
   }
}

const Footer = () => {

   const filters = useSelector((state) => state.filters);
   const dispatch = useDispatch()
   const { status, colors } = filters;

   const todos = useSelector(state => state.todos)
   const todosRemaining = todos.filter(todo => !todo.completed).length

   const HandleStatus = (status) => {
      dispatch(statusChanged(status))
   }

   const handleColor = (color) => {

      if (colors.includes(color)) {
         dispatch(colorChanged(color, 'removed'))
      } else {
         dispatch(colorChanged(color, "added"))
      }

   }


   return (
      <div className="mt-4 flex justify-between text-xs text-gray-500">
         <p>{taskRemainer(todosRemaining)} left</p>
         <ul className="flex space-x-1 items-center text-xs">
            <li onClick={() => HandleStatus('All')} className={`cursor-pointer ${status === 'All' && 'font-bold'}`}>All</li>
            <li>|</li>
            <li onClick={() => HandleStatus('Incomplete')} className={`cursor-pointer ${status === 'Incomplete' && 'font-bold'}`}>Incomplete</li>
            <li>|</li>
            <li onClick={() => HandleStatus('Complete')} className={`cursor-pointer ${status === 'Complete' && 'font-bold'}`}>Complete</li>
            <li></li>
            <li></li>
            <li onClick={(() => handleColor('green'))} className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green')&&'bg-green-500'}`}></li>
            <li onClick={(() => handleColor('red'))} className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer  ${colors.includes('red')&&'bg-red-500'}`}></li>
            <li onClick={(() => handleColor('yellow'))} className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer  ${colors.includes('yellow')&&'bg-yellow-500'}`}></li>
         </ul>
      </div>
   );
};

export default Footer;
