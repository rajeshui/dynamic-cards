import './App.css'
import { useEffect, useState } from 'react'

export default function App() {
  useEffect(() => {
    window.addEventListener("resize", throttle(resizeEffects, 3000));

    return(() => {
      window.removeEventListener('resize', ()=> {});
    })
  }, []);
  
  const [count, setCount] = useState(0);

  const resizeEffects = () => {
    setCount(count => count + 1);
  }

  const throttle = (fn, delay) => {
    let wait = false;
    return (...args) => {
      if(wait){
        return;
      }
      wait = true;
      setTimeout(() => {
        fn(...args);
        wait = false;
      }, delay)
    }
  }
  
  return (
    <main>
      <form onSubmit={() => {}}>
        <input type='number' onChange={(e) => {setCount(e.target.valueAsNumber)}} value={count}/>
        <button type='submit'>Submit</button>
      </form>
      
      <div className="boxContent">
        {count > 0 &&
          Array(count).fill(null).map((c, i) => {
             return <div key={i+'_box'} className="box"></div>
          })
        }
      </div>
      
    </main>
  )
}