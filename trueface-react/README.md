# Trueface SDK

Trueface React a set of components for React that allows you to quickly connect common UI elements to Trueface APIs.

### Installing

Using NPM

```
npm install trueface-react --save-dev
```

Using Yarn

```
yarn add trueface-react
```

## Enroll

Enroll component help take several photos with a preview to enroll
```
import * as React from 'react';
import './App.css';

import { Enroll as EnrollComponent } from 'trueface-react';
import { Enroll as EnrollEndpoint } from 'trueface-sdk';

class Enroll extends React.Component {

  private enroll: EnrollEndpoint = new EnrollEndpoint();

  constructor(props: object) {
    super(props);
    this.enroll.name = 'this-person-id';
  }

  render() {
    return (
      <div className="App">
        <EnrollComponent
          onPhotoTaken={async (photo: string) => {
            // trueface api
            const enroll = new EnrollEndpoint();
            enroll.add(photo);

            if (enroll.size === 3) {
              const response = await enroll.post();

              // html5 api
              if (!response.ok) {
                throw new Error('API call failed');
              }

              const result = await response.json();
              if (result.success) {
                alert(result.data.enrollment_id);
              } else {
                alert(result.message);
              }
            }
          }}
        />
      </div>
    );
  }
}

export default Enroll;
```

## Match (aka generic)

Match component help take a signle photo at time, it can be used with any endpoint require a photo.
```
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
            const response = await sd.post();

            // html5 api
            if (!response.ok) {
              throw new Error('api call failed');
            }

            const result = await response.json();
            if (result.success) {
              // 
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
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details

