{{#if length}}{{#each .}}[{{title}}]({{fileName}}){{#unless @last}} · {{/unless}}{{/each}}{{/if}}
