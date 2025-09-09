import { ref, computed } from 'vue';

const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
function useCountdown() {
  let intervalId = null;
  const seconds = ref(0);
  const padNumber = (num) => {
    return num.toString().padStart(2, "0");
  };
  const displayValue = computed(() => {
    const totalSeconds = seconds.value;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds % 3600 / 60);
    const remainingSeconds = totalSeconds % 60;
    if (totalSeconds < 60) {
      return `${padNumber(remainingSeconds)}`;
    }
    if (hours > 0) {
      return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(
        remainingSeconds
      )}`;
    }
    return `${padNumber(minutes)}:${padNumber(remainingSeconds)}`;
  });
  const isRunning = computed(() => seconds.value > 0);
  const startCountdown = (totalSeconds, callback) => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    seconds.value = totalSeconds;
    intervalId = setInterval();
  };
  const stopCountdown = () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };
  const resetCountdown = () => {
    stopCountdown();
    seconds.value = 0;
  };
  return {
    displayValue,
    isRunning,
    seconds,
    startCountdown,
    stopCountdown,
    resetCountdown
  };
}

export { useCountdown as u };
//# sourceMappingURL=use-countdown-D549dIvo.mjs.map
