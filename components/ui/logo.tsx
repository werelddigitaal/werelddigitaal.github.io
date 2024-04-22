import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <img src="https://werelddigitaal.nl/WereldDigitaal%20Tr-03.png" alt="Logo" className="w-8 h-8" />
    </Link>
  )
}
