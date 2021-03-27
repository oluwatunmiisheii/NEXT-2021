import Link  from 'next/link';
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000);
    console.log('use effect ran')
  }, [])

  return ( 
    <>
      <Head>
        <title>404</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="not-found">
        <h1>Ooooooops...</h1>
        <h2>This page cannot be found</h2>
        <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
      </div>
    </>
  );
}
 
export default NotFound;