import Layout from '../layout/HeaderFooter'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout title={Component.name}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
