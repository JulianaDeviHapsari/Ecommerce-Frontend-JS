function formatNumber(value) {
  return new Intl.NumberFormat("id-ID").format(value);
}
function formatRb(number) {
  if (number >= 1e3 && number < 1e6) {
    return (number / 1e3).toFixed(0) + "RB";
  }
  return number.toString();
}

export { formatRb as a, formatNumber as f };
//# sourceMappingURL=number.utils-vPnlR88w.mjs.map
