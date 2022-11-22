const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the partitionKey when input is defined", () => {
    const trivialKey = deterministicPartitionKey({partitionKey:"KEY"});
    expect(trivialKey).toBe("KEY");
  });

  it("Returns a string when partitionKey is not a string", () => {
    const trivialKey = deterministicPartitionKey({partitionKey:3});
    expect(trivialKey).toBe("3");
  });

  it("Returns a newly created hash key if partitionKey is undefined", () => {
    const trivialKey = deterministicPartitionKey({partitionKey:undefined});
    expect(trivialKey).not.toBe("0");
  });

  it("Returns a newly created key if partitionKey length is > 256", () => {
    const longKey = new Array(260).join('1');
    const trivialKey = deterministicPartitionKey({partitionKey:longKey});
    expect(trivialKey.length).toBeLessThanOrEqual(256);
  });

});
