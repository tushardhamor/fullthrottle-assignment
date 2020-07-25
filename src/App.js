import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import Modal from './components/modal/modal.component';

import './app.css';


class App extends Component {
  state = {
    modalVisible: false
  };
  activeData;
  
  constructor(props) {
    super(props)
    this.state = {
    membersDB: [],
    }
  }
  
  componentDidMount() {
    fetch('https://api.jsonbin.io/b/5f1c2cc7c1edc466175e08fa')
    .then(res => res.json())
    .then(data => {
    this.setState({
      membersDB: data.members
      });
    });
  }

  showModal = (index, users) => {
    this.setState({ modalVisible: true });
    this.activeData = users.activity_periods;
    this.memberName = users.real_name;
  };

  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    let users = null;

    users = (
      <div className="users_container">
        {this.state.membersDB.map((member, index) => {
          return (
            <CardList
              click={() => this.showModal(index, member)}
              real_name={member.real_name}
              timezone={member.tz}
              key={member.id}
            />
          );
        })}
      </div>
    );
    return (
      <div className='page_wrapper'>
        <h1 className='page_title'>Full Throttle User List</h1>
        <Modal
          show={this.state.modalVisible}
          closed={this.closeModal}
          member={this.activeData}
          user_name={this.memberName}
        />
        <div className='users_wrapper'>{users}</div>
      </div>
    );
  }
}

export default App;
