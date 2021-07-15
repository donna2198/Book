import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';


import { useDispatch } from 'react-redux';
import {deleteBook} from '../actions/book.js'
import { BrowserRouter as Router,
    Switch,
    Route,
    Link,useHistory } from 'react-router-dom';
import Add_book from './Add_book.js'

const useStyles = makeStyles({
  
});




const Book = () => {

  const book = useSelector((state) => state.book);
  const classes = useStyles();
  const dispatch = useDispatch();

  const history = useHistory();

 

  return (
      <Router>
      <div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Book Name</TableCell>
            <TableCell >Author</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {book.map((row) => (
            <TableRow key={row._id}>
              <TableCell >
                {row.title}
              </TableCell>
              <TableCell >{row.author}</TableCell>
              <TableCell ><Button ><EditIcon/></Button><Button onClick={() => dispatch(deleteBook(row._id))}><DeleteIcon/></Button></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
    </div>
    
    </Router>
  );
}
export default  Book;