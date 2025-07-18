window.OneSignal = window.OneSignal || [];
OneSignal.push(function () {
  OneSignal.init({
    appId: "YOUR-ONESIGNAL-APP-ID", // Replace with your real app ID
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
        url: "https://your-site-name.vercel.app/notifications.html", // 🔗 Change this to your site
      }
    );
  });
}
