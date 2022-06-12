import React, { Component } from 'react';
import "./About.css"; 
import profile_pic_juanocampo from "C:\\Users\\adria\\to-do-list_week1-juan0campo8\\src\\assets\\profile_pic_juanocampo.jpg";
export default class About extends Component {
  render() {
    return (
      <div>
         <div>
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src = {profile_pic_juanocampo}
              alt="Profile_Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Juan Ocampo</div>
            <div className="brief_description">
              I am a rising junior studying Software Engineering at Stevens Institute of Technology. I enjoy playing soccer and learning how to code!
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}