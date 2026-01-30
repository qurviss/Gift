body {
  margin: 0;
  height: 100vh;
  background: radial-gradient(circle at top, #06061a, #000);
  display: flex;
  justify-content: center;
  align-items: center;
}

.flower {
  width: 320px;
}

path {
  fill: none;
  stroke: #ff2fcf;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 600;
  stroke-dashoffset: 600;
  filter: drop-shadow(0 0 6px #ff2fcf)
          drop-shadow(0 0 16px #ff2fcf);
}

.center {
  fill: #ffd166;
  opacity: 0;
  filter: drop-shadow(0 0 12px #ffd166);
  transition: opacity 0.6s ease;
}

.name {
  fill: #00f5ff;
  font-size: 18px;
  letter-spacing: 3px;
  opacity: 0;
  filter: drop-shadow(0 0 10px #00f5ff)
          drop-shadow(0 0 24px #00f5ff);
  transition: opacity 1.2s ease;
}
