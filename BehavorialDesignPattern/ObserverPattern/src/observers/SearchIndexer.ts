import { Video } from "../domain/Video";
import { VideoPublishedObserver } from "./VideoPublishedObserver";

export class SearchIndexer implements VideoPublishedObserver{

    update(video: Video): void {
        console.log(`Index video: ${video.id}`)
    }

}