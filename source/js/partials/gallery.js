import axios from 'axios';

if (window.location.pathname === '/gallery') {
  axios.get('/allImages').then(response => {
    console.log(response);
  });
}
