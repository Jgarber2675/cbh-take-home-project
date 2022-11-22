const crypto = require("crypto");

//deterministicPartionKey checks if the inputed event has a partion key, returning it if it has one, or creating a new one if it doesn't.
exports.deterministicPartitionKey = (event) => {

  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = TRIVIAL_PARTITION_KEY;

  if (!event) {
    return candidate
  }

  candidate = event.partitionKey ? event.partitionKey : crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
  
  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }
  
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
};