import Trueface from "./Trueface";

export default abstract class TruefaceBase {
    public abstract endpoint: string;
    protected data: object = Object.create(null);
    public post(): Promise<Response> {
        if (Trueface.key === "") {
            throw new Error("You need to set API key");
        }
        const xheaders = new Headers();
        xheaders.append("Accept", "application/json");
        xheaders.append("Content-Type", "application/json");
        xheaders.append("x-api-key", Trueface.key);
        return fetch(this.endpoint, {
            body: JSON.stringify(this.data),
            headers: xheaders,
            method: "POST",
        });
    }
}
