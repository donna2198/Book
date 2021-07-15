import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  root: {
    padding: ' 50px',
  },
  formTheme: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  heading: {
    color: 'rgba(0,22,32, 215)',
    textAlign:'center',
    fontSize:40,
    fontFamily:'Brush Script MT',
  },
  image: {
    marginLeft: '15px',
  },
  buttonSubmit:{
   marginLeft:'5px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
  }));