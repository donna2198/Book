import  {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';
import { Button, Grid } from '@material-ui/core';
import Navbar from './Navbar';
import Add_book from './Add_book';
import Book from './Book';  
import { BrowserRouter as Router,
  Switch,
  Route,
  Link,useHistory } from 'react-router-dom';

function Home(props) {
  const classes = useStyles();
 
  const [currentId, setCurrentId] = useState(null);


  const history = useHistory();

  
  const add=()=>{
    history.push('/addbook');

  }



  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <Typography>Dashboard</Typography>
      <List>

          <ListItem button key="book">
            <ListItemText primary="Book" />
            <Button onClick={add}><Link to='/addbook'>Add</Link></Button>
          </ListItem>
      
      </List>
    </div>
  );


  return (
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      
      
        {/*<Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
          </nav>*/}
      <main className={classes.content}>
        <div className={classes.toolbar} />
         <Grid  className={classes.root} container justify="space-between" alignItems="stretch" spacing={3}>
           <Grid item xs={12} sm={7}>
            <Book />
            </Grid>
            <Grid  item xs={12} sm={5}>
            <Add_book />
            </Grid>
          </Grid>
      </main>
    </div>
    </Router>
  );
}



export default Home;