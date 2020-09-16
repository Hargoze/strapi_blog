import ReactMarkdown from "react-markdown/with-html";
import markdownStyles from './markdown-styles.module.css'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Image, Stack, Box } from "@chakra-ui/core"

const CodeBlock = ({ language, value }) => {
  return (
    <Box overflow="scroll">
      <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>
    </Box>
  );
};

const MarkdownImage = ({ alt, src }) => {
    const imageUrl = `${
      src.startsWith('/') ? "http://localhost:1337" : ''
    }${src}`
    console.log("img url:", imageUrl)
    return (
    <Stack align="center">
        <Image alt={alt} src={imageUrl}/>
    </Stack>
  );
}

export default function PostMarkdown({ content }) {
  return (
    <ReactMarkdown
    className={markdownStyles['markdown']}
      escapeHtml={false}
      source={content}
      renderers={{ code: CodeBlock, image: MarkdownImage }}
    />
  );
}
