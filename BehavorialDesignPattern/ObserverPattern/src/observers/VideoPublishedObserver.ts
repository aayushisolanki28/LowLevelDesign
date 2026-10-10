import { Video } from "../domain/Video";

export interface VideoPublishedObserver{
    update(video : Video) : void;
}