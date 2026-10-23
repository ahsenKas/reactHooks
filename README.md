# React + Vite

1. React Hook nedir? Class component’lerdeki hangi ihtiyacı ortadan kaldırır?
   React Hook’lar, fonksiyon bileşenlerinde farklı React özelliklerini kullanmamızı sağlayan yapılardır. React özelliklerini daha basit ve anlaşılır bir şekilde kullanmamıza yardımcı olurlar. Class component’lerde state ve yaşam döngüsü işlemlerini kullanabilmek için class yapısına ihtiyaç duyuluyordu. Hook’lar sayesinde bu işlemleri fonksiyon bileşenlerinde de yapabiliriz. Böylece bu özellikleri kullanmak için class component yazma ihtiyacı ortadan kalkmıştır.
2. En yaygın kullanılan 4 hook’u (useState, useEffect, useRef, useContext) açıklayın ve birer kullanım örneği verin.
   useState: Değer tutmayı ve değiştirmeyi sağlar. Değer değiştiğinde bileşenin tekrar render edilmesini sağlar.
   const [count, setCount] = useState(0);
   useEffect: API'den veri çekmek gibi yan etkileri yönetmek için kullanılır.
   useEffect(() => {
   fetch("https://jsonplaceholder.typicode.com/users")
   .then((response) => response.json())
   .then((data) => console.log(data));
   }, []);
   useRef: Renderlar arasında değer tutmayı veya DOM'daki bir elemana erişmeyi sağlar. Değer değiştiğinde tek başına yeniden render oluşturmaz.
   const paragrafRef = useRef(null);
   <p ref={paragrafRef}>Merhaba</p>
   paragrafRef.current.style.color = "red";
   useContext: Bileşenler arasında ortak bir kaynaktan veri paylaşılmasını sağlar.
   const tema = useContext(TemaContext);

3. Custom Hook nedir? Neden ve ne zaman kullanılır?
   Farklı componentlerde tekrar kullanılabilen özel bir fonksiyondur. Örneğin useCounter. Aynı kodları tekrar yazmamak ve birden fazla component aynı işlemlere ihtiyaç duyduğunda kullanılır.
4. useEffect içinde dependency array ([]) ne işe yarar?
   useEffect fonksiyonunun ne zaman çalışacağını belirler. Boş bırakılırsa component ilk kez ekrana geldiğinde çalışır. Örneğin useEffect(() => fetch('https://jsonplaceholder.typicode.com/users'), []);
5. useRef hook’u ile DOM manipülasyonu nasıl yapılır?
   pRef.current.style.color = 'red'; // DOM'deki elemanın rengini değiştirir.
   .
   This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
