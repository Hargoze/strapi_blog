import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import { Flex, Stack, Box, Text, Image, Heading, SimpleGrid, IconButton, Button, Link, PseudoBox} from '@chakra-ui/core'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <Stack maxW="50%" align="center">
      <Heading>{title}</Heading>
      <CoverImage title={title} url={coverImage.url} />
      <Date dateString={date} />
    </Stack>
  )
}
