import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { createBook, updateBook } from '../actions/book';
import { Card, CardContent,Typography, CardActions, TextField, Button } from '@material-ui/core';
import useStyles from './style';


const Add_book = ({ currentId }) =>{
    
    const [postData,setPostData]=useState({ title:'', author:'',});
    const classes= useStyles();
    //const book = useSelector((state) => (currentId ? state.book.find((p) =>p._id === currentId) : 0));
   
    const dispatch = useDispatch();
  


    /*useEffect(() => {
      if (book) setPostData(book);
    }, [book]);*/
  
    
  /*const clear = () => {
    setCurrentId(0);
    setPostData({  title: '', author:'' });
  };*/

   const handleSubmit =(e) =>{
      e.preventDefault();
      
     //if (currentId) {
        dispatch(createBook(postData));
        //clear();
    // }
     // } else {
        //dispatch(updateBook(currentId, postData));
        //clear();
     // }
       }


    return( 
        
    <Card className={classes.card}>
     <form onSubmit={handleSubmit}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Book Entry
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Title
        </Typography>
        <TextField name="title" id="title" label="title" value={postData.title}  fullWidth variant="outlined" onChange={(e)=>setPostData({...postData, title:e.target.value})} />
        <Typography className={classes.pos} color="textSecondary">
          Author
        </Typography>
        <TextField name="author" id="author" label="Author" value={postData.author} fullWidth variant="outlined" onChange={(e)=>setPostData({...postData, author:e.target.value})}/>
      </CardContent>
      <CardActions>
         <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >Save</Button>  
      </CardActions>
      </form>
    </Card>
        
    )

}
export default Add_book;