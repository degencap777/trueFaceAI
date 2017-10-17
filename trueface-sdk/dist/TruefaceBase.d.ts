export default abstract class TruefaceBase {
    abstract endpoint: string;
    protected data: object;
    post(): Promise<Response>;
}
