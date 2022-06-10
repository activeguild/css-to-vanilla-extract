import { useEffect, useState } from "react";
import WasmWorker from "../worker?worker";

export const useWasmWorker = () => {
  const [worker, setWorker] = useState<Worker | null>(null);
  const [wasmLoaded, setWasmLoaded] = useState(false);
  const [receiveMessage, setReceiveMessage] = useState<string>("");
  const [receiveErrorMessage, setReceiveErrorMessage] = useState<string>("");

  useEffect(() => {
    const worker = new WasmWorker();

    worker.addEventListener(
      "message",
      (e) => {
        if ("loaded" in e.data) {
          setWasmLoaded(true);
        } else if ("error" in e.data) {
          setReceiveErrorMessage(e.data.error);
        } else {
          setReceiveMessage(
            e.data.code
          );
          setReceiveErrorMessage("Success.");
        }
      },
      false
    );

    setWorker(worker);
    return () => worker.terminate();
  }, []);
  return {
    worker: wasmLoaded ? worker : null,
    receiveMessage,
    receiveErrorMessage,
  };
};
