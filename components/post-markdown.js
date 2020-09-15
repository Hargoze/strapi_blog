import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Image } from "@chakra-ui/core"

const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

const MarkdownImage = ({ alt, src }) => (
  <Image
    alt={alt}
    src={src}
    className="w-full"
  />
);

export default function PostMarkdown({ content }) {
  return (
    <ReactMarkdown
      className="mb-4 prose-sm prose sm:prose lg:prose-lg"
      escapeHtml={false}
      source={content}
      renderers={{ code: CodeBlock, image: MarkdownImage }}
    />
  );
}
