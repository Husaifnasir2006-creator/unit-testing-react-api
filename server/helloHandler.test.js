import { describe, test, expect, vi } from "vitest";
import helloHandler from "./helloHandler.js";

describe("Hello API Handler", () => {
  test("returns hello message", () => {
    const req = {};

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn()
    };

    helloHandler(req, res);

    expect(res.status).toHaveBeenCalledWith(200);

    expect(res.json).toHaveBeenCalledWith({
      message: "Hello from API"
    });
  });
});