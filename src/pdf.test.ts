import { describe, expect, test } from "@jest/globals";

import fs from "fs";

const path = process.cwd() + "/result.pdf";

describe("pdf test", () => {
  test("check if pdf is generated correctly", async () => {
    const status = fs.existsSync(path);

    await new Promise((f) => setTimeout(f, 5000));

    expect(status).toBe(true);
  }, 30000);
});
