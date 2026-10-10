import { Video } from "../domain/Video";
import { VideoPublishedObserver } from "./VideoPublishedObserver";

export class AnalyticsService implements VideoPublishedObserver{

    update(video: Video): void {
        console.log(`Analytics record for video: ${video.id}`)
    }

}