import * as React from 'react';
import './App.css';

import { Trueface } from 'trueface-sdk';
import { Match } from 'trueface-react';

class App extends React.Component {

  constructor(props: object) {
    super(props);
    Trueface.key = 'your-key-here';
  }

  render() {
    return (
      <div className="App">
        <Match
          onPhotoTaken={(photo: string) => {
            consoole.log("photo");
          }} />
      </div>
    );
  }
}

export default App;
