window.OneSignal = window.OneSignal || [];
OneSignal.push(function () {
  OneSignal.init({
    appId: "b5c066e1-250c-4ea1-89f8-9baa22dc401c", // Replace with your real app ID
    notifyButton: {
      enable: true,
    },
    allowLocalhostAsSecureOrigin: true, // optional for testing
  });
});

function sendTestNotification() {
  OneSignal.push(function () {
    OneSignal.sendSelfNotification(
      "✅ Demo Notification Title",
      {
        body: "Click to open your website!",
        icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        url: "https://mdyahhya.github.io/my-onesignal-demo/", // 🔗 Change this to your site
      }
    );
  });
}
