"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7918],{1262:function(e,t,a){var n=a(7294),l=a(2389);t.Z=function(e){var t=e.children,a=e.fallback;return(0,l.Z)()&&null!=t?n.createElement(n.Fragment,null,t()):a||null}},1293:function(e,t,a){a.r(t),a.d(t,{default:function(){return I}});var n=a(7294),l=a(6010),r=a(3783),i=a(5999),o=a(3063);var s=function(e){var t=e.previous,a=e.next;return n.createElement(n.Fragment,null,n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement("a",{className:"pagination-nav__link",href:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},t.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement("a",{className:"pagination-nav__link",href:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},a.title)))),n.createElement("div",{className:"margin-top--md"},n.createElement(o.Z,null)))},c=a(2263),d=a(9960),m=a(907),u=a(3810);var v={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function g(e){var t=v[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(d.Z,{to:a,onClick:l},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,a=e.className,r=e.versionMetadata,i=(0,c.Z)().siteConfig.title,o=(0,m.gA)({failfast:!0}).pluginId,s=(0,u.J)(o).savePreferredVersionName,d=(0,m.Jo)(o),v=d.latestDocSuggestion,p=d.latestVersionSuggestion,E=null!=v?v:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(g,{siteTitle:i,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:p.label,to:E.path,onClick:function(){return s(p.name)}})))}function E(e){var t=e.className,a=(0,u.E6)();return a.banner?n.createElement(p,{className:t,versionMetadata:a}):null}function b(e){var t=e.className,a=(0,u.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label):null}var f=a(1217);function k(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function N(e){var t=e.lastUpdatedBy;return n.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(k,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(N,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var Z=a(6753),L=a(62),C="lastUpdated_13-_";function U(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(L.Z,e)))}function w(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(Z.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",C)},(a||r)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:r})))}function y(e){var t=e.content.metadata,a=t.editUrl,r=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,o=t.lastUpdatedBy,s=t.tags,c=s.length>0,d=!!(a||r||o);return c||d?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(U,{tags:s}),d&&n.createElement(w,{editUrl:a,lastUpdatedAt:r,lastUpdatedBy:o,formattedLastUpdatedAt:i})):null}var T=a(4171),M="tocCollapsible_1PrD",A="tocCollapsibleButton_2O1e",H="tocCollapsibleContent_2Ydz",x="tocCollapsibleExpanded_3GYr",B=a(5002);function O(e){var t,a=e.toc,r=e.className,o=e.minHeadingLevel,s=e.maxHeadingLevel,c=(0,u.uR)({initialState:!0}),d=c.collapsed,m=c.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(M,(t={},t[x]=!d,t),r)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",A),onClick:m},n.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:H,collapsed:d},n.createElement(B.Z,{toc:a,minHeadingLevel:o,maxHeadingLevel:s})))}var S=a(9649),F="docItemContainer_33ec",D="docItemCol_3FnS",V="tocMobile_3Hoh";function I(e){var t,a=e.content,i=a.metadata,o=a.frontMatter,c=o.image,d=o.keywords,m=o.hide_title,v=o.hide_table_of_contents,g=o.toc_min_heading_level,h=o.toc_max_heading_level,p=i.description,k=i.title,N=!m&&void 0===a.contentTitle,_=(0,r.Z)(),Z=!v&&a.toc&&a.toc.length>0,L=Z&&("desktop"===_||"ssr"===_);return n.createElement(n.Fragment,null,n.createElement(f.Z,{title:k,description:p,keywords:d,image:c}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(t={},t[D]=!v,t))},n.createElement(E,null),n.createElement("div",{className:F},n.createElement("article",null,n.createElement(b,null),Z&&n.createElement(O,{toc:a.toc,minHeadingLevel:g,maxHeadingLevel:h,className:(0,l.Z)(u.kM.docs.docTocMobile,V)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},N&&n.createElement(S.N,null,k),n.createElement(a,null)),n.createElement(y,e)),n.createElement(s,{previous:i.previous,next:i.next}))),L&&n.createElement("div",{className:"col col--3"},n.createElement(T.Z,{toc:a.toc,minHeadingLevel:g,maxHeadingLevel:h,className:u.kM.docs.docTocDesktop}))))}},6753:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),l=a(5999),r=a(3117),i=a(102),o=a(6010),s="iconEdit_2_ui",c=["className"];var d=function(e){var t=e.className,a=(0,i.Z)(e,c);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},m=a(3810);function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(d,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},9649:function(e,t,a){a.d(t,{N:function(){return u},Z:function(){return v}});var n=a(102),l=a(3117),r=a(7294),i=a(6010),o=a(5999),s=a(3810),c="anchorWithStickyNavbar_31ik",d="anchorWithHideOnScrollNavbar_3R7-",m=["id"],u=function(e){var t=Object.assign({},e);return r.createElement("header",null,r.createElement("h1",(0,l.Z)({},t,{id:void 0}),t.children))},v=function(e){return"h1"===e?u:(t=e,function(e){var a,u=e.id,v=(0,n.Z)(e,m),g=(0,s.LU)().navbar.hideOnScroll;return u?r.createElement(t,(0,l.Z)({},v,{className:(0,i.Z)("anchor",(a={},a[d]=g,a[c]=!g,a)),id:u}),v.children,r.createElement("a",{className:"hash-link",href:"#"+u,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,v)});var t}},5002:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(3117),l=a(102),r=a(7294),i=a(3810),o=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,v=void 0===u?void 0:u,g=e.minHeadingLevel,h=e.maxHeadingLevel,p=(0,l.Z)(e,o),E=(0,i.LU)(),b=null!=g?g:E.tableOfContents.minHeadingLevel,f=null!=h?h:E.tableOfContents.maxHeadingLevel,k=(0,i.DA)({toc:t,minHeadingLevel:b,maxHeadingLevel:f}),N=(0,r.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:b,maxHeadingLevel:f}}),[m,v,b,f]);return(0,i.Si)(N),r.createElement(s,(0,n.Z)({toc:k,className:c,linkClassName:m},p))}},7774:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(6010),r=a(9960),i="tag_1Okp",o="tagRegular_3MiF",s="tagWithCount_1HU1";var c=function(e){var t,a=e.permalink,c=e.name,d=e.count;return n.createElement(r.Z,{href:a,className:(0,l.Z)(i,(t={},t[o]=!d,t[s]=d,t))},c,d&&n.createElement("span",null,d))}},62:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(6010),r=a(5999),i=a(7774),o="tags_2ga9",s="tag_11ep";function c(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:s},n.createElement(i.Z,{name:t,permalink:a}))}))))}},3063:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=(a(3935),a(1262)),r=a(6010),i="container_2KlB",o="tagline_byts",s=["backgroundBlue_1cxH","backgroundOrange_1kWu","backgroundPurple_1gnS","backgroundRed_mWnz"],c=n.memo((function(){var e=s[Math.floor(Math.random()*s.length)];return n.createElement(l.Z,null,(function(){return Math.random()>.5?n.createElement("a",{className:(0,r.Z)(i,e),href:"https://www.moonchaser.io/?utm_source=techinterviewhandbook&utm_medium=referral&utm_content=website_docs_sidebar",key:Math.random(),target:"_blank",rel:"noreferrer noopener",onClick:function(){window.gtag("event","moonchaser.sidebar.click")}},n.createElement("p",{className:o},n.createElement("strong",null,"Get paid more.")," Receive risk-free salary negotiation advice from ",n.createElement("u",null,"Moonchaser"),". You pay nothing unless your offer is increased. ",n.createElement("u",null,"Book a free consultation today!"))):n.createElement("a",{className:(0,r.Z)(i,e),href:"https://educative.io/tech-interview-handbook",key:Math.random(),target:"_blank",rel:"noreferrer noopener",onClick:function(){window.gtag("event","educative.sidebar.click")}},n.createElement("p",{className:o},n.createElement("strong",null,"Looking to get hired at FAANG?")," ",n.createElement("u",null,"Educative")," ","offers many great courses to improve your interview game."," ",n.createElement("u",null,"Join today for a discount!")))}))}))},4171:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(3117),l=a(102),r=a(7294),i=a(6010),o=a(5002),s="tableOfContents_rbnR",c=a(3063),d=["className"];var m=function(e){var t=e.className,a=(0,l.Z)(e,d);return r.createElement("div",{className:(0,i.Z)(s,"thin-scrollbar",t)},r.createElement("div",{className:"margin--md"},r.createElement(c.Z,null)),r.createElement(o.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}}}]);