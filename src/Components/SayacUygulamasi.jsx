import useCounter from "./useCounter";
import "./SayacUygulamasi.css";
function SayacUygulamasi() {
  const [count, arttir, azalt, sifirla] = useCounter(2);
  return (
    <div className="SayacUygulamasi">
      <h1>Sayac Uygulamasi</h1>
      <p>Sayac: {count}</p>
      <button className="arttir" onClick={arttir}>
        Arttır
      </button>
      <button className="azalt" onClick={azalt}>
        Azalt
      </button>
      <button className="sifirla" onClick={sifirla}>
        Sıfırla
      </button>
    </div>
  );
}

export default SayacUygulamasi;
