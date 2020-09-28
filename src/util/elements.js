import React from 'react';

// Util
import { elementTypes, variantMap } from './constants';
import { createMarkup } from './helpers';


// UI Elements
import Typography from '@material-ui/core/Typography';

export const ELEMENT_MAP = new Map([
  [undefined, () => null],
  [null, () => null],
  [elementTypes.PARAGRAPH_WITHOUT_BOTTOM_SPACE, (content, index) => (
    <Typography key={index} dangerouslySetInnerHTML={createMarkup(content)}></Typography>
  )],
  [elementTypes.PARAGRAPH_WITH_BOTTOM_SPACE, (content, index) => (
    <Typography key={index} style={{ marginBottom: '16px' }} dangerouslySetInnerHTML={createMarkup(content)}></Typography>
  )],
  [elementTypes.FULL_WIDTH_IMAGE, (content, index) => (
    <div key={index} style={{ textAlign: 'center' }}>
      <img src={content.src} style={{ width: '100%', borderRadius: '4px' }} alt={content.alt} />
    </div>
  )],
  [elementTypes.HALF_WIDTH_IMAGE, (content, index) => (
    <div key={index} style={{ textAlign: 'center' }}>
      <img src={content.src} style={{ width: '50%', borderRadius: '4px' }} alt={content.alt} />
    </div>
  )],
  [elementTypes.TWO_THIRDS_WIDTH_IMAGE, (content, index) => (
    <div key={index} style={{ textAlign: 'center' }}>
      <img src={content.src} style={{ width: '66.667%', borderRadius: '4px' }} alt={content.alt} />
    </div>
  )],
  [elementTypes.SIMPLE_LIST_OL, (content, index) => (
    <ol key={index}>
      {content.map(item => (
        <li key={`${item}-${index}`}>
          <Typography dangerouslySetInnerHTML={createMarkup(item)}></Typography>
        </li>
      ))}
    </ol>
  )],
  [elementTypes.SIMPLE_LIST_UL, (content, index) => (
    <ul key={index}>
      {content.map((item, index) => (
        <li key={`${item}-${index}`}>
          <Typography dangerouslySetInnerHTML={createMarkup(item)}></Typography>
        </li>
      ))}
    </ul>
  )],
  [elementTypes.H1, (content, index) => (
    <Typography key={index} align={content.align} variant={elementTypes.H1} dangerouslySetInnerHTML={createMarkup(content.text)}></Typography>
  )],
  [elementTypes.H2, (content, index) => (
    <Typography key={index} align={content.align} variant={elementTypes.H2} dangerouslySetInnerHTML={createMarkup(content.text)}></Typography>
  )],
  [elementTypes.H3, (content, index) => (
    <Typography key={index} align={content.align} variant={elementTypes.H3} dangerouslySetInnerHTML={createMarkup(content.text)}></Typography>
  )],
  [elementTypes.H4, (content, index) => (
    <Typography key={index} align={content.align} variant={elementTypes.H4} dangerouslySetInnerHTML={createMarkup(content.text)}></Typography>
  )],
  [elementTypes.H5, (content, index) => (
    <Typography key={index} align={content.align} variant={elementTypes.H5} dangerouslySetInnerHTML={createMarkup(content.text)}></Typography>
  )],
  [elementTypes.H6, (content, index) => (
    <Typography key={index} align={content.align} variant={elementTypes.H6} dangerouslySetInnerHTML={createMarkup(content.text)}></Typography>
  )],
  [elementTypes.CAPTION, (content, index) => (
    <Typography key={index} align={content.align} variant={elementTypes.CAPTION} dangerouslySetInnerHTML={createMarkup(content.text)}></Typography>
  )],
  [elementTypes.SUBTITLE, (content, index) => (
    <Typography key={index} align={content.align} variant={variantMap.get(elementTypes.SUBTITLE)} dangerouslySetInnerHTML={createMarkup(content.text)}></Typography>
  )],
  [elementTypes.QUOTE, (content, index) => (
    <Typography key={index} align={content.align} style={{ width: '70%', margin: '8px auto', opacity: 0.65 }} variant={variantMap.get(elementTypes.QUOTE)} dangerouslySetInnerHTML={createMarkup(`"${content.text}"`)}></Typography>
  )]
]);