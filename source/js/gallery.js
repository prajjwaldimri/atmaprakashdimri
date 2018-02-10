import axios from 'axios';

axios.get('/allImages').then(response => {
  console.log(response);
});
