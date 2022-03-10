import axios from 'axios';

 const getDog = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random';
    return await axios.get(url);
    
};

export default getDog;