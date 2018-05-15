import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'react-day-picker/lib/style.css';
import './css/index.css';
import { ButtonGroup, Button, Jumbotron, Nav, NavItem, NavDropdown, Navbar, Table, HelpBlock, Glyphicon } from 'react-bootstrap';
import registerServiceWorker from './registerServiceWorker';
import DayPickerInput from './daypicker.js';

class App extends Component{
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    
    this.state = {
    selectedDay: undefined,
    }

  }

  handleDayChange(day) {
    this.setState({ 
      selectedDay: day 
    });
  }

  render(){
    const { selectedDay } = this.state;
    return(
    <div className="App">
    <nav
    className="navbar navbar-fixed-top
    navbar-default"
    role="navigation"
    >

    <div className="container">


    <div className="navbar-header">
    <button
    type="button"
    className="navbar-toggle collapsed"
    data-toggle="collapse"
    data-target="#navbar_collapse">
    </button>
    </div>


    <div
    className="collapse navbar-collapse"
    id="navbar_collapse">
    </div>
    </div>
    </nav>

    <div className="navbar-placeholder">
    <div id="content">
    <div className="mtl mbl lead">
    <div className="animation-container">
    <img
    alt="PickUp Banner"
    id="banner"
    src={require("./img/pickupwebbanner.png")}
    />
    </div>

    </div>
    </div>
    </div>
    <div className="feature-block">
    <div className="container">
    <div className="row text-center">
    <div className="col-md-10 col-md-offset-1">

    <h2 className="feature-header">
    <br /><br />

    <br /><br />

    <br /><br />

    What is PickUp?
    </h2>
    </div>
    </div>
    <div className="row mtl">
    <div className="col-md-4 col-md-push-6 lead mbl">
    <p className="mts">
    <br /><br />Pickup is a ridesharing service designed to simplify the commute of university students around Ontario and provide the best commuting experience.<br /><br /><br />

    Our app is currently in development and will be released in time for early September.<br /><br />

    In the meantime scroll down to try out our service from this website.
    <br /><br />
    </p>
    <p>
    </p>
    <div className="learn-more-button-wrapper mtm">
    <a
    className="btn btn-default btn-bordered"
    target="_blank"
    >
    Sign up to become a driver
    </a>
    </div>
    </div>
    <div className="col-md-5 col-md-pull-3 mts text-center">


    <div className="animation-container">
    <div id="animation-container">
    <br />
    <br />
    <iframe src='//www.appdemostore.com/embed?id=4950896824811520' width='334' height='680' frameBorder='0'></iframe>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>

    <div className="feature-block black-bg">
    <div className="container">
    <div className="row text-center">
    <div className="col-md-8 col-md-offset-2">

    <h2 className="feature-header mtl">
    Get A Ride Today <br /> Please Fill Out The Following Form And Select Rider Or Driver<br />
    <br />
    Info:
    </h2>
    </div>
    </div>

    <div className="row text-center">


    <div className="form-group">
    <label htmlFor="RiderForm1">First name: </label>
    <input type="firstname" className="form-control" id="RiderForm1" placeholder="e.g. John"/>
    </div>


    <div className="form-group">
    <label htmlFor="RiderForm2">Last name: </label>
    <input type="lastname" className="form-control" id="RiderForm2" placeholder="e.g. Doe"/>
    </div>



    <div className="form-group">
    <label htmlFor="RiderForm3">Email address: </label>
    <input type="email" className="form-control" id="RiderForm3" placeholder="name@example.com"/>
    </div>


    <div className="form-group">
    <label htmlFor="RiderForm4">Phone number: </label>
    <input type="PhoneNumber" className="form-control" id="RiderForm4"/>
    </div>


    <div className="form-group">
    <label htmlFor="RiderForm5">Starting From: </label>
    <select className="form-control" id="RiderForm5">
    <option>McMaster University</option>
    <option>Richmond Hill</option>
    <option>Oakville</option>
    <option>Square One</option>
    <option>North York</option>
    <option>Georgetown</option>
    <option>Milton</option>
    <option>Markham</option>
    <option>Scarborough</option>
    <option>Thornhill</option>
    <option>Etobicoke</option>
    <option>Toronto (DT)</option>
    <option>St. Catharines</option>
    <option>London</option>
    <option>Kitchener</option>
    </select>
    </div>


    <div className="form-group">
    <label htmlFor="RiderForm6">Destination: </label>
    <select className="form-control" id="RiderForm6">
    <option>McMaster University</option>
    <option>Richmond Hill</option>
    <option>Oakville</option>
    <option>Square One</option>
    <option>North York</option>
    <option>Georgetown</option>
    <option>Milton</option>
    <option>Markham</option>
    <option>Scarborough</option>
    <option>Thornhill</option>
    <option>Etobicoke</option>
    <option>Toronto (DT)</option>
    <option>St. Catharines</option>
    <option>London</option>
    <option>Kitchener</option>
    </select>
    </div>
    <div>
    {this.state.selectedDay && <p>Day: {this.state.selectedDay.toLocaleDateString()}</p>}
    {!this.state.selectedDay && <p>Choose a day</p>}
    <DayPickerInput 
    onDayChange={this.handleDayChange}
    dayPickerProps={{
    todayButton: 'Today'
    }}     
    />
    </div>
    <div className="form-check">
    <input className="form-check-input" name="radio" type="radio" id="Radios1" value="option1"/>
    <label className="form-check-label" htmlFor="Radios1">
    I am a rider
    </label>
    </div>


    <div className="form-check">
    <input className="form-check-input" name="radio" type="radio" id="Radios2" value="option2"/>
    <label className="form-check-label" htmlFor="Radios2">
    I am a driver
    </label>
    </div>

    <form action="/action_page.php">
    <button type="submit" className="btn btn-light">Submit</button>
    </form>

    <div className="feature-block text-center">
    <div className="container">
    <h2 className="feature-header">
    Contact Us:
    </h2>

    <div className="row mtx mbx">
    <div className="col-md-10 col-md-offset-1">


    <div className="lead">

    pickuprideshare@gmail.com<br />

    647-632-1080<br />

    175 Longwood Road South Hamilton ON<br />
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>




    </div>


    );
    }
  }
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();