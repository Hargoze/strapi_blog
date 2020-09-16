import Link from 'next/link'
import { Image } from "@chakra-ui/core"
export default function CoverImage({ title, url, slug, size }) {
  const imageUrl = `${
    url.startsWith('/') ? "http://localhost:1337" : ''
  }${url}`
  return (
    <Image src={imageUrl} alt={title} size={size}/>
  )
}
