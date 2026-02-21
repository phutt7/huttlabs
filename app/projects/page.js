export default function Projects() {
  return (
    <main>
      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>Projects</h1>

      <div style={{ marginTop: "40px" }}>
        <h2>Smart False Window — Embedded Lighting System</h2>
        <p><strong>Problem:</strong> Simulate natural daylight indoors.</p>
        <p><strong>Constraints:</strong> PWM control, thermal management, enclosure limitations.</p>
        <p><strong>Architecture:</strong> Microcontroller-based PWM lighting system.</p>
        <p><strong>Implementation:</strong> Firmware-controlled timed light transitions with hardware integration.</p>
        <p><strong>Outcome:</strong> Reliable system with stable long-term operation.</p>
      </div>

      <div style={{ marginTop: "50px" }}>
        <h2>Smart Light Alarm System</h2>
        <p><strong>Problem:</strong> Create alarm-synchronized embedded lighting solution.</p>
        <p><strong>Architecture:</strong> Microcontroller + LED hardware + scheduling logic.</p>
        <p><strong>Outcome:</strong> Accurate timed state transitions and stable performance.</p>
      </div>

      <div style={{ marginTop: "50px" }}>
        <h2>5×5 LED Matrix Audio-Reactive Display</h2>
        <p><strong>Problem:</strong> Real-time audio visualization via embedded system.</p>
        <p><strong>Architecture:</strong> Microcontroller + audio input processing + LED matrix control.</p>
        <p><strong>Outcome:</strong> Responsive real-time signal-driven LED display.</p>
      </div>
    </main>
  );
}