import PostPreview from './post-preview'
import BlogBox from '@/components/blog-box'
import { Flex, Stack } from "@chakra-ui/core"

export default function MoreStories({ posts }) {
  return (
    <Stack w="100%" align="center" justify="space-around">
      {posts.map((post, i) => (
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
