import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
   return (
      <Provider store={store}>
         <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
            <Navbar />
            <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
               <Header />
               <TodoList />
               <Footer />
            </div>
         </div>
      </Provider>
   );
};

export default App;





