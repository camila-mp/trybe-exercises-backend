const axios = require('axios');

// outra forma de fazer a mesma requisiçao:
// axios
//   .get('http://localhost:3000/ping/')
//   .then((response) => {
//     console.log(response.data);
//     console.log(response.status);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const getPong = async () => {
  try {
    const response = await axios.get('http://localhost:3000/ping/');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getPong();