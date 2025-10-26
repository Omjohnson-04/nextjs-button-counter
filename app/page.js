import { Counter } from "components/Counter.js";

export default function Home() {
  return (
    <html>
      <body>
        <div className="home">
          <h1>Counter Project</h1>
        </div>
        <section id="buttons">
          <div className="button">
            <button id="add-button">+ 1</button>
          </div>
          <div className="button">
            <button id="subtract-button">- 1</button>
          </div>
        </section>
      </body>
    </html>
  );
}
