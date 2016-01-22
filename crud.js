/*
contactSchema {_id: int, name: string, address: string, number: string, email: string}
*/
var contacts = [];
var id = 0;

function addContact(n, a, p, e){
  
  //validate inputs on front end
 
  //validate that id does not already exist?
  id = id+1;
  
  contacts.push({_id: id, name: n, address: a, phone: p, email: e});
  
  
  //items are being added to the array
  console.log(contacts.length);

};


function editContact(id, n, a, p, e){
  
  for(var i=0; i<contacts.length;i++){
    if (i._id === id){
      var temp = i;
      
      contacts.splice(i, 1);
      
      contacts.push({_id: id, name: n, address: a, phone: p, email: e});
    }
    else{
      //needs better error
      console.log("No Contact Found");
    }
  }

};

function deleteContact(id){
  
    for(var i=0; i<contacts.length;i++){
      if (i._id === id){
        
        contacts.splice(i, 1);

      }
      else{
        //needs better error
        console.log("No Contact Found");
      }
    }

};

