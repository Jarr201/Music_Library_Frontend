import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic.jsx/DisplayMusic';
import AddSongForm from './Components/AddSongForm/AddSongForm';
import './App.css';

function App() {

  const[songs, setSongs] = useState([]);

  function addNewSong(song) {
    let tempSongs = [...songs, song];
    setSongs(tempSongs)
  }

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/songs/');
    setSongs(response.data);
  }

  async function addNewSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/api/songs/', newSong);
    if(response.status === 201){
      await getAllSongs();
    }
  }

  // async function deleteSong(){
  //   let response = await axios.delete('http://127.0.0.1:8000/api/songs/');
  //   setSongs(response.data);
  // }

  return (
    <div className='container-fluid'>
      <div className='row'>
        
        <div class="d-flex justify-content-center">
         <div class="d-flex p-2 bd-highlight">
          <div className='border-box'>
          <DisplayMusic parentSongs={songs} />
        </div>
          </div>
          </div>

          <div class="d-flex justify-content-center">
          <div className='border-box'>
          <AddSongForm addNewSongProperty={addNewSong}/>
          </div>
        </div>
      </div>
    </div>
  )};


export default App;
