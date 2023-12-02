import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';

import './App.css';
import './Navbar.css';
import './Home.css';
import './Skills.css';
import './Projects.css';
import './Xp.css';
import Skills from './components/Skills';
import Xp from './Xp';
import { useState } from 'react';

function App() {
  const [page,setPage]=useState(1);

  return (
    <main className='background'>
      <Navbar setPage={setPage}/>
      <div className='padding'>
      {page===1 ?(<Home />):(<div></div>)}
      {page===2 ?(<Projects />):(<div></div>)}
      {page===3 ?(<Xp />):(<div></div>)}
      {page===4 ?(<Skills />):(<div></div>)}      
      </div>
    </main>
  );
}

export default App;
