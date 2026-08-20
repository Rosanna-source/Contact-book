let contacts = [];

// CLASS with METHOD - Requirement 2
class Contact {
  constructor(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
  displayInfo() { // METHOD
    return `${this.name} | ${this.phone} | ${this.email}`;
  }
}

// Load from LocalStorage when page opens
window.onload = function() {
  contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  displayContacts();
}

// ADD CONTACT
function addContact() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;

  // CONDITIONAL - Requirement 3
  if(name === "" || phone === "") {
    alert("Name and Phone are required!");
    return;
  }

  let newContact = new Contact(name, phone, email);
  contacts.push(newContact);
  saveToLocalStorage();
  displayContacts();
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
}

// LOOP - Requirement 3
function displayContacts() {
  let list = document.getElementById("contactList");
  list.innerHTML = "";
  for(let i = 0; i < contacts.length; i++) { // LOOP
    let li = document.createElement("li");
    li.innerHTML = `${contacts[i].displayInfo()} <button onclick="deleteContact(${i})">Delete</button>`;
    list.appendChild(li);
  }
}

// DELETE CONTACT
function deleteContact(index) {
  contacts.splice(index, 1);
  saveToLocalStorage();
  displayContacts();
}

// SEARCH CONTACT
function searchContact() {
  let query = document.getElementById("search").value.toLowerCase();
  let list = document.getElementById("contactList");
  list.innerHTML = "";
  for(let i = 0; i < contacts.length; i++) {
    if(contacts[i].name.toLowerCase().includes(query)) {
      let li = document.createElement("li");
      li.innerHTML = `${contacts[i].displayInfo()} <button onclick="deleteContact(${i})">Delete</button>`;
      list.appendChild(li);
    }
  }
}

// LOCALSTORAGE
function saveToLocalStorage() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}
