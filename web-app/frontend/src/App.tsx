import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import StudentProfilePage from './pages/StudentProfilePage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import Login from './components/Login';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/student-profile" component={StudentProfilePage} />
        <Route path="/admin-dashboard" component={AdminDashboardPage} />
      </Switch>
    </Router>
  );
};

export default App;