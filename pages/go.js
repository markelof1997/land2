export default function Go() {
  if (typeof window !== "undefined") {
    // редирект на Telegram через 1 секунду
    setTimeout(() => {
      window.location.href = "https://t.me/theultimatee";
    }, 1000);
  }
  return (
    <div style={{
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      height: "100vh", textAlign: "center", fontFamily: "sans-serif"
    }}>
      <div style={{
        width: "40px", height: "40px",
        border: "4px solid #ccc",
        borderTopColor: "#0088cc",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
        marginBottom: "20px"
      }} />
      <h2>Переходим в Telegram...</h2>
      <p>
        Если не открылось — <a href="https://t.me/theultimatee">нажмите сюда</a>
      </p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
