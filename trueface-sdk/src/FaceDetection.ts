import Trueface from "./Trueface";
import TruefaceBase from "./TruefaceBase";

export default class FaceDetection extends TruefaceBase {
    public endpoint: string = `${Trueface.base}/v1/facedetect`;
    private rawlandmarks: boolean = false;
    set image(img: string) {
        this.data[`img`] = img;
    }
    public post(): Promise<Response> {
        if (this.rawlandmarks === true) {
            this.endpoint = `${Trueface.base}/v1/facedetect?rawlandmarks=true`;
        }
        return super.post();
    }
}
