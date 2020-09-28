declare interface ArticleParserProps {
  content: object;
  meta: object;
}

declare const ArticleParser: React.SFC<ArticleParserProps>
declare const elementTypes: object;

export default ArticleParser;
export { elementTypes, ArticleParserProps };