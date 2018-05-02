 import React, { Component } from 'react';

class App extends Component{
	
	render(){
		return(
			<div className= "App">


			<div className="feature-block black-bg">
			<div className="container">
			<div className="row text-center">
			<div className="col-md-10 col-md-offset-1">

			<center>

			<h2 className="feature-header">
			Welcome Back! Log in below. 
			</h2>

			Username/Email:<br />
			<input type="text" name="firstname" /><br /><br /><br />
			Password:<br />
			<input type="text" name="lastname" /><br /><br />
			<form action="/action_page.php">
			<input type="submit" value="Submit" /> 
			</form><br /><br /><br />

			<h2 className="feature-header">
			Welcome Back!!!!
			</h2>


			</center>
			</div>
			</div>
			</div>
			</div>

			</div>
		);
	}
}

export default App;