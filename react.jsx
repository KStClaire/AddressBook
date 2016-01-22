var AddButton = React.createClass({
    getInitialState: function() {
        return { showForm: false };
    },
    onClick: function() {
        this.setState({ showForm: true });
    },
  render: function() {
    return (
      <div>
        <button className="btn btn-default" onClick={this.onClick}>Add New Contact</button>
        { this.state.showForm ? <AddForm /> : null }
      </div>
      )
  }
});
var EditButton = React.createClass({
  localHandleClick: function() {
    //EditContactForm .show();
  },
  render: function() {
    return (
        <button className="btn btn-default" onClick={this.localHandleClick}>Edit</button>
      )
  }
});
var DelButton = React.createClass({
  localHandleClick: function() {
    //needs to get id
    deleteContact();
  },
  render: function() {
    return (
        <button className="btn btn-default" onClick={this.localHandleClick}>Delete</button>
      )
  }
});




var AddForm = React.createClass({
    submitForm: function() {
      //verify name is a string
      //verify phone is only numbers
      //should fields be empty?
      addContact(this.state.name, this.state.address, this.state.phone, this.state.email);
  },
  handleNameChange: function(e) {
   this.setState({name: e.target.value});
  },
  handleAddressdChange: function(e) {
     this.setState({address: e.target.value});
  },
  handleEmailChange: function(e) {
   this.setState({email: e.target.value});
  },
  handlePhoneChange: function(e) {
     this.setState({phone: e.target.value});
  },
  render: function() {
    return (
        <div className="">
            <label htmlFor="name">Name</label>
            <input className="form-control" type="text" id="name" onChange={this.handleNameChange}/>
            
            <label htmlFor="phone">Phone</label>
            <input className="form-control" type="text" id="phone" onChange={this.handlePhoneChange}/>
            
            <label htmlFor="address">Address</label>
            <textarea className="form-control" name="address" id="address" cols={25} rows={3} defaultValue={""} 
            onChange={this.handleAddressChange}/>
            
            <label htmlFor="email">E-Mail</label>
            <input className="form-control" type="text" id="email" onChange={this.handleEmailChange}/>
            
            <br/>
            <button onClick={this.submitForm} className="btn btn-default">Add</button>
        </div>
      )
  }
});

//How to display contacts
var Contacts = React.createClass({
  render: function() {
    var displayContacts = [];
    for (var i = 0; i < this.props.level; i++) {
      displayContacts.push(
      <div class="row hidden" id="infoSect">
        <div class="col-sm-4" id="sampleContact">
          <div id="imgPlaceholder" class="pull-left"></div>
          <div id="contactInfo" >
            <h4>i.name</h4>
            <p id='phoneNum'>i.phone</p>
          </div>
        </div>
       </div>
      );
    }
    return (
      <div>
        {displayContacts}
      </div>
    );
  }
});


var Main = React.createClass({
  render: function() {
    return (
        <div>
            <div className="pull-right">
              <AddButton/>
            </div>
            <Contacts/>
        </div>
      )
  }
});


React.render(<Main />, document.getElementById("root"));