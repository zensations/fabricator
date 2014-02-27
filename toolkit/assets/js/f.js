!function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var a=t.util.type(e);switch(a){case"Object":var r={};for(var n in e)e.hasOwnProperty(n)&&(r[n]=t.util.clone(e[n]));return r;case"Array":return e.slice()}return e}},languages:{extend:function(e,a){var r=t.util.clone(t.languages[e]);for(var n in a)r[n]=a[n];return r},insertBefore:function(e,a,r,n){n=n||t.languages;var i=n[e],o={};for(var s in i)if(i.hasOwnProperty(s)){if(s==a)for(var l in r)r.hasOwnProperty(l)&&(o[l]=r[l]);o[s]=i[s]}return n[e]=o},DFS:function(e,a){for(var r in e)a.call(e,r,e[r]),"Object"===t.util.type(e)&&t.languages.DFS(e[r],a)}},highlightAll:function(e,a){for(var r,n=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),i=0;r=n[i++];)t.highlightElement(r,e===!0,a)},highlightElement:function(r,n,i){for(var o,s,l=r;l&&!e.test(l.className);)l=l.parentNode;if(l&&(o=(l.className.match(e)||[,""])[1],s=t.languages[o]),s){r.className=r.className.replace(e,"").replace(/\s+/g," ")+" language-"+o,l=r.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var c=r.textContent;if(c){c=c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ");var g={element:r,language:o,grammar:s,code:c};if(t.hooks.run("before-highlight",g),n&&self.Worker){var u=new Worker(t.filename);u.onmessage=function(e){g.highlightedCode=a.stringify(JSON.parse(e.data),o),t.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,i&&i.call(g.element),t.hooks.run("after-highlight",g)},u.postMessage(JSON.stringify({language:g.language,code:g.code}))}else g.highlightedCode=t.highlight(g.code,g.grammar,g.language),t.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,i&&i.call(r),t.hooks.run("after-highlight",g)}}},highlight:function(e,r,n){return a.stringify(t.tokenize(e,r),n)},tokenize:function(e,a){var r=t.Token,n=[e],i=a.rest;if(i){for(var o in i)a[o]=i[o];delete a.rest}e:for(var o in a)if(a.hasOwnProperty(o)&&a[o]){var s=a[o],l=s.inside,c=!!s.lookbehind,g=0;s=s.pattern||s;for(var u=0;u<n.length;u++){var f=n[u];if(n.length>e.length)break e;if(!(f instanceof r)){s.lastIndex=0;var p=s.exec(f);if(p){c&&(g=p[1].length);var m=p.index-1+g,p=p[0].slice(g),d=p.length,h=m+d,v=f.slice(0,m+1),y=f.slice(h+1),b=[u,1];v&&b.push(v);var w=new r(o,l?t.tokenize(p,l):p);b.push(w),y&&b.push(y),Array.prototype.splice.apply(n,b)}}}}return n},hooks:{all:{},add:function(e,a){var r=t.hooks.all;r[e]=r[e]||[],r[e].push(a)},run:function(e,a){var r=t.hooks.all[e];if(r&&r.length)for(var n,i=0;n=r[i++];)n(a)}}},a=t.Token=function(e,t){this.type=e,this.content=t};if(a.stringify=function(e,r,n){if("string"==typeof e)return e;if("[object Array]"==Object.prototype.toString.call(e))return e.map(function(t){return a.stringify(t,r,e)}).join("");var i={type:e.type,content:a.stringify(e.content,r,n),tag:"span",classes:["token",e.type],attributes:{},language:r,parent:n};"comment"==i.type&&(i.attributes.spellcheck="true"),t.hooks.run("wrap",i);var o="";for(var s in i.attributes)o+=s+'="'+(i.attributes[s]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'" '+o+">"+i.content+"</"+i.tag+">"},!self.document)return void self.addEventListener("message",function(e){var a=JSON.parse(e.data),r=a.language,n=a.code;self.postMessage(JSON.stringify(t.tokenize(n,t.languages[r]))),self.close()},!1);var r=document.getElementsByTagName("script");r=r[r.length-1],r&&(t.filename=r.src,document.addEventListener&&!r.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll))}(),Prism.languages.markup={comment:/&lt;!--[\w\W]*?-->/g,prolog:/&lt;\?.+?\?>/,doctype:/&lt;!DOCTYPE.+?>/,cdata:/&lt;!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^&lt;\/?[\w:-]+/i,inside:{punctuation:/^&lt;\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/&amp;#?[\da-z]{1,8};/gi},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*{))/gi,inside:{punctuation:/[;:]/g}},url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/g,property:/(\b|\B)[\w-]+(?=\s*:)/gi,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,ignore:/&(lt|gt|amp);/gi,punctuation:/[\{\};:]/g},Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{style:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/gi,inside:{tag:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css}}}),Prism.languages.clike={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,"class-name":{pattern:/((?:class|interface|extends|implements|trait|instanceof|new)\s+)[a-z0-9_\.\\]+/gi,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,"function":{pattern:/[a-z0-9_]+\(/gi,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,operator:/[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|catch|finally|null|break|continue)\b/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/gi,inside:{tag:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript}}}),function(){if(self.Prism&&self.document&&document.querySelector){var e={js:"javascript",html:"markup",svg:"markup"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){var a=t.getAttribute("data-src"),r=(a.match(/\.(\w+)$/)||[,""])[1],n=e[r]||r,i=document.createElement("code");i.className="language-"+n,t.textContent="",i.textContent="Loading…",t.appendChild(i);var o=new XMLHttpRequest;o.open("GET",a,!0),o.onreadystatechange=function(){4==o.readyState&&(o.status<400&&o.responseText?(i.textContent=o.responseText,Prism.highlightElement(i)):i.textContent=o.status>=400?"✖ Error "+o.status+" while fetching file: "+o.statusText:"✖ Error: File does not exist or is empty")},o.send(null)})}}();var fabricator=window.fabricator={};fabricator.options={toggles:{preview:!0,code:!1}},localStorage.fabricator=localStorage.fabricator||JSON.stringify(fabricator.options),fabricator.dom={primaryMenu:document.querySelector(".f-menu"),menuItems:document.querySelectorAll(".f-menu li a"),menuToggle:document.querySelector(".f-menu-toggle"),prototype:document.getElementById("prototype")},fabricator.getData=function(e){var t,a="assets/json/data.json",r=new XMLHttpRequest;return r.open("GET",a,!1),r.send(),t=JSON.parse(r.responseText),"function"==typeof e&&e(t),this},fabricator.buildColorChips=function(){for(var e,t=document.querySelectorAll(".f-color-chip"),a=t.length-1;a>=0;a--)e=t[a].querySelector(".f-color-chip__color").innerHTML,t[a].style.borderTopColor=e;return this},fabricator.setActiveItem=function(){var e=function(){for(var e,t,a=[],r=fabricator.dom.menuItems.length-1;r>=0;r--)fabricator.dom.menuItems[r].classList.remove("f-active"),t=fabricator.dom.menuItems[r].getAttribute("href"),e=t.indexOf("#")>-1?t.split("#").pop():t.split("/").pop().replace(/\.[^/.]+$/,""),a.push(e);return a.reverse()},t=function(){var t,a,r=window.location.href,n=e();t=r.indexOf("#")>-1?window.location.hash.replace("#",""):window.location.pathname.split("/").pop().replace(/\.[^/.]+$/,""),a=n.indexOf(t),fabricator.dom.menuItems[a].classList.add("f-active")};return window.addEventListener("hashchange",t),t(),this},fabricator.templatePrototype=function(e){var t;return this.getData(function(a){for(var r=a.prototypes.length-1;r>=0;r--)a.prototypes[r].id===e&&(t=a.prototypes[r].content,fabricator.dom.prototype.innerHTML=t)}),this},fabricator.toggles={},fabricator.toggles.primaryMenu=function(){var e=fabricator.dom.menuToggle,t=function(){document.querySelector("html").classList.toggle("state--menu-active"),fabricator.dom.menuToggle.classList.toggle("f-icon-menu"),fabricator.dom.menuToggle.classList.toggle("f-icon-close")};e.addEventListener("click",function(){t()});for(var a=function(){t()},r=0;r<fabricator.dom.menuItems.length;r++)fabricator.dom.menuItems[r].addEventListener("click",a);return this},fabricator.toggles.itemData=function(){for(var e=document.querySelectorAll(".f-item-group"),t=document.querySelectorAll(".f-toggle"),a=document.querySelector(".f-controls"),r=a.querySelectorAll("[data-toggle]"),n=JSON.parse(localStorage.fabricator),i=function(){var e=this.parentNode.parentNode.parentNode,t=this.attributes["data-toggle"].value;e.classList.toggle("f-item-"+t+"-active")},o=0;o<t.length;o++)t[o].addEventListener("click",i);for(var s=function(t,a){for(var r=document.querySelector(".f-controls [data-toggle="+t+"]"),i=0;i<e.length;i++)a?e[i].classList.add("f-item-"+t+"-active"):e[i].classList.remove("f-item-"+t+"-active");a?r.classList.add("f-active"):r.classList.remove("f-active"),n.toggles[t]=a,localStorage.setItem("fabricator",JSON.stringify(n))},l=0;l<r.length;l++)r[l].addEventListener("click",function(e){var t=e.target.getAttribute("data-toggle"),a=e.target.className.indexOf("f-active")<0;s(t,a)});for(var c in n.toggles)n.toggles.hasOwnProperty(c)&&s(c,n.toggles[c]);return this},function(){fabricator.toggles.primaryMenu().itemData(),fabricator.buildColorChips().setActiveItem(),fabricator.dom.prototype&&location.hash&&fabricator.templatePrototype(location.hash.replace(/#/,"")),Prism.highlightAll()}();