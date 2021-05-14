import React, { Component } from 'react'
import AddAlbum from './Components/AddAlbum'
import Albums from './Components/Albums';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      albums: [
        {id: 1, artist: "artist 1", album_title: "album1", album_cover: "ms1", songs: "Song1"},
        {id: 2, artist: "artist 2", album_title: "album2", album_cover: "ms3", songs: "Song2"},
        {id: 3, artist: "artist 3", album_title: "album3", album_cover: "ms4", songs: "Song3"},
      ],
      errorMsg: ''
    }
    this.receiver = this.receiver.bind(this)
    this.delete = this.delete.bind(this)
  }
  
  receiver = () => {
    let { albums, obj } = this.state;
    albums.push(obj);
  }
  delete(){
    let { albums, obj } = this.state;
    albums.pop(obj);
  }
  render() {
    return (
      <div className="App">
        <AddAlbum receiveFunc = {this.receiver}/>
        <Albums albums={this.state.albums} deleteFunc={this.delete}/> 
      </div>
      
    )
  }
}

export default App
