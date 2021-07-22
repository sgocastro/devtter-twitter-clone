import { useEffect } from 'react'
import Link from 'next/link'

const Index = ({setTitlePage, setMetaDescription}) => {

  useEffect(() => {
    setMetaDescription("Devtter es una red social para developers")
    setTitlePage("La red social para developers")
  }, [])

  return (
    <>
      <h1>Home</h1>    
      <Link href="/timeline">Ir al timeline</Link>
    </>
  )
}

export default Index;
