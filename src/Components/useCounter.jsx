import { useState } from "react";
function useCounter(baslangicDegeri) {
  const [count, setCount] = useState(baslangicDegeri);

  function arttir() {
    setCount(count + 1);
  }

  function azalt() {
    if (count <= 0) {
    } else {
      setCount(count - 1);
    }
  }

  function sifirla() {
    setCount(0);
  }
  return [count, arttir, azalt, sifirla];
}

export default useCounter;
