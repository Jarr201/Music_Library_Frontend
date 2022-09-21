import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const[songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/songs/');
    setSongs(response.data);
  }

  async function createSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/api/songs/', newSong);
    if(response.status === 201){
      await getAllSongs();
    }
  }

  // async function deleteSong(){
  //   let response = await axios.delete('http://127.0.0.1:8000/api/songs/');
  //   setSongs(response.data);
  // }
}

export default App;
