import React from 'react';
import './App.css';
import image from './coffee-mountain.png';
import logo from './mountains.png';
import barista from './barista.png';
import latte from './latte.png';
import coldBrew from './coldbrew.jpg';

function App() {
  return (
    <div className="App">
			<nav className="App-navbar">
				<a href="/"> <img src={logo} alt="mountains" style={{position: "relative", width: "130px"}} /></a>
				<a href="/" className="App-navbar-item" style={{textDecoration: "none"}}> Home </a>
				<a href="/" className="App-navbar-item" style={{textDecoration: "none"}}> About </a>
				<a href="/" className="App-navbar-item" style={{textDecoration: "none"}}> Product </a>
			</nav>
      <div className="App-header">
			<img src={image} alt="coffee beans" style={{position: "relative", zindex: -1, width: "700px", maxHeight: "400px"}}/>
			<span className="title" style={{position: "absolute", marginTop: "10px", fontSize: "50px", color: "white"}}>SNOWCAP COFFEEHOUSE</span>
			</div>
			<div className="App-container">
				<div className="App-image" >
				</div>
				<div className="App-body">
					<div className="body-title"> About Us</div>
					<div className="body-content">
						<p>
							<i> Our coffee is the best coffee and you're just going to have to deal with it. </i> <br/><br/> Experience Colorado's finest brew at Snowcap Coffeehouse!
						</p>
					</div>
				</div>
			</div>
			<div className="App-container">
				<div className="App-body">
					<div className="body-title"> Our Product </div>
					<div>
						<p style={{fontSize: "2.25vmin"}}>
							Here at Snowcap, we don't just serve a cup of joe, or Frappuccino's — no, we serve robust, gently roasted Ethiopian coffee. Our drinks are fresh-brewed with water collected from natural Colorado streams, and then vapor purified for sanitation and taste.
						</p>
					</div>
				</div>
			</div>
			<div>
				<div className="App-body"><img src={barista} alt="barista" style={{width: "100%", maxWidth: "800px", maxHeight: "400px", padding: "10px"}}/></div>
				<div className="body-content"><img src={coldBrew} alt="coldbrew" style={{width: "100%", maxWidth: "800px", maxHeight: "400px", padding: "10px"}}/></div>
			</div>
    </div>
  );
}

export default App;
