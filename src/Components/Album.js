import React, { Component } from 'react'
import "../App.css"
import { Card } from 'antd';
const { Meta } = Card;

export class Album extends Component {
    constructor(props) {
		super(props)
    }
    clickHandler = (e, props) => {
        {this.props.deleteFunc()}
        e.preventDefault()
    }
    render() {
        return (
            <div className = "card">
                <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="album" src="https://media.npr.org/assets/img/2010/11/09/mj-michael_custom-fc8ec896ecb722af088a5a5d172db3c5941f7314.jpg" width="300" height="380" />}
                >
                    <Meta title= {this.props.album_title}/>
                    <h5>{this.props.artist}</h5>
                    <h5>{this.props.album_cover}</h5>
                </Card>
                <button onClick={this.clickHandler}>Delete</button>
            </div>
        )
    }
}

export default Album