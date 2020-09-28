// Article Collection Fields
export const ARTICLE_CONTENTS = 'article_contents';
export const ARTICLE_META = 'article_meta';

// Article Global Fields
export const ARTICLE_ID = 'article_id';
export const ARTICLE_ACTIVE = 'active';

// Article Contents Fields
export const ARTICLE_AUTHOR = 'author';
export const ARTICLE_BODY = 'body';

// Article Meta Fields
export const UNIX_CREATED_AT = 'unix_created_at';
export const CREATED_AT = 'created_at';
export const COVER_IMAGE = 'cover_image';
export const ARTICLE_TITLE = 'title';
export const ARTICLE_CATEGORIES = 'categories';

// Date Time
export const LONG_DATE_FORMAT = 'MMM DD YYYY';
export const LONG_DATETIME_FORMAT = 'MMM DD YYYY h:mm a';


// Article Body Types
const PARAGRAPH_WITH_BOTTOM_SPACE = 'para_sp';
const PARAGRAPH_WITHOUT_BOTTOM_SPACE = 'para';
const FULL_WIDTH_IMAGE = 'img_full';
const HALF_WIDTH_IMAGE = 'img_half';
const TWO_THIRDS_WIDTH_IMAGE = 'img_two_thirds';
const SIMPLE_LIST_UL = 'list_text_ul';
const SIMPLE_LIST_OL = 'list_text_ol';
const H6 = 'h6';
const H5 = 'h5';
const H4 = 'h4';
const H3 = 'h3';
const H2 = 'h2';
const H1 = 'h1';
const CAPTION = 'caption';
const SUBTITLE = 'subtitle';
const QUOTE = 'quote';

export const elementTypes = {
  PARAGRAPH_WITH_BOTTOM_SPACE,
  PARAGRAPH_WITHOUT_BOTTOM_SPACE,
  FULL_WIDTH_IMAGE,
  HALF_WIDTH_IMAGE,
  TWO_THIRDS_WIDTH_IMAGE,
  SIMPLE_LIST_OL,
  SIMPLE_LIST_UL,
  H6,
  H5,
  H4,
  H3,
  H2,
  H1,
  CAPTION,
  SUBTITLE,
  QUOTE 
}

export const variantMap = new Map([
  [SUBTITLE, 'subtitle2'],
  [QUOTE, 'body2']
]);