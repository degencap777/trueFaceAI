import Trueface from "./Trueface";
import TruefaceBase from "./TruefaceBase";

export default class Identify extends TruefaceBase {
    public readonly endpoint: string = `${Trueface.base}/v1/identify`;
    public set image(img: string) {
        this.data[`img`] = img;
    }
    public set collectionId(collectionId: number) {
        this.data[`collection_id`] = collectionId;
    }
}
