import Link from 'next/link'
import { Image } from "@chakra-ui/core"
export default function CoverImage({ title, url, slug }) {
  const imageUrl = `${
    url.startsWith('/') ? "http://localhost:1337" : ''
  }${url}`
  return (
    <Image src={imageUrl} alt={title} size="300px"/>
  )
}
