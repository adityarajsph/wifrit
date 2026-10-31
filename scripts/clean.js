const fs = require("fs");
const path = require("path");

const nextDir = path.join(__dirname, "..", ".next");

if (fs.existsSync(nextDir)) {
  try {
    fs.rmSync(nextDir, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
  } catch (err) {
    // If locked by another active process, ignore and continue
  }
}
