/*
Language: rvwtag
Requires: xml.js
Author: Phil Hopper
Description: Matcher for substitution tags in quotes
Category: template
*/

function(hljs) {
  return {
    case_insensitive: true,
    subLanguage: 'xml',
    contains: [
      {
        className: 'built_in',
        begin: /{@/, end: /@}/,
        contains: [
          {
            className: 'strong',
            begin: /[^{}@]+/,
            relevance: 0
          }
        ]
      }
    ]
  };
}
