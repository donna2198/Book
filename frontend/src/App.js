import {useEffect} from 'react';
import { Container } from '@material-ui/core';
import useStyles from './style';

import Login from './component/Login';
import { useDispatch} from 'react-redux'; 
import './css/style.css';
import {getBook} from './actions/book';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/Home';
import Navbar from './component/Navbar';

const App= () =>{
  
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getBook());
  },[dispatch]);

  return(
    <Router>
    <Container maxWidth="lg">  
      <Navbar />
    
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/auth"  exact component={Login} />
              
    </Switch>
           
  </Container>
  
  
    </Router>
  );
  
}

export default App;
