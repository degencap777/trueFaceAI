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
