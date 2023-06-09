import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import styles from "./markdown.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Markdown = ({ markdown }) => {
  return (
    <span className='text-sm sm:text-lg '>
      <span className={styles.codeBlockContainer}>
        <ReactMarkdown
          children={markdown}
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  className={styles.syntaxHighlighting}
                  children={String(children).replace(/\n$/, "")}
                  style={nightOwl}
                  language='javascript'
                  PreTag='div'
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </span>
    </span>
  );
};

export default Markdown;
