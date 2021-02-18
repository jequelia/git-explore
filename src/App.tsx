import React from 'react';
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom';
import GlobalStyle from './style/global';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
    <GlobalStyle/>
    <ToastContainer />
    </>
  );
}

export default App;
