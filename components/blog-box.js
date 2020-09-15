import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import { Flex, Stack, Box, Text, Image, Heading, SimpleGrid, IconButton, Button, Link, PseudoBox} from '@chakra-ui/core'

export default function BlogBox({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <Link href={`/posts/${slug}`} bg="gray.100" rounded="lg" overflow="hidden">
        <Stack display={{base:"flex", lg:"none"}}>
            <CoverImage title={title} url={coverImage.url} slug={slug} />
            <Box>
                <Text>{title}</Text>
                <Text>{excerpt}</Text>
            </Box>
        </Stack>
        <Flex display={{base:"none", lg:"flex"}}>
            <CoverImage title={title} url={coverImage.url} slug={slug} />
            <Box>
                <Text>{title}</Text>
                <Text>{excerpt}</Text>
            </Box>
        </Flex>
    </Link>
  )
}
