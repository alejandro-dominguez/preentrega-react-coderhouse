import React from 'react';
import { Navbar } from './components';
import { ItemListContainer } from './containers';

const App = () => {
	return (
	<>
    <header>
		<Navbar />
    </header>
		<ItemListContainer greeting={"¡Hola coders!"}/>
	</>
  	)
}

export default App;