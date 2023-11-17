import Link from 'next/link';
export default function Header() {
  return (
    <header className='header'>
      <Link href='/'>Home</Link>
      <Link href='actors'>Actors</Link>
      <Link href='move'>Move</Link>
    </header>
  );
}
