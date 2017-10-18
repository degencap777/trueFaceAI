export abstract class MatchProps {
    public height?: string = "640";
    public width?: string = "480";
    public onPhotoTaken: (photo: string) => void;
    public className?: string;
}
