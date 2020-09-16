import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import HeroPost from '@/components/hero-post'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import BlogBox from '@/components/blog-box'
import { getAllPostsForHome } from '@/lib/api'
import CoverImage from '../components/cover-image'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import { Flex, Stack, Box, Text, Image, Heading, SimpleGrid, IconButton, Button, Link, PseudoBox} from '@chakra-ui/core'

export default function Index({ allPosts, preview }) {
  const heroPost = allPosts[1]
  const morePosts = allPosts.slice(1)
  return (
    <Stack align="center" textAlign="center">
      <Heading fontSize="62px">Blog</Heading>
      {allPosts.map((post, i) => (
        <BlogBox 
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
        slug={post.slug}
        excerpt={post.excerpt}
        key={i}
        />
      ))}
    </Stack>
  )
}

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPostsForHome(preview)) || []
  return {
    props: { allPosts, preview },
  }
}
