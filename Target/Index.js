import m from"./Library/GetConfig.js";import n from"./Option/Index.js";import{Distribution as p,Rome as c}from"@rometools/js-api";import u,{Merge as s}from"files-pipe";import{resolve as d}from"path";var w=(e={})=>{for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&e[o]===!0&&(e[o]=n[o]);const t=s(n,e),r=new Set;if(typeof t.Path<"u"&&(t.Path instanceof Array||t.Path instanceof Set))for(const o of t.Path)r.add(o);return{name:"astro-rome",hooks:{"astro:build:done":async({dir:o})=>{try{r.size||r.add(o);const a=await c.create({distribution:p.NODE});(typeof t.Rome>"u"||t.Rome===null)&&(t.Rome=JSON.parse(await m("rome.json"))),t.Rome&&t.Rome!==!0&&(t.Rome.$schema=void 0,a.applyConfiguration(t.Rome));for(const f of r)await(await(await(await new u(t.Cache,t.Logger).In(f)).By("**/*.{js,mjs,cjs,ts}")).Not(t.Exclude)).Pipe(s(n.Action,{Wrote:async i=>{try{return a.formatContent(i.Buffer.toString(),{filePath:d(i.Input)}).content}catch{return i.Buffer}}}))}catch{}}}}};export{w as default};
