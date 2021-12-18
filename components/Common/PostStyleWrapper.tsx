import { styled } from '../../stitches.config';
import {
  TypoBody16BaseStyleObj,
  TypoHeadingH3BaseStyleObj,
  TypoHeadingH4BaseStyleObj,
  TypoHeadingH5BaseStyleObj,
  TypoHeadingH6BaseStyleObj
} from './Typography';

const PostStyleWrapper = styled('div', {
  'p, *': { ...TypoBody16BaseStyleObj, color: '$dark1' },
  // block element style
  'address,article,aside,blockquote,canvas,dd,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h1,h3,h4,h5,h6,header,hr,li,main,nav,noscript,ol,p,pre,section,table,tfoot,ul,video':
    {
      marginBottom: 16
    },
  h1: TypoHeadingH3BaseStyleObj,
  h2: TypoHeadingH4BaseStyleObj,
  h3: TypoHeadingH5BaseStyleObj,
  h4: TypoHeadingH6BaseStyleObj,
  'h3,h4,h5,h6': {
    marginBottom: 16,
    marginTop: 24
  },
  'ol,ul': {
    paddingLeft: '1.4em',
    marginBottom: 16
  },
  li: {
    margin: '4px 0',
    listStyle: 'outside'
  },
  // children ol, ul
  'li>ol,li>ul': {
    paddingLeft: 16,
    marginBottom: 4
  },
  a: {
    color: '$blue1',
    textDecoration: 'none'
  },
  'a:hover,a:active': {
    textDecoration: 'underline'
  },
  blockquote: {
    borderLeft: '4px solid',
    borderLeftColor: '$dark3',
    '> p': { color: '$dark2' },
    marginTop: 0,
    marginRight: 0,
    marginLeft: 0,
    paddingLeft: 16
  }
});

export default PostStyleWrapper;