import React from 'react';
import '../App.css';
import Violinist from '../images/violinist.jpg';
import Pianist from '../images/pianist.jpg';
import Cellist from '../images/cellist.jpg';
import Clarinettist from '../images/clarinet.jpg';
import Conductor from '../images/conductor.jpg';

function Musicians() {
  return (
    <section className="section musicians" id = "musicians">
        <h2>Meet our world-class musicians below!</h2>

        <div className="musician-list">

            <div className="musician"> <img src = {Violinist} alt = "Violinist" /> Alex – Violin</div> 


            <div className="musician"> <img src = {Pianist} alt = "Pianist" /> Taylor – Piano</div>
            

            <div className="musician"> <img src = {Conductor} alt = "Conductor" /> Lorenzo – Conductor</div>

        
            <div className="musician"> <img src = {Clarinettist} alt = "Clarinettist" /> Myriam – Clarinet</div>


            <div className="musician"> <img src = {Cellist} alt = "Cellist" /> John – Cello</div>
        
        </div>

        <button className = "gold-button">View more ↓</button>

    </section>
  );
}

export default Musicians;
