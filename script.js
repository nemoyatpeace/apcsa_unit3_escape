* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body {
  min-height: 100vh;
  background-color: #0b1020;
  color: #f5f5f5;
  display: flex;
  flex-direction: column;
}

header,
footer {
  text-align: center;
  padding: 1rem;
  background-color: #141a33;
}

header h1 {
  font-size: 2rem;
  letter-spacing: 0.08em;
}

header h2 {
  font-size: 1.1rem;
  margin-top: 0.25rem;
  color: #a5c9ff;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
}

.intro {
  max-width: 700px;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
}

.start button {
  padding: 0.75rem 1.75rem;
  font-size: 1rem;
  border-radius: 999px;
  border: 2px solid #a5c9ff;
  background-color: #1e2644;
  color: #f5f5f5;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.start button:hover {
  background-color: #2a3560;
  transform: translateY(-1px);
}

.start button:active {
  transform: translateY(1px);
}
