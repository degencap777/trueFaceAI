# Trueface SDK

Trueface SDK a set of Typescript / Javascript classes that Implement Trueface's endpoints.

### Installing

Using NPM

```
npm install trueface-sdk --save-dev
```

Using Yarn

```
yarn add trueface-sdk
```

If you are not using node, download package then include this file in your html

```
/trueface-sdk/dist/index.browser.js
```

## Authentication

Trueface.ai expects the API key to be included in all requests to the server:

```
import { Trueface } from 'trueface-sdk';
Trueface.key = 'your-key-here';
```

## Spoof Detection

Check if an image is a spoof attempt:
```
import { SpoofDetection } from 'trueface-sdk';


const sd = new SpoofDetection();
// photo is a jpeg image encoded as base64
// this api doesn’t accept images larger than 2mbs
// resize and/or compress images before sending them.
sd.image = photo;

// post returns Promise<Response>
const response = await sd.post();
// or sd.post().then(...);

// the call itself successed
if (!response.ok) {
    throw new Error('API call failed');
}

// decode response
const result = await response.json();
if (result.success) {
    alert(result.data.class);
} else {
    alert(result.message);
}
```

The above result is structured like this:
```
{
  "data": {
    "class": "fake",
    "key": "ahBzfmNodWlzcGRldGVjdG9ychULEghTbmFwc2hvdBiAgICAgtCJCgw",
    "score": 0.57887299999999997,
    "success": true
  },
  "message": "data processed successfully",
  "success": true
}
```

## Face Detection

Detect faces in an image
```
import { FaceDetection } from 'trueface-sdk';


const fd = new FaceDetection();
fd.image = photo;
// optional
fd.rawlandmarks = true;
const response = await fd.post();

...

const result = await response.json();
```

The above result is structured like this:
```
{
  "data": {
    "faces": [
      {
        "bounding_box": [
          272.7483750283718,
          29.899811007082462,
          335.0228900015354,
          117.26292028464377,
          0.9998049139976501
        ],
        "points": [
          291,
          319,
          306,
          296,
          316,
          65,
          62,
          79,
          97,
          95
        ]
      }
    ]
  },
  "message": "face processed successfully",
  "success": true
}
```

## Face Recognition
### Enroll

Include the enrollment pictures as base64 strings (maximum 10 images for the intial enrollment, you can add images to a profile for more training with the update endpoing below)
```
import { Enroll } from 'trueface-sdk';


const enroll = new Enroll();
enroll.name = "this-person-id";
// optional
enroll.collectionId = "collection_id";
const response = await enroll.post();

...

const result = await response.json();
```

The above result is structured like this:
```
{
    "message": "enrollment processed successfully",
    "data": {
        "enrollment_id": "your_enrollment_id"
    },
    "success": true
}
```

### Face Match
The face match endpoint is used to match a face to a profile on the system. Send a picture of the face along with id of the person you’d like to match.

```
import { Match } from 'trueface-sdk';


const match = new Match();
match.image = photo; // base64 jpeg photo
match.id = "previous_enrollment_id";
// optional
match.threshold = 0.5;
const response = await match.post();

...

const result = await response.json();
```

The above result is structured like this:
```
{
    "message": "face processed successfully",
    "data": {
        "emb2_match": true,
        "emb0_score": 0.9071727430549092,
        "emb2_score": 0.8963609236288711,
        "emb1_score": 0.8896829534022603,
        "emb1_match": true,
        "emb0_match": true
    },
    "success": true
}
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

