
import { useState, memo, useEffect, useRef, useMemo } from 'react';


function Home() {
  const [counter, setCounter] = useState<number>(0);

  function handleClick() {
    setCounter((prev) => prev + 1);
  }

  useEffect(() => {
    function addMouseEvent() {
      console.log(counter);
    }

    window.addEventListener('click', addMouseEvent);

    // 언마운트하고 리렌더링
    return () => {
      console.log('클린업 함수 실행!', counter)
      window.removeEventListener('click', addMouseEvent);
    }
  }, [counter])

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleClick}>+</button>
    </>
  );
}




export default Home;