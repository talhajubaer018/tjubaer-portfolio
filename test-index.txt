import { useEffect, useRef } from "react"


export default function Home() {
  const first = useRef(null)
  const second = useRef(null)
  const third = useRef(null)

  const timer = null

  const desAnim = () => {
    timer = setTimeout(desAnim, 3500);
    if(first.current.classList.contains('is-visible')) {
      first.current.classList.remove('is-visible')
      second.current.classList.add('is-visible')
    }
    else if (second.current.classList.contains('is-visible')) {
      second.current.classList.remove('is-visible')
      third.current.classList.add('is-visible')
    }
    else if (third.current.classList.contains('is-visible')) {
      third.current.classList.remove('is-visible')
      first.current.classList.add('is-visible')
    }
    else {
      first.current.classList.add('is-visible')
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('timer', JSON.stringify(timer))
    }
  }



  useEffect (() => {
      desAnim()
  }, [])

  return (
    <div className="relative w-full h-full bg-container flex items-center text-white">
      <div className="flex flex-col w-full text-center items-center pb-20">
        <h1 className="playfair font-bold">TALHA JUBAER</h1>
        <div className="flex w-full justify-center">
          <h3 className="mr-2">I am a</h3>
          <div className="relative">
            <div className="opacity-0 font-bold text-xl">Web Developer</div>
            <div className="w-screen text-left absolute top-0 left-0">
              <h3 ref={first} className='designation'>Web Developer</h3>
              <h3 ref={second} className='designation'>Freelancer</h3>
              <h3 ref={third} className='designation'>UI/UX Designer</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
