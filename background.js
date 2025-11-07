chrome.action.onClicked.addListener(() => {
  const authUrl = "https://github.com/login/oauth/authorize?client_id=CLIENTID&scope=read:user";
  chrome.identity.launchWebAuthFlow(
    { url: authUrl, interactive: true },
    async (redirectUrl) => {
      if (!redirectUrl) {
        console.error("Login cancelado ou erro.");
        return;
      }

      const params = new URL(redirectUrl).searchParams;
      const code = params.get("code");

      // Troca o código pelo token via seu servidor Node
      const resp = await fetch(`https://localhost:3000/callback?code=${code}`);
      const data = await resp.json();
      const token = data.access_token;

      console.log("GitHub token:", token);

      chrome.storage.sync.set({ githubToken: token });
    }
  );
});
