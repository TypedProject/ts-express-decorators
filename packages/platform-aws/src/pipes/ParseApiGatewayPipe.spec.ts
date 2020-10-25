import {expect} from "chai";
import {ParseApiGatewayPipe} from "./ParseApiGatewayPipe";

describe("ParseApiGatewayPipe", () => {
  it("should parse json", () => {
    const pipe = new ParseApiGatewayPipe();

    expect(pipe.transform(encodeURIComponent(JSON.stringify({event: "event"})))).to.deep.eq({
      event: "event"
    });
  });
});
