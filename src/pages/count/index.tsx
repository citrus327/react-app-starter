import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      type="button"
      onClick={() => {
        setCount(count + 1);
      }}
    >
      count: {count}
    </button>
  );
};

export { Count };
