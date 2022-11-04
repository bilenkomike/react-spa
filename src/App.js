import {Redirect, Route, Switch} from 'react-router-dom';

// pages
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

// components
import MainHeader from './components/MainHeader/MainHeader';


function App() {
    return (
        <div>
            <MainHeader />
            <main>
                <Switch>
                <Route path="/" exact>
                    <Redirect to="/welcome" />
                </Route>
                <Route path="/welcome" >
                    <Welcome />    
                </Route>     
                <Route exact path="/products" >
                    <Products />    
                </Route>    
                <Route path="/products/:productId" >
                    <ProductDetail />    
                </Route>
                </Switch>        
            </main>
        </div>
    );
}

export default App;
