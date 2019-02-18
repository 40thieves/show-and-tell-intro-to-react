import { default as theme } from 'mdx-deck/themes'
import tomorrow from 'react-syntax-highlighter/styles/prism/tomorrow'

export default {
  ...theme,
  prism: {
    style: tomorrow
  }
}