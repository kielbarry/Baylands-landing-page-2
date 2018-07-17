import React, { Component } from 'react';

class AppHeader extends Component {
  render() {
    return (
      <header>
        <h1>Baylands Incubator</h1>

        <nav>
          <ul>
            <li className="button"><a href="landingpage.html">Home</a></li>
            <li className="button"><a href="aboutpage.html">About Us</a></li>
            <li className="button"><a href="projectspage.html">Projects</a></li>
            <li className="button"><a href="teampage.html">Team</a></li>
            <li className="button"><a href="contactpage.html">Contact Us</a></li>
          </ul>
        </nav>
    </header>
    );
  }
}

export default AppHeader;
