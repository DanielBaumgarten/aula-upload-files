import './styles.css';

function Main() {
  return (
    <div className="container-main">
      <input type= "file" />

      <button className='btn-purple'>
        Upload form-data
      </button>
      <button className='btn-orange'>
        Upload base64
      </button>
    <div className="container-image">
      <img src="" alt="upload"/>
    </div>


    </div>
  );
}

export default Main;
