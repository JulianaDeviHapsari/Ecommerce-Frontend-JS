export default defineNuxtPlugin(async () => {
  const token = useCookie("access_token");
  const session = useSession();

  if (token.value) {
    try {
      // ✅ Dummy profile tanpa API
      const dummyProfile = {
        id: 1,
        name: "Demo User",
        email: "demo@example.com",
      };

      session.token = token.value;
      session.profile = dummyProfile;
    } catch {
      session.token = "";
      token.value = undefined;
    }
  }
});
