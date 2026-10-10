import { Video } from "../domain/Video";
import { VideoPublishedObserver } from "./VideoPublishedObserver";

export class NotificationsService implements VideoPublishedObserver{

    update(video: Video): void {
        console.log(`Followers notified about: ${video.id}`)
    }

}