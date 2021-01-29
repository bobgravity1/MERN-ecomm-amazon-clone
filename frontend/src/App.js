
import Homescreen from './screens/Homescreen'
import Productscreen from './screens/Productscreen'
import {Route, BrowserRouter} from 'react-router-dom'


function App() {
  return (

    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">amazona</a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
      <Route path="/product/:id" component={Productscreen} exact></Route>
      <Route path='/' component={Homescreen} exact />
        <div>
</div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
