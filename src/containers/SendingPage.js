import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ComplimentList from '../components/ComplimentList';
import UserList from '../components/UserList';
import './SendingPage.css';

const SendingPage = props => {
  const compliments = [
    'you are so beautiful to me',
    'your eyes are deep pools in which I wish to swim',
    'you are wittier than like, everyone',
    'I wish I were twice as good at math as you are'
  ];

  const users = [
    'Roy',
    'Nawar',
    'Mr. T',
    'Yoda'
  ];
  
  return (
    <section className="sending">
      <Nav />
      <div className="sending-grid">
        <ComplimentList compliments={compliments} />
        <UserList users={users} />
      </div>
      <Footer />
    </section>
  );
};

export default SendingPage;
