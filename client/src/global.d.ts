declare const _THEME_: unknown;
declare const _BUILD_: { date: string };
declare module 'draft-js-import-markdown' {
  import draftjs = require('draft-js');

  export function stateFromMarkdown(content: string): draftjs.ContentState;
}
