# React + Vite

1. React Hook nedir? Class component’lerdeki hangi ihtiyacı ortadan kaldırır?
   React Hook’lar, fonksiyon bileşenlerinde farklı React özelliklerini kullanmamızı sağlayan yapılardır. React özelliklerini daha basit ve anlaşılır bir şekilde kullanmamıza yardımcı olurlar. Class component’lerde state ve yaşam döngüsü işlemlerini kullanabilmek için class yapısına ihtiyaç duyuluyordu. Hook’lar sayesinde bu işlemleri fonksiyon bileşenlerinde de yapabiliriz. Böylece bu özellikleri kullanmak için class component yazma ihtiyacı ortadan kalkmıştır.
2. En yaygın kullanılan 4 hook’u (useState, useEffect, useRef, useContext) açıklayın ve birer kullanım örneği verin.
   useState değer tutmayı ve değiştirmeyi sağlar. Değet değiştiğinde tekrar render edilmesini sağlar. const [count, setCount] = useState(0);
   useEffeect API'den çekmek gibi yan etkileri yönetmek için kullanılır.
   useEffect(() => fetch('https://jsonplaceholder.typicode.com/users'), []);
   useRef renderlar arasında değer tutamayı sağlar yada DOM'daki bir elemana erişmeyi sağlar. React yeniden render yapmaz. const counterRef = useRef(count);
   useContext bileşenler arasında ortak bir kaynaktan veri paylaşılmasını sağlar. useContext(CounterContext);
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
