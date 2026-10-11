import { AccountService } from "./notifictaions/AccountService";
import { AcmeMailSDK } from "./notifictaions/adaptors/AcmeMailSDK";
import { AcmeMailAdapter } from "./notifictaions/adaptors/AcmeMailAdapter";

const sdk = new AcmeMailSDK();
const sender = new AcmeMailAdapter(sdk);
const accountService = new AccountService(sender);

await accountService.notifyAccountCreated("user@example.com");