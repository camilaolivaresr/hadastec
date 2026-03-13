// hooks/useLazyCalendly.js
import { useState, useRef, useEffect } from 'react';

export default function useLazyCalendly() {
  const [show, setShow] = useState(false);
  const ref = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => 
      e.isIntersecting && setShow(true)
    );
    ref.current && observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, show];
}
