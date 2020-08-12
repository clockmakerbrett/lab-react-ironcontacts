import React from 'react';
import contacts from './contacts.json';
import TableHeader from './TableHeader';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5),
    };
  }
  addRandomContact = () => {
    const randomNum = Math.floor(Math.random() * (contacts.length - 5) + 5);
    const randomContact = contacts[randomNum];
    const newArray = [...this.state.contacts, randomContact];
    this.setState({
      contacts: newArray,
    });
  };
  sortByName = () => {
    const newArray = [...this.state.contacts];
    newArray.sort((first, second) => {
      return first.name > second.name ? 1 : -1;
    });
    this.setState({
      contacts: newArray,
    });
  };
  sortByPopularity = () => {
    const newArray = [...this.state.contacts];
    newArray.sort((first, second) => {
      return first.popularity > second.popularity ? -1 : 1;
    });
    this.setState({
      contacts: newArray,
    });
  };
  deleteContact(index) {
    const newArray = [...this.state.contacts];
    newArray.splice(index, 1);
    this.setState({
      contacts: newArray,
    });
  }
  render() {
    return (
      <div className="container">
        <div className="ironcontacts">
          <h1>IronContacts</h1>
          <button onClick={this.addRandomContact}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort By Name</button>
          <button onClick={this.sortByPopularity}>Sort By Popularity</button>
          <table>
            <TableHeader />
            <tbody>
              {this.state.contacts.map((contact, index) => {
                return (
                  <tr key={contact.id}>
                    <td>
                      <img src={contact.pictureUrl} alt={contact.name} />
                    </td>
                    <td>
                      <p>{contact.name}</p>
                    </td>
                    <td>
                      <p>{contact.popularity}</p>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          this.deleteContact(index);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
