const notifications = createNotificationService();

await notifications.notify("email", {
  recipient: "user@example.com",
  subject: "Order shipped",
  body: "Your order is on its way.",
});

await notifications.notify("sms", {
  recipient: "+910000000000",
  body: "Your order has shipped.",
});