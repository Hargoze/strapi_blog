import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import { Flex, Stack, Box, Text, Image, Heading, SimpleGrid, IconButton, Button, Link, PseudoBox} from '@chakra-ui/core'
import { FaTwitter, FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa"

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <Stack w={{base:"100%", lg:"50%"}} align="center">
      <Flex align="center" justify="space-between" w="100%">
        <Link href="/">
          <Image src="http://localhost:1337/uploads/large_Logo_e941598920.svg"  alt="acert logo"/>
        </Link>
        <Flex spacing={12}>
          <Link href="https://www.linkedin.com" >
            <Box as={FaLinkedin} size={{base:"22px", md:"33px", lg:"44px"}} mx={{xs:"1", lg:"3"}}/>
          </Link>
          <Link href="https://www.github.com">
            <Box as={FaGithub} size={{base:"22px", md:"33px", lg:"44px"}} mx={{xs:"1", lg:"3"}}/>
          </Link>
          <Link href="https://www.twitter.com">
            <Box as={FaTwitter} size={{base:"22px", md:"33px", lg:"44px"}} mx={{xs:"1", lg:"3"}}/>
          </Link>
        </Flex>
      </Flex>
      <Box maxWidth="50%">
        <Heading py="8" fontSize="42px">{title}</Heading>
      </Box>
      <CoverImage title={title} url={coverImage.url}/>
      <Date dateString={date} />
    </Stack>
  )
}
