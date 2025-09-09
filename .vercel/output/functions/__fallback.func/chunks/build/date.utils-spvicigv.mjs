import { addDays, format } from 'date-fns';

function getEstimate(numberEstimate, options = {}) {
  const { returnObject = false } = options;
  const today = /* @__PURE__ */ new Date();
  const _estimate = (numberEstimate || "").includes("-") ? Number(numberEstimate.split("-")[1]) : Number(numberEstimate) || 0;
  const futureDateStart = addDays(today, _estimate);
  const futureDateEnd = addDays(today, _estimate + 2);
  if (returnObject)
    return {
      start: futureDateStart,
      end: futureDateEnd
    };
  return `${format(futureDateStart, "d")} - ${format(futureDateEnd, "d MMM")}`;
}
function getSecondsFromDate(stringDate) {
  const targetTime = new Date(stringDate);
  const currentTime = /* @__PURE__ */ new Date();
  const differenceInMillis = targetTime - currentTime;
  return Math.floor(differenceInMillis / 1e3);
}

export { getSecondsFromDate as a, getEstimate as g };
//# sourceMappingURL=date.utils-spvicigv.mjs.map
