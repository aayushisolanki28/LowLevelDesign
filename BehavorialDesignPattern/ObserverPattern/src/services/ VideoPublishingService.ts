import { Video } from "../domain/Video";
import { VideoEventPublisher } from "../events/VideoEventPublisher";

export class VideoPublishingService{
    constructor(
        private readonly publisher : VideoEventPublisher
    ) {}

    publish(video: Video) : void{
       console.log(`Video published: ${video.title}`);

    this.publisher.notify(video);
    }
}