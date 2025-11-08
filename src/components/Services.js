import React from 'react';
import '../App.css';

function Services() {
  return (
    <section className="section services" id = "services">
      <h2>Our Services</h2>
      <ul className="services-list">
        <li>Orchestral Performances for Concert Halls & Festivals</li>
        <li>Private Event Music for Weddings, Galas, and Corporate Gatherings</li>
        <li>Custom Compositions and Arrangements for Special Occasions</li>
        <li>Collaborations with Soloists, Choirs, and Other Ensembles</li>
        <li>Music Education Workshops and Masterclasses by Professional Musicians</li>
      </ul>
      <button className="gold-button" style={{ textDecoration: 'underline'}}>Book a Performance</button>

    </section>
  );
}

export default Services;
