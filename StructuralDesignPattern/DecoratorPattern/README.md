                   Main.ts
                      |
                      ↓
             LoggingDecorator
                      |
                      ↓
           EncryptionDecorator
                      |
                      ↓
               NotificationSender
                      |
                      ↓
                 EmailSender
                      |
                      ↓
                Send notification


            Application
            Calls sender.send(message)

            LoggingDecorator
            Prints "Sending notification..."

            EncryptionDecorator
            Transforms the message in this demo

            EmailSender
            Performs the final send operation