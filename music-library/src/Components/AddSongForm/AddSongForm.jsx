import React, { useState } from 'react';

const AddSongForm = (props) => {
    
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setRelease_Date] = useState('');
    const [genre, setGenre] = useState('');
    
    return ( 
        <form>
            <label>Title</label>
            <input type='text' value={title} />
            <label>Artist</label>
            <input type='text' value={artist} />
            <label>Album</label>
            <input type='text' value={album} />
            <label>Release Date</label>
            <input type='date' value={release_date} />
            <label>Genre</label>
            <input type='text' value={genre} />
        </form>
     );
}
 
export default AddSongForm;