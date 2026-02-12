"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function () {
  const [count, setCount] = useState(0); 

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const inc = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {count}
      <Button onClick={inc}>+</Button>
    </div>
  );
}
