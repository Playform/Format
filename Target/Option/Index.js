import{Default as t,Merge as o}from"files-pipe";var s=o(t,{Action:{Failed:async e=>`Error: Cannot format file ${e.Input}!`,Accomplished:async e=>`Formatted ${e.Input} in ${e.Output}.`,Fulfilled:async e=>e.Files>0?`Successfully formatted a total of ${e.Files} JS and TS ${e.Files===1?"file":"files"}.`:!1}});export{s as default};
