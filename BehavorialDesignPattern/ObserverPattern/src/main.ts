import { VideoEventPublisher } from "./events/VideoEventPublisher";
import { AnalyticsService } from "./observers/AnalyticsService";
import { NotificationsService } from "./observers/NotificationService";
import { SearchIndexer } from "./observers/SearchIndexer";
import { VideoPublishingService } from "./services/ VideoPublishingService";

const publisher = new VideoEventPublisher()

publisher.subscribe(new AnalyticsService())
publisher.subscribe(new  NotificationsService())
publisher.subscribe(new SearchIndexer())

const videoService = new VideoPublishingService(publisher)

videoService.publish({
    id : 'v101',
    title : 'Observer pattern'
})
