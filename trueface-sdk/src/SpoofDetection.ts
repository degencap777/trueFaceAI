import Trueface from "./Trueface";
import TruefaceBase from "./TruefaceBase";

export default class SpoofDetection extends TruefaceBase {
    public readonly endpoint: string = `${Trueface.base}/v1/spdetect`;
    set image(img: string) {
        this.data[`img`] = img;
    }
}
