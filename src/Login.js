
import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import './App.scss';
import Dashboard from './components/Dashboard';


function App() {
        let history = useHistory();

        const redirect = () => {
          history.push('/dashboard')
        }


  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
              <h3 className='text-center mb-5 mt-5'>Login</h3>
          </div>
          <div class="mb-3">
            <label class="form-label">User Name</label>
            <input type="text" class="form-control" placeholder="username/id" />
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" placeholder="Enter Password" />
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={redirect}>Login</button>
      </div>
    </div>
  );
}

export default App;
