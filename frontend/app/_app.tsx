// import AOS from 
// import { useEffect } from 'react';
// import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }: {
  Component: React.ComponentType;
  pageProps: any;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return <Component {...pageProps} />;
}

// export default function MyApp({ Component, pageProps }: {
//   Component: React.ComponentType;
//   pageProps: any;
// }) {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   return <Component {...pageProps} />;
// }
