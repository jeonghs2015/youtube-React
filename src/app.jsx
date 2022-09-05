import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAgRTpkgwgjkowpxmrlyk1p0dYeNuiprsY", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }, []);
  return (
   <h1>Hello :)</h1>
  );
}

export default App;
