import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';


class App extends PureComponent {
  componentDidMount() {
    window.addEventListener('keydown', this.eventKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.eventKey);
  }

  eventKey = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      const {logOut} = this.props;
      logOut();
    }
  }


  render() {
    const {isLoggedIn} = this.props;

    const listCourses = [
      {id: '1', name: 'ES6', credit: 60},
      {id: '2', name: 'Webpack', credit: 20},
      {id: '3', name: 'React', credit: 40},
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];

    return (
      <>
        <Notifications listNotifications={listNotifications}/>
        <div className="App">
          <Header />
          <div className='App-body'>
            {isLoggedIn ? <CourseList listCourses={listCourses}/> : <Login />}
          </div>
          <footer className='App-footer'>
            <Footer />
          </footer>
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
};

export default App;
