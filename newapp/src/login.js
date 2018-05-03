import React, {Component} from 'react';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
class App extends Component{
render(){
return(
<div className="App">
<div class="feature-block black-bg">
<div class="container">
<div class="row text-center">
<div class="col-md-10 col-md-offset-1">
<center>
<h2 class="feature-header">
Log In:
</h2>
Username/Email:<br />
<input type="text" name="firstname" /><br /><br />
Password:<br />
<input type="text" name="lastname" /><br /><br />
<form action="/action_page.php">
<input type="submit" value="Submit" />
</form><br /><br /><br />
<h2 class="feature-header">
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
ReactDOM.render(<App />, document.getElementById('login'));
export default App;