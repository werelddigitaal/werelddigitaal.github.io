import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <div className="w-8 h-8 relative">
        <Image src="https://werelddigitaal.nl/WereldDigitaal%20Tr-03.png" alt="Logo" layout="fill" objectFit="contain" />
      </div>
    </Link>
  )
}
