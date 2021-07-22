import { useState } from "react"
import AppLayout from "../components/AppLayout"
import SEO from "../components/SEO"

const MyApp = ({ Component, pageProps }) => {
  const [titlePage, setTitlePage] = useState("")
  const [metaDescription, setMetaDescription] = useState("")
  
  return (
      <AppLayout
        SEOComponente={() => <SEO titlePage={titlePage} description={metaDescription} />}
      >
        <Component {...pageProps} setTitlePage={setTitlePage} setMetaDescription={setMetaDescription} />
      </AppLayout> 
  )
}

export default MyApp
