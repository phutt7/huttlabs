export default function Projects() {
  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>Projects</h1>

      <div style={{ marginTop: "30px" }}>
        <h2>Smart False Window</h2>
        <p><strong>Problem:</strong> Simulate natural daylight indoors.</p>
        <p><strong>Architecture:</strong> Microcontroller-based PWM lighting system.</p>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2>Smart Light Alarm System</h2>
        <p><strong>Problem:</strong> Alarm-synchronized embedded lighting solution.</p>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2>5×5 LED Matrix Audio-Reactive Display</h2>
        <p><strong>Problem:</strong> Real-time audio visualization via microcontroller.</p>
      </div>
    </main>
  );
}