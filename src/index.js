import React from 'react';

// Date Time
import moment from 'moment';

// UI Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

// Icons
import Comment from '@material-ui/icons/Comment';

// Util
import { ELEMENT_MAP } from './util/elements';
import {
  elementTypes,
  ARTICLE_TITLE,
  ARTICLE_AUTHOR,
  CREATED_AT,
  LONG_DATE_FORMAT,
  ARTICLE_BODY,
  ARTICLE_ACTIVE,
  ARTICLE_CATEGORIES,
  COVER_IMAGE
} from './util/constants';

const ArticleParser = ({ content, meta, comments, comment, setComment, postComment, isLoggedIn, openLogin, openSignup, commentCount, setMaxCount, maxCount, isPreview }) => {
  if ((content && meta) && (meta[ARTICLE_ACTIVE] || isPreview) && Array.isArray(content[ARTICLE_BODY])) {
    return (
      <div style={{ marginBottom: '50px' }}>
        <div style={{ display: 'flex', width: '85%', margin: '15px auto' }}>
          <Typography style={{ lineHeight: '31px' }}>{content[ARTICLE_AUTHOR]}&nbsp;&nbsp;</Typography><Typography style={{ lineHeight: '31px', fontWeight: 'bold' }} color='primary'>/</Typography><Typography style={{ color: '#d6d1d1', lineHeight: '31px' }}>&nbsp;&nbsp;{moment(meta[CREATED_AT]).format(LONG_DATE_FORMAT)}</Typography>
          <span style={{ flex: 1 }}></span>
          <a className='link-like' href='#comments'>
            <Comment style={{ position: 'relative', top: '7px' }} color='primary' />
            <Typography style={{ marginLeft: '6px', display: 'inline-block' }} color='primary'>Comment</Typography>
          </a>
        </div>
        <Typography style={{ margin: '25px 0' }} variant='h4' align='center'>{meta[ARTICLE_TITLE]}</Typography>
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          <img src={meta[COVER_IMAGE]} style={{ width: '80%', borderRadius: '4px' }} alt='main' />
        </div>
        <div>
          {content.body.map((section, index) => {
            const columns = Math.floor(12 / Object.keys(section).length);
            return (
              <Grid key={index} container spacing={2}>
                {Object.values(section).map((columnEntry, index) => (
                  <Grid key={index} item xs={columns} sm={columns} md={columns} lg={columns} xl={columns}>
                    {columnEntry.map((element, index) => ELEMENT_MAP.get(element.type)(element.content, index))}
                  </Grid>))}
              </Grid>)
          })}
        </div>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
              {meta[ARTICLE_CATEGORIES] && Array.isArray(meta[ARTICLE_CATEGORIES]) && (
                meta[ARTICLE_CATEGORIES].map(category => <a key={category} className='link-like' href={`/${category}`}><Chip style={{ margin: '5px', fontWeight: 'bold' }} label={`#${category}`} color='primary' /></a>)
              )}
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
              <Typography id='comments'>Leave a comment!</Typography>
              <TextField value={comment} onChange={setComment} variant='outlined' fullWidth multiline />
              <div style={{display: 'inline-block', width: '25%'}}>
                <Button disabled={!comment || !isLoggedIn} style={{ margin: '10px', minWidth: '100px' }} color='primary' onClick={postComment} variant='contained'>Post</Button>
              </div>
              <div style={{display: 'inline-block', width: '75%'}}>
                {!isLoggedIn && <Typography color='primary'><span style={{textDecoration: 'underline'}} className='link-like' onClick={openLogin}>Login</span> or <span style={{textDecoration: 'underline'}} className='link-like' onClick={openSignup}>Signup</span> to leave a comment!</Typography>}
              </div>
              <Grid style={{marginTop: '25px'}} container spacing={1}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography>{commentCount || 0} Comments</Typography>
                  <div  style={{borderTop: '1px solid #bcbcbc', height: '15px'}}></div>
                </Grid>
                {Array.isArray(comments) ? comments : <Grid item xs={12} sm={12} md={12} lg={12} xl={12}><Typography variant='h5' align='center'>No Comments Yet</Typography></Grid>}
                {maxCount < commentCount && <Button variant='outlined' color='primary' fullWidth onClick={() => setMaxCount(maxCount + 15)}>See More Comments</Button>}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  } else {
    return (
      <div style={{marginTop: '100px', textAlign: 'center'}}>
        <CircularProgress size={60} />
      </div>
    )
  }
}

export default ArticleParser;
export { elementTypes };
