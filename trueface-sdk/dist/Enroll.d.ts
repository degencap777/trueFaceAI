import TruefaceBase from "./TruefaceBase";
export default class Enroll extends TruefaceBase {
    readonly endpoint: string;
    private length;
    name: string;
    collectionId: string;
    add(image: string): void;
    readonly size: number;
}
