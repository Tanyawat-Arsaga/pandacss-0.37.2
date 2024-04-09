import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkTextr from "remark-textr";
import { Divider, Stack, styled } from "styled-system/jsx";
import { Code } from "../ui/code";
import { Heading } from "../ui/heading";
import { Link } from "../ui/link";
import * as Table from "../ui/table";
import { Text } from "../ui/text";

export const Markdown = ({
  content,
  assetsPrefix,
}: {
  content: string;
  assetsPrefix?: string;
}) => {
  return (
    <Stack>
      <ReactMarkdown
        remarkPlugins={[remarkTextr, remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <Heading as="h1" size="3xl" fontWeight="bold" {...props} />
          ),
          h2: ({ node, ...props }) => <Heading as="h2" size="3xl" {...props} />,
          h3: ({ node, ...props }) => (
            <Heading as="h3" size="2xl" fontWeight="bold" {...props} />
          ),
          h4: ({ node, ...props }) => <Heading as="h4" size="2xl" {...props} />,
          h5: ({ node, ...props }) => (
            <Heading as="h5" size="xl" fontWeight="bold" {...props} />
          ),
          h6: ({ node, ...props }) => <Heading as="h6" size="xl" {...props} />,
          p: ({ node, ...props }) => <Text as="p" {...props} />,
          strong: ({ ref, node, ...props }) => (
            <Text as="span" fontWeight="bold" {...props} />
          ),
          a: ({ ref, node, ...props }) => <Link {...props} />,
          hr: ({ ref, node, ...props }) => <Divider {...props} />,
          blockquote: ({ ref, node, ...props }) => (
            <styled.blockquote
              borderLeftWidth="4px"
              borderLeftStyle="solid"
              borderLeftColor="border.default"
              padding={4}
              {...props}
            />
          ),
          ul: ({ ref, node, ...props }) => (
            <styled.ul pl="4" listStyleType="disc" {...props} />
          ),
          ol: ({ ref, node, ...props }) => (
            <styled.ol pl="4" listStyleType="decimal" {...props} />
          ),
          li: ({ ref, node, ...props }) => <styled.li {...props} />,
          code: ({ ref, node, ...props }) => <Code {...props} />,
          table: ({ ref, node, ...props }) => <Table.Root {...props} />,
          thead: ({ ref, node, ...props }) => <Table.Head {...props} />,
          th: ({ ref, node, ...props }) => <Table.Header {...props} />,
          tbody: ({ ref, node, ...props }) => <Table.Body {...props} />,
          tr: ({ ref, node, ...props }) => <Table.Row {...props} />,
          td: ({ ref, node, ...props }) => <Table.Cell {...props} />,
          img: ({ ref, node, ...props }) => {
            const rawUrl = props.src;
            const url =
              rawUrl?.[0] === "/" && assetsPrefix
                ? `${assetsPrefix}${rawUrl}`
                : rawUrl;
            return <img {...props} src={url} />;
          },
        }}
      >
        {/* {data} */}
        {content}
      </ReactMarkdown>
    </Stack>
  );
};
