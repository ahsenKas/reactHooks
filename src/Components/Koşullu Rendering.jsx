import { useState } from "react";
function KoşulluRendering() {
  const [girisYapildi, setGirisYapildi] = useState(false);

  const isim = "Ahsen";
  return (
    <div className="KoşulluRendering">
      <h1>Koşullu Rendering</h1>
      <p>{girisYapildi ? "Hoş geldin, " + isim : "Lütfen giriş yapın"}</p>
      <button onClick={() => setGirisYapildi(!girisYapildi)}>
        {girisYapildi ? "Çıkış Yap" : "Giriş Yap"}
      </button>
    </div>
  );
}

export default KoşulluRendering;
