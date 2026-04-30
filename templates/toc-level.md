{{#if length}}
{{#each .}}
- [{{#if pos}}{{pos}} {{/if}}{{title}}]({{#if (startsWith fileName "http")}}{{fileName}}{{else}}{{#if (startsWith fileName "./")}}{{fileName}}{{else}}./{{fileName}}{{/if}}{{/if}})
{{#unless @root.flat}}
{{#if children}}{{> toc-level-md children}}{{/if}}
{{/unless}}
{{/each}}
{{/if}}
