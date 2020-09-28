import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Component/react1";


function App() {
  return (
    <div>
      <h1 className='bg-info text-white'>Hello React</h1>
      <Card behavior ="submit">DATA SEND</Card>
    </div>
  );
}

export default App;
