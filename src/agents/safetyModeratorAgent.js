const riskyPatterns = [
  /\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b/,
  /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i,
  /\b(address|home address|phone number|password|where i live)\b/i
];

export function moderateChildMessage(message) {
  const hasRisk = riskyPatterns.some((pattern) => pattern.test(message));

  if (hasRisk) {
    return {
      status: "blocked",
      reason: "Message may include personal information or unsafe sharing.",
      parentVisible: true
    };
  }

  return {
    status: "allowed",
    parentVisible: true
  };
}

