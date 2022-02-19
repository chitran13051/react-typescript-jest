import  { useEffect, useState} from 'react'

const StickyButton = () => {
 
  const [top, setTop] = useState(0)


  const handleScroll = () => {
     
    console.log('window scroll', window.scrollY)
    setTop(window.scrollY)
   }


  useEffect( () => {
     window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  
  
  }, [])


  return (
      <div
          style={{
        height: '50px',
        background: 'red',
        width: '100%',
        position: 'absolute',
        top: `calc(90vh)`,
        transform: `translateY(${top}px)`
            
       }}
      
      >StickyButton</div>
  )
}

export default StickyButton