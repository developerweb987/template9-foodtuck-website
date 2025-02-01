import { Facebook, Twitter, Instagram, Youtube, PinIcon } from 'lucide-react'
import Link from "next/link"

export default function SocialIcons() {
  const icons = [
    { Icon: Facebook },
    { Icon: Twitter },
    { Icon: Instagram },
    { Icon: Youtube },
    { Icon: PinIcon },
  ]

  return (
    <div className="flex justify-center space-x-3 md:space-x-4">
      {icons.map(({ Icon }, index) => (
        <Link
          key={index}
          href="#"
          className="group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg transition duration-300 hover:bg-[#FF9F0D]"
        >
          <Icon size={20} className="text-black transition duration-300 group-hover:text-black" />
        </Link>
      ))}
    </div>
  )
}
