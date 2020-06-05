import moxios from "moxios";
import { getSecretWord } from "./hooksAction";

describe("Moxios Action Testing", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("Call getSceretWord callback on axios response", async () => {
    const secretWord = "party";
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord
      });
    });

    const mockSetSecretWord = jest.fn();
    await getSecretWord(mockSetSecretWord);

    expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord);
  });
});
