import type { InferResponseType } from "hono/client";
import { hc } from "hono/client";
import { useEffect, useState } from "react";

import { AppType } from "@/../functions/api/[[route]]";

function UserCount() {
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
      <p>data: {data?.message}</p>
    </>
  );
}

export default UserCount;
