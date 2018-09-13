import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/signup.stories');
}

configure(loadStories, module);
