import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <pre>Data will be displayed here</pre>
`;

const socket = new WebSocket("ws://localhost:8080/data");

socket.onmessage = (event) => {
  document.querySelector("#app > pre")!.textContent = event.data;
};

socket.onopen = () => {
  socket.send(
    JSON.stringify([
      { identifier: "MSFT", identifierType: "tickerExchange", maxLevels: 100 },
    ])
  );
};
