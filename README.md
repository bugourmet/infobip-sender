<h1> Infobip Sender </h1>

Simple Infobip outbound messaging library written in typescript

[![GitHub stars](https://img.shields.io/github/stars/runtimeterrorist/infobip-sender.svg)](https://github.com/runtimeterrorist/infobip-sender/stargazers)
[![GitHub license](https://img.shields.io/github/license/runtimeterrorist/infobip-sender.svg)](https://github.com/runtimeterrorist/infobip-sender/blob/master/LICENSE)
[![GitHub forks](https://img.shields.io/github/forks/runtimeterrorist/infobip-sender.svg)](https://github.com/runtimeterrorist/infobip-sender/network/members)
[![GitHub issues](https://img.shields.io/github/issues/runtimeterrorist/infobip-sender.svg)](https://github.com/runtimeterrorist/infobip-sender/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/runtimeterrorist/infobip-sender.svg)](https://github.com/runtimeterrorist/infobip-sender/pulls)
[![GitHub last commit](https://img.shields.io/github/last-commit/runtimeterrorist/infobip-sender.svg)](https://github.com/runtimeterrorist/infobip-sender/commits/master)

<h3>Features 🚀</h3>

<li>Supports sending all message types for SMS,WhatsApp and Viber channel.</li>
<li>Supports fetching purchased numbers for account and WhatsApp Templates for specified number with the capability.</li>

<h3>Usage 💡</h3>

install the package

`npm install infobip-sender`

Example:

```ts
import { InfobipMessageService } from "infobip-sender";
const config = { apiKey: "YourApiKey" };
// Create an instance with your configuration
const messagingService = new InfobipMessageService(config);

//use sendSms() method to s end a single or bulk sms message
const smsMessage = await messagingService.sms.sendSMS(
  "YourSenderNumberHere",
  "RecipientPhoneNumber",
  "Message"
);

const bulkSmsMessages = await messagingService.sms.sendSMS(
  "YourSenderNumberHere",
  ["RecipientPhoneNumber1", "RecipientPhoneNumber2"],
  "Message"
);
```

...

<h5>Messaging Service Configuration</h5>

```ts
{
    apiKey: string;
    piIntegrator?: string;
    piPlatform?: string;
    baseUrl?: string;
    notifyUrl?: string;
}
```

⚠️ <b>IMPORTANT NOTE:</b> The library does not include built-in logging nor error-handling mechanisms,responsibility for implementing such features remains on the end user.

For more info refer to <a href="https://www.infobip.com/docs/api">Infobip API Documentation</a>

<h3>TODO ✔️</h3>
<li> implement Infobip Messaging API once it's out of Early Access</li>
<li> tests & improvements</li>
<li> add VOICE and RCS channels</li>

<h3>Contributing 🤝</h3>
Pull requests are welcome. If you have a suggestion open an issue with the tag "enhancement".

<h3>License 📝</h3>

MIT
