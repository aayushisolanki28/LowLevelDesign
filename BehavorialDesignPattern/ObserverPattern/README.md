                  Main.ts
                     |
                     ↓
           VideoEventPublisher
                     |
          ┌──────────┼──────────┐
          ↓          ↓          ↓
     subscribe() unsubscribe() notify()
          |          |          |
          ↓          ↓          ↓
   AnalyticsService SearchIndexer NotificationService
          |          |          |
          └──────────┼──────────┘
                     ↑
                  notify()
                     |
                     |
          VideoPublishingService
                     |
                     ↓
                publish(video)


How the components work
- VideoPublishedObserver.ts — defines the common contract: update(video).
- VideoEventPublisher.ts — maintains subscribers and notifies them when a video is published.
- AnalyticsService, SearchIndexer, NotificationService — independent observers that react to the event differently.
- VideoPublishingService.ts — handles publishing and asks the publisher to notify observers.
- Main.ts — creates the objects, registers observers, and injects the publisher.
Key idea: VideoPublishingService doesn't need to know which observers exist. You can add a new observer, such as AuditLogService.ts, by implementing the observer interface and registering it in Main.ts.