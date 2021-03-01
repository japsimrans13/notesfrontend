import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButtons() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState();
  let formData = new FormData();
  formData.append("image_name",title);
  formData.append("image",cover);
  // formData.append("user","1");

  const newImage = () => {
    console.log('send post request');
    fetch('http://127.0.0.1:8000/api/notes/add-image', {
      method:'POST',
      body: formData
    }).then((response)=>console.log(response))
    // console.log(cover);
  }


  return (
    <div className={classes.root}>
      <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      
      <Button onClick={() => { newImage() }} variant="contained" color="primary" component="span" >
        Upload
        </Button>

      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={(event) => setCover(event.target.files[0])} />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
}
