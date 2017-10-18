import * as React from 'react';
import './App.css';

import { Match } from 'trueface-react';
import { SpoofDetection } from 'trueface-sdk';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Match
          onPhotoTaken={async (photo: string) => {
            // trueface api
            const sd = new SpoofDetection();
            sd.image = photo;
            const response: Response = await sd.post();

            // html5 api
            if (!response.ok) {
              throw new Error('api call failed');
            }

            const result = await response.json();
            if (result.success) {
              alert(result.data.class);
            } else {
              alert(result.message);
            }
          }}
        />
      </div>
    );
  }
}

export default App;
