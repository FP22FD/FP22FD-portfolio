import { useEffect } from 'react';

declare global {
  interface Window {
    hj: (...args: any[]) => void;
    _hjSettings: {
      hjid: number;
      hjsv: number;
    };
  }
}

const Hotjar = () => {
  useEffect(() => {
    (function (h: any, o: any, t: any, j: any, a?: any, r?: any) {
      h.hj =
        h.hj ||
        function (...args: any[]) {
          (h.hj.q = h.hj.q || []).push(args);
        };
      h._hjSettings = { hjid: 5259025, hjsv: 6 };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script');
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
  }, []);

  return null;
};

export default Hotjar;
