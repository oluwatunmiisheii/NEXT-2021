import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return ( 
    <nav>
      <div className="logo">
        <Image width={128} height={77} src="/logo.png" />
      </div>
      <Link href="/"><a href="">Home</a></Link>
      <Link href="/about"><a href="">About</a></Link>
      <Link href="/ninjas"><a href="">Ninja Listing</a></Link>
      <Link href="/photos"><a href="">Photos</a></Link>
    </nav>
  );
}
 
export default Navbar;