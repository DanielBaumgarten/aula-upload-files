import { useState } from 'react';
import './styles.css';
import api from '../../services/api'

function Main() {
  const [file, setFile] = useState('');
  const [image, setImage] = useState('');

  async function handleUploadFormData() {
    if (!file){
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await api.post('/upload/multipart', formData, {
        headers: {
          'Content-Type': 'multpart/form-data'
        }
      });
      console.log(response);
      const {url} = response.data;
      setImage(url);
    } catch (error) {
      
    }
  }

  return (
    <div className="container-main">

      <input 
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      
      />

      <button
         type='button'
         className='btn-purple'
         onClick={handleUploadFormData}
         >

        Upload form-data
      </button>
      <button className='btn-orange'>
        Upload base64
      </button>
    <div className="container-image">
      {image && <img src={image} alt="upload"/>}
    </div>


    </div>
  );
}

export default Main;
