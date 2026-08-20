# Contact Book Web App

A responsive web application to add, search, and manage contacts.  
Data is stored in the browser using LocalStorage.

## ✨ Features
- Add, Edit, and Delete contacts
- Search contacts in real-time
- Data persists using LocalStorage
- Works on mobile and desktop

## 🛠️ Tech Stack
- HTML5, CSS3, JavaScript

## 🚀 How to Run
1. Clone the repo
```bash
git clone https://github.com/Rosanna-source/Contact-book.git
## 📋 Project Planning

Step 1: Plan

 1. Requirements
The app must:
1. Add a new contact with name, phone number, and email
2. Search for contacts by name
3. Delete contacts from the list
4. View all saved contacts
5. Save data using LocalStorage so contacts persist after page refresh

2. Classes and Functions
- Classes
- Contact: Stores contact details - name, phone, email.

-Functions
- addContact()→ Adds a new contact to the list
- deleteContact(id)→ Removes a contact
- searchContact(query) → Searches contacts by name
- displayContacts() → Displays all contacts on the webpage
- saveToLocalStorage() → Saves contacts to browser storage
- loadFromLocalStorage()→ Loads contacts when app starts

3. Input and Output
| Feature | Input | Output |
| --- | --- | --- |
| Add Contact | Name, Phone, Email | "Contact Added" message + updated list |
| Search Contact | Search text | List of matching contacts |
| Delete Contact | Click delete button | "Contact Deleted" message + updated list |
| View All | Page load | Full list of all saved contacts |
