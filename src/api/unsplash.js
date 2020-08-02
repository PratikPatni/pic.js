import axios from 'axios';
export default axios.create({
     baseURL: 'https://api.unsplash.com',
     headers: {
        Authorization: 'Client-ID DJeixR9R5j7dehPoHeUPm8xcymaZPOzANYyFTUkiRyo'
    }
 });
