import React, {Component} from 'react';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';

class App extends Component{
render(){
return(
<div className="App">

<div className="feature-block black-bg">
<div className="container">
<div className="row text-center">
<div className="col-md-10 col-md-offset-1">
<center>
<h2 className="feature-header">
Create Account:
</h2>
Username:<br />
<input type="text" name="Username" /><br /><br />
Email:<br />
<input type="text" name="Password" /><br /><br />
Phone Number:<br />
<input type="text" name="Password" /><br /><br />
Password:<br />
<input type="text" name="Password" /><br /><br />

Confirm Password:<br />
<input type="text" name="Password" /><br /><br />

<form action="/action_page.php">
<input type="submit" value="Submit" />
</form>

<br /><br /><br />

<h2 className="feature-header">
Thank You for signing up. We appreciate your business.
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
ReactDOM.render(<App />, document.getElementById('signup'));
export default App;