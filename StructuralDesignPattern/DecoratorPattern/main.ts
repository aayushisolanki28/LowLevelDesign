import { EmailSender } from "./src/services/EmailSender";
import { LoggingDecorator } from "./src/decorators/LoggingDecorator";
import { EncryptionDecorator } from "./src/decorators/EncryptionDecorator";

const emailSender = new EmailSender()

const encryptSender = new EncryptionDecorator(emailSender)
const sender = new LoggingDecorator(encryptSender)

sender.send("Your verification code is 112132")