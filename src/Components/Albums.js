import React, { Component } from 'react'
import '../App.css';

export class Albums extends Component {
    constructor(props) {
		super(props)
    }
    render() {
        return (
            <div className = "three-cards">
                {this.props.albums.map(album => {
                return (<ul>
                    <img alt="example" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/simple-grunge-texture-album-song-cover-art-design-template-491d6737daa1f15b1372e11a16f0b06a_screen.jpg?ts=1597476389" width="300" height="380" />
                    <h5>{album.id}</h5>
                    <h5>{album.artist}</h5>
                    <h5>{album.album_title}</h5>
                    <h5>{album.album_cover}</h5>
                    </ul>)
            })}
            </div>
        )
    }
}

export default Albums