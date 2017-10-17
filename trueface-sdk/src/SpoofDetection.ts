import Trueface from './Trueface'
import TruefaceBase from './TruefaceBase'

export default class SpoofDetection extends TruefaceBase {
    readonly endpoint: string = `${Trueface.base}/v1/spdetect`;
    constructor(img: string) {
        super();
        this.data[`img`] = img;
    }
}