import AddSongForm from "../AddSongForm/AddSongForm";
import DisplayMusic from "../DisplayMusic.jsx/DisplayMusic";
import React, { useState } from 'react';


const SearchBar = (props) => {
    
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setRelease_Date] = useState('');
    const [genre, setGenre] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let foundSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre
        };
        console.log(foundSong)
    }
    
    return ( 
        <form onSubmit={handleSubmit} class="form-inline">
            <label style={{margin: '15px'}} class="my-1 mr-2" for="inlineFormCustomSelectPref">Filter</label>
            <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                <option selected>Choose...</option>
                <option value={title}>Title</option>
                <option value={artist}>Artist</option>
                <option value={album}>Album</option>
                <option value={release_date}>Release Date</option>
                <option value={genre}>Genre</option>
            </select>

            <button style={{margin: '15px'}} type="submit" class="btn btn-secondary my-1">Submit</button>
        </form>
     );
}
 
export default SearchBar;