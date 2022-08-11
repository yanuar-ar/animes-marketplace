import { Heading, Paragraph, Box } from '@zoralabs/zord'
import {
  codeWrapper,
  codeSelector,
  blockQuoteSelector,
  ulSelector,
  aSelector,
  hrSelector,
} from './UtilStyles.css'

export const H1 = ({ ...props }) => <Heading as="h1" size="xl" {...props} />

export const H2 = ({ ...props }) => <Heading as="h2" size="md" {...props} />

export const H3 = ({ ...props }) => <Heading as="h3" size="sm" {...props} />

export const H4 = ({ ...props }) => <Heading as="h4" size="xs" {...props} />

export const H5 = ({ ...props }) => <Heading as="h5" size="sm" {...props} />

export const P = ({ ...props }) => <Paragraph as="p" size="md" {...props} />

export const Pre = ({ ...props }) => <Box as="pre" {...props} className={codeWrapper} />

export const Code = ({ ...props }) => (
  <Box as="code" {...props} className={codeSelector} />
)

export const BlockQuote = ({ ...props }) => (
  <Box as="blockquote" {...props} className={[blockQuoteSelector]} />
)

export const UL = ({ ...props }) => <Box as="ul" {...props} className={[ulSelector]} />

export const A = ({ ...props }) => (
  <Paragraph
    as="a"
    size="md"
    {...props}
    className={[aSelector]}
    target="_blank"
    rel="noreferrer"
  />
)

export const EM = ({ ...props }) => (
  <Heading
    as="em"
    size="sm"
    style={{ fontStyle: 'italic', fontFamily: 'var(--display-font)!important' }}
    {...props}
  />
)

export const HR = ({ ...props }) => <Box as="hr" {...props} className={[hrSelector]} />

export const MDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  p: P,
  a: A,
  pre: Pre,
  code: Code,
  blockquote: BlockQuote,
  ul: UL,
  em: EM,
  hr: HR,
}
