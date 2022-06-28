import { useEffect, useState } from "react";
import WasmWorker from "../worker?worker";

type Message = {
  loaded?: boolean;
  error?: string;
  code?: string;
};

export const useWasmWorker = () => {
  const [worker, setWorker] = useState<Worker | null>(null);
  const [wasmLoaded, setWasmLoaded] = useState(false);
  const [receiveMessage, setReceiveMessage] = useState<string>("");
  const [receiveErrorMessage, setReceiveErrorMessage] = useState<string>("");

  useEffect(() => {
    const _worker = new WasmWorker();

    const handle = (e: MessageEvent<Message>) => {
      if (e.data.loaded) {
        setWasmLoaded(true);
      } else if (e.data.error) {
        setReceiveErrorMessage(e.data.error);
      } else if (e.data.code) {
        setReceiveMessage(e.data.code);
        setReceiveErrorMessage("Success.");
      }
    };

    _worker.addEventListener("message", handle, false);

    setWorker(_worker);

    return () => {
      _worker.removeEventListener("message", handle);
      _worker.terminate();
    };
  }, []);

  return {
    worker: wasmLoaded ? worker : null,
    receiveMessage,
    receiveErrorMessage,
  };
};
