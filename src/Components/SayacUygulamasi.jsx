import useCounter from "./useCounter";
function SayacUygulamasi() {
  const [count, arttir, azalt, sifirla] = useCounter(11);
  return (
    <div className="SayacUygulamasi">
      <h1>Sayac Uygulamasi</h1>
      <p>Sayac: {count}</p>
      <button onClick={arttir}>Arttır</button>
      <button onClick={azalt}>Azalt</button>
      <button onClick={sifirla}>Sıfırla</button>
    </div>
  );
}

export default SayacUygulamasi;
