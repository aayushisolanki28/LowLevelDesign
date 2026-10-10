import { Video } from "../domain/Video";
import { VideoPublishedObserver } from "../observers/VideoPublishedObserver";

export class VideoEventPublisher{
    private observers : VideoPublishedObserver[] =[]

    subscribe(observer: VideoPublishedObserver) : void{
        this.observers.push(observer)
    }
    unsubscribe(observer: VideoPublishedObserver) : void {
       this.observers = this.observers.filter(
        (item) => item !== observer
       )
    }
    notify(video : Video) : void{
      for (const observer of this.observers) {
      observer.update(video);
    }   
    }
}