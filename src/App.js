import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/headerContainer';
import LoginPage from './components/Login/Login';

const  App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
       <HeaderContainer />
       <Navbar />
        <div className='app-wrapper-content-img'>

         <Route path="/dialogs" render={ () => <DialogsContainer  />} />
         <Route path="/profile/:userid?" render={ () => <ProfileContainer />} />
         <Route path="/users" render={ () => <UsersContainer />} />
         <Route path="/login" render={ () => <LoginPage />} />
        </div>
     </div>
    </BrowserRouter>
  );
}   

export default App;


