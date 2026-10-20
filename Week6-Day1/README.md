In the notification system implementation, we used 3 main design patterns/practices, plus a few supporting design principles.
Pattern / Principle	Where it was used	Why
1. Strategy Pattern	EmailChannel, SmsChannel, PushChannel implement NotificationChannel	Allows different notification behaviors to be interchangeable.
2. Factory Pattern	NotificationChannelFactory	Selects the appropriate channel based on the requested type.
3. Dependency Injection (DI)	NotificationService receives NotificationChannelResolver through its constructor	Dependencies are supplied externally instead of being created inside the service.
4. Composition Root (architectural practice)	createNotificationService()	Creates concrete implementations and wires their dependencies together.
5. Dependency Inversion Principle (DIP) (SOLID principle)	NotificationService depends on NotificationChannelResolver, an abstraction	Keeps the service independent of concrete notification implementations.