import Trueface from "./Trueface";
import TruefaceBase from "./TruefaceBase";

export default class FaceDetection extends TruefaceBase {
    public readonly endpoint: string = `${Trueface.base}/v1/facedetect`;
    set inage(img: string) {
        this.data[`img`] = img;
    }
}
