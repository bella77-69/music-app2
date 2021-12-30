import React, { Component } from 'react';
// import { api_base, api_detailsUrl, api_key} from "./apis/config.js";
import axios from 'axios';
import VideoArray from './VideoArray';



const api_key = "&key=AIzaSyAgOvRIkVbwzxOse-LHEvMmAmgLRiyZsnQ";
 const api_base = "https://youtube.googleapis.com/youtube/v3/search?";
 const searchLabel = "&q=";
 const requiredLabel = "&videoEmbeddable=true&type=video";


class Videos extends Component {
    state = {
        videos: [],
        videoById: []
    }

    componentDidMount() {
        this.getVideos();
    }

    getVideos = () => {
        axios.get(`${api_base} + ${searchLabel} + ${api_key} + ${requiredLabel}`)
        .then((response) => {
          console.log(response);
        this.setState({
            videos: response.data,
            videoById: response.data[0]
        })
        })
        .then((ids)=>{
          console.log(ids)
          // fetch ids of the items from the previous array and join the ids to 
          return fetch(api_base + api_key +"&id")
        })
        .then((response) => response.json())
        .then((data)=> {
          console.log(data)
          const sortedData = data.items.sort((a,b) => {
            return b - a
          })
          console.log(sortedData)
        })
  
    };
  
  

    render() {
        return (
            <div>
           <VideoArray videoById={this.state.videos}/>  
            </div>
        );
    }
}

export default Videos;