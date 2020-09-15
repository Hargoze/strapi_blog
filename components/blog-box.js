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
    <Link 
        href={`/posts/${slug}`} 
        bg="gray.100" 
        rounded="lg" 
        overflow="hidden" 
        my="12" 
        w={{base:"75%", lg:"50%"}}
        _hover={{textDecoration:"none", shadow:"lg"}}
    >
        <Stack display={{base:"flex", md:"none"}}>
            <CoverImage title={title} url={coverImage.url} slug={slug} />
            <Box>
                <Heading>{title}</Heading>
                <Text fontSize="25px">{excerpt}</Text>
                <Date dateString={date} />
            </Box>
        </Stack>
        <Flex display={{base:"none", md:"flex"}} justify="space-around">
            <CoverImage title={title} url={coverImage.url} slug={slug} />
            <Box pt="2"  w={{md:"100%", lg:"50%"}}>
                <Stack h="33%" align="center" justify="center">
                   <Heading>{title}</Heading> 
                </Stack>
                <Text fontSize="25px" pt="4">{excerpt}</Text>
                <Date dateString={date} />
            </Box>
        </Flex>
    </Link>
  )
}
