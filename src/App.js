import './App.css';
import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TestApi from './TestApi/TestApi';
import TestHook from './TestHook/TestHook';

function App() {

  const colors = [
    '#00FFD1',
    '#FFFF00',
    '#3F3B6C',
    '#EB6440',
    '#7743DB',
    '#82CD47'
  ]

  return (
    <div className='p-5'>
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="soal-1" title="Soal 1">
              <TestApi />
          </Tab>
          <Tab eventKey="soal-2" title="Soal 2">
            <TestHook colors={colors} />
          </Tab>
       </Tabs>
    </div>
  );
}

export default App;
