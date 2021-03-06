import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '@/components/container'
import PostBody from '@/components/post-body'
import PostMarkdown from '@/components/post-markdown'
import MoreStories from '@/components/more-stories'
import Header from '@/components/header'
import PostHeader from '@/components/post-header'
import SectionSeparator from '@/components/section-separator'
import Layout from '@/components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '@/lib/api'
import PostTitle from '@/components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import markdownToHtml from '@/lib/markdownToHtml'
import BlogBox from '@/components/blog-box'
import { Flex, Stack, Box, Text, Image, Heading, Spinner, SimpleGrid, IconButton, Button, Link, PseudoBox} from '@chakra-ui/core'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Stack align="center" textAlign="center" w="100%">
      {router.isFallback ? (
        <Box>
          <Heading>Loading…</Heading>
          <Spinner color="primary.500" />
        </Box>
      ) : (
      <Stack align="center" textAlign="center" w="100%">
        <Head>
          <title>{post.title}</title>
        </Head>
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
        />
        <Stack w={{base:"85%", md:"75%", lg:"40%"}} textAlign="start">
        <PostMarkdown content={post.content} />
        </Stack>
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Stack>
      )}
    </Stack>  
  )
}

export async function getStaticProps({ params, preview = null }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  const content = (data?.posts[0]?.content || '')

  return {
    props: {
      preview,
      post: {
        ...data?.posts[0],
        content,
      },
      morePosts: data?.morePosts,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map((post) => `/posts/${post.slug}`) || [],
    fallback: true,
  }
}
