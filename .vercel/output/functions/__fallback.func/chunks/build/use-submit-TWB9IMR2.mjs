import { ref } from 'vue';
import { u as useApi } from './use-api-DLZ2CTc2.mjs';

function useSubmit(request, options) {
  const payload = ref();
  const { execute: submit, ...others } = useApi(request, {
    method: "POST",
    immediate: false,
    watch: false,
    body: payload,
    ...options
  });
  function execute(newPayload) {
    payload.value = newPayload;
    return submit();
  }
  return { ...others, execute };
}

export { useSubmit as u };
//# sourceMappingURL=use-submit-TWB9IMR2.mjs.map
