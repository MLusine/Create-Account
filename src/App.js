// import './App.css';
import './sass/abstracts/_variables.scss';
import './sass/base/_base.scss';
import './sass/component/_button.scss';
import './sass/component/_form.scss';

import SignupForm from './components/Signup';

function App() {
  return (
    <div className="container">
      <h3 className='heading'>Create new Account </h3>
      < SignupForm />
    </div>

  );
}

export default App;
