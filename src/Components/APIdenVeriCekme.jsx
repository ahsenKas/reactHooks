import { useState, useEffect } from "react";

function APIdenVeriCekme() {
  const [yukleniyor, setYukleniyor] = useState(true);
  const [kullaniciVerisi, setKullaniciVerisi] = useState(null);
  const [hata, setHata] = useState(null);

  useEffect(() => {
    async function kullanicilariGetir() {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("Veri çekme hatası");
        }

        const data = await response.json();
        setKullaniciVerisi(data);
      } catch (error) {
        setHata(error.message);
      } finally {
        setYukleniyor(false);
      }
    }

    kullanicilariGetir();
  }, []);

  return (
    <div className="APIdenVeriCekme">
      {yukleniyor && <p>Yükleniyor...</p>}

      {hata && <p>Hata: {hata}</p>}
      {kullaniciVerisi && (
        <ul>
          {kullaniciVerisi.map((kullanici) => (
            <li key={kullanici.id}>
              <p>Ad: {kullanici.name}</p>
              <p>E-posta: {kullanici.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default APIdenVeriCekme;
