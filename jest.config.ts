import type { Config } from "jest";

const customJestConfig: Config = {
  verbose: true,
  testEnvironment: "node",
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.tsx?$": "esbuild-jest",
  },
};

export default customJestConfig;
