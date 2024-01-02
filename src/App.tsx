import { useState } from "react";
import { FC } from "react";

const App: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        type="button"
        className="button primary"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </div>
  );
};

export default App;
