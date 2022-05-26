import Editor, { OnChange } from "@monaco-editor/react";
import "modern-css-reset/dist/reset.min.css";
import Prism from "prismjs";
import { useEffect } from "react";
import styles from "./App.module.css";
import { useWasmWorker } from "./hooks/useWasmWorker";
import "./prismjs/prismjs";

const EDITOR_DEFAULT_VALUE = `.foo {
  background-color: blue;
}
@media (min-width: 1200px) {
  input {
    font-size: 5rem;
  }
  .foo {
    font-size: 5rem;
    color: red;
  }
  .bar {
    font-size: 10rem;
  }
}
@font-face {
  font-family: "Roboto";
  src: url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
}

@keyframes slidein {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
`;
const GITHUB_URL = "https://github.com/activeguild/css-to-vanilla-extract";

function App() {
  const { worker, receiveMessage, receiveErrorMessage } = useWasmWorker();

  const handleChange: OnChange = (value) => {
    worker?.postMessage(value || "");
  };

  useEffect(() => {
    worker?.postMessage(EDITOR_DEFAULT_VALUE);
    setTimeout(() => {
      Prism.highlightAll();
    }, 100);
  }, [worker]);

  return (
    <div className="App">
      <header className={styles.header}>
        <p className={styles.headerInnder}>
          <span>
            <strong>CSS to vanilla-extract</strong>
          </span>
          <a href={GITHUB_URL} className={styles.headerIcon} target="_blank">
            <strong>View on GitHub</strong>
            <img height={28} width={28} src="github.png" alt="github" />
          </a>
        </p>
      </header>
      <div className={styles.container}>
        <div className={styles.containerItem}>
          <Editor
            height="80vh"
            defaultLanguage="scss"
            defaultValue={EDITOR_DEFAULT_VALUE}
            onChange={handleChange}
            theme="vs-dark"
            options={{ minimap: { enabled: false }, fontSize: 16 }}
          />
        </div>
        <div className={styles.containerItem}>
          <pre className="language-typescript">
            <code
              dangerouslySetInnerHTML={{
                __html: Prism.highlight(
                  receiveMessage,
                  Prism.languages.typescript,
                  "typescript"
                ),
              }}
            ></code>
          </pre>
        </div>
        <div className={styles.error}> {receiveErrorMessage} </div>
      </div>
    </div>
  );
}

export default App;
