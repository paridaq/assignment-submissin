import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ProductList from './components/ProductList';
import CategoryList from './components/CategoryList';
import SearchBar from './components/SearchBar';
import CategorySearch from './components/CategorySearch';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Product Store</h1>
        
        <SearchBar />
        
        <CategorySearch/>
        
        
        <CategoryList/>
      
        <ProductList />
       
      </div>
    </Provider>
  );
};

export default App;




/* I built a fully functional application according to the guidelines using 
Redux Toolkit, and all the functional components are working properly. However,
 I wasn't able to complete the UI, and it doesn't look good. I also didn't implement
  the routing functionality using React Router DOM because I couldn't get the UI right. */