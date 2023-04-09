import { useEffect, useState } from 'react'

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('top')

  useEffect(() => {
    let lastScrollY = window.scrollY
    const updateScrollDirection = () => {
      const direction = window.scrollY > lastScrollY ? 'down' : 'up'
      if (
        direction !== scrollDirection &&
        lastScrollY >= 42 &&
        (window.scrollY - lastScrollY > 10 ||
          window.scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction)
      }

      lastScrollY = window.scrollY > 0 ? window.scrollY : 0
      lastScrollY < 42 && setScrollDirection('top')
    }

    window.addEventListener('scroll', updateScrollDirection)

    return () => window.removeEventListener('scroll', updateScrollDirection)
  }, [scrollDirection])

  return scrollDirection
}

export default useScrollDirection
