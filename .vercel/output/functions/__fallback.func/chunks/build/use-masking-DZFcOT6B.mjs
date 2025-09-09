function useMasking() {
  const maskEmail = (email) => {
    if (!email) return "";
    const [username, domain] = email.split("@");
    const [domainName, domainExt] = domain.split(".");
    const maskedUsername = username.slice(0, 2) + "*".repeat(username.length - 2);
    const maskedDomainName = domainName.slice(0, 1) + "*".repeat(domainName.length - 1);
    const maskedDomainExt = domainExt.slice(0, 1) + "*".repeat(domainExt.length - 1);
    return `${maskedUsername}@${maskedDomainName}.${maskedDomainExt}`;
  };
  const maskText = (text, visibleStart = 2, visibleEnd = 1) => {
    if (!text) return "";
    const length = text.length;
    const maskedLength = length - (visibleStart + visibleEnd);
    if (maskedLength <= 0) return text;
    const start = text.slice(0, visibleStart);
    const middle = "*".repeat(maskedLength);
    const end = text.slice(length - visibleEnd);
    return start + middle + end;
  };
  const maskPhone = (phone) => {
    if (!phone) return "";
    return phone.slice(0, 4) + "*".repeat(phone.length - 6) + phone.slice(-2);
  };
  return {
    maskEmail,
    maskText,
    maskPhone
  };
}

export { useMasking as u };
//# sourceMappingURL=use-masking-DZFcOT6B.mjs.map
