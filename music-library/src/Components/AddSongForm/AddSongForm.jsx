import React, { useState } from 'react';

const AddSongForm = (props) => {
    
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setRelease_Date] = useState('');
    const [genre, setGenre] = useState('');
    
    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre
        };
        console.log(newSong)
        props.addNewSongProperty(newSong)
    }

    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <label>Title</label>
            <input type='text' placeholder="Title..." style={{margin: '5px'}} value={title} onChange={(event) => setTitle(event.target.value)} />
            <label>Artist</label>
            <input type='text' placeholder="Artist..." style={{margin: '5px'}} value={artist} onChange={(event) => setArtist(event.target.value)} />
            <label>Album</label>
            <input type='text' placeholder="Album..." style={{margin: '5px'}} value={album} onChange={(event) => setAlbum(event.target.value)} />
            <label>Release Date</label>
            <input type='number' placeholder="Release Date..." style={{margin: '5px'}} value={release_date} onChange={(event) => setRelease_Date(parseFloat(event.target.value))} />
            <label>Genre</label>
            <input type='text' placeholder="Genre..." value={genre} onChange={(event) => setGenre(event.target.value)} />
            <button type='submit' className='btn btn-secondary' style={{margin: '5px'}}>Add Song</button>
        </form>
     );
}
 
export default AddSongForm;