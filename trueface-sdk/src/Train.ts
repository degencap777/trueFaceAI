import Trueface from "./Trueface";
import TruefaceBase from "./TruefaceBase";

export default class Train extends TruefaceBase {
    public readonly endpoint: string = `${Trueface.base}/v1/train`;
    public set collectionId(collectionId: string) {
        this.data[`collection_id`] = collectionId;
    }
}
