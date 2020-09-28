import React, { Component } from 'react';
import ArticleParser from 'yankee-article-parser';

// Theme
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import CssBaseline from '@material-ui/core/CssBaseline';

// Util
import { SECONDARY_THEME_COLOR, ERROR_COLOR, SECONDARY_BACKGROUND_COLOR } from './util/constants';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: red,
    secondary: {
      main: SECONDARY_THEME_COLOR
    },
    error: {
      main: ERROR_COLOR
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    background: {
      default: SECONDARY_BACKGROUND_COLOR,
    }
  }
});

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ maxWidth: '1200px', margin: '15px auto 0 auto', padding: '8px' }}>
          <ArticleParser 
          maxCount={5}
          commentCount={20}
          isLoggedIn={false}
          content={{
            author: 'Alexander Dubinski',
            body: [
              { 0: [{ type: 'h5', content: 'Section 1' }] },
              { 0: [{ type: 'para_sp', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Nam vitae tellus</strong> vel libero iaculis ornare. Pellentesque et convallis odio. Aliquam in malesuada odio. Phasellus erat nibh, dignissim vitae ex in, efficitur dignissim justo. Nam sagittis auctor porttitor. Fusce et magna condimentum, pellentesque arcu vitae, porta dui. Aenean nec viverra nisi, quis aliquam lorem. Phasellus vitae lorem finibus, molestie arcu euismod, aliquet eros. Vivamus eget ultricies mi. Donec id faucibus libero. Duis ullamcorper lorem in mauris dictum, nec dignissim ligula convallis. Integer id odio id neque faucibus laoreet ullamcorper a eros.' }] },
              { 0: [{ type: 'img_full', content: { src: 'https://placehold.it/500x281', alt: 'placeholder' } }], 1: [{ type: 'img_half', content: { src: 'https://placehold.it/500', alt: 'placeholder2' } }] }
            ]
          }} meta={{
            categories: [
              'Banking',
              'Credit Cards'
            ],
            cover_image: 'https://placehold.it/500x281',
            active: true,
            title: 'Hello World this is a Test'

          }} />
        </div>
      </ThemeProvider>
    )
  }
}
