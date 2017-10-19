import TruefaceBase from "./TruefaceBase";
export default class FaceDetection extends TruefaceBase {
    endpoint: string;
    private rawlandmarks;
    image: string;
    post(): Promise<Response>;
}
