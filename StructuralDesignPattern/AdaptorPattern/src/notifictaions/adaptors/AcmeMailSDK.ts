export class AcmeMailSDK {
  async dispatchEmail(input: {
    destination: string;
    content: { text: string };
  }): Promise<{ messageId: string }> {
    console.log(`Sending to ${input.destination}`);

    return { messageId: "msg-123" };
  }
}