import type { InferResponseType } from "hono/client";
import { hc } from "hono/client";
import { useEffect, useState } from "react";

import { AppType } from "../functions/api/[[route]]";
import "./App.css";

function App() {
  const client = hc<AppType>("/");
  const $get = client.api.ping.$get;

  const [data, setData] = useState<InferResponseType<typeof $get>>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await $get({
        query: {
          name: "Pages",
        },
      });
      const responseData = await res.json();
      setData(responseData);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Tokitsudori</h1>
      <p>data: {data?.message}</p>
    </>
  );
}

export default App;
