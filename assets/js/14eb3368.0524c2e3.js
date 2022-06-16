"use strict";(self.webpackChunkmarp_template_library=self.webpackChunkmarp_template_library||[]).push([[817],{7684:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(7462),r=a(7294),i=a(6010),l=a(8425),c=a(8596),s=a(5281),o=a(9960),m=a(4996),d=a(5999);function u(e){return r.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function b(e){var t=e.children,a=e.href,n="breadcrumbs__link";return e.isLast?r.createElement("span",{className:n,itemProp:"name"},t):a?r.createElement(o.Z,{className:n,href:a,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:n},t)}function h(e){var t=e.children,a=e.active,l=e.index,c=e.addMicrodata;return r.createElement("li",(0,n.Z)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,r.createElement("meta",{itemProp:"position",content:String(l+1)}))}function p(){var e=(0,m.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.Z,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,i.Z)("breadcrumbs__link",v.breadcrumbsItemLink),href:e},r.createElement(u,{className:v.breadcrumbHomeIcon})))}function g(){var e=(0,l.s1)(),t=(0,c.Ns)();return e?r.createElement("nav",{className:(0,i.Z)(s.k.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(p,null),e.map((function(t,a){var n=a===e.length-1;return r.createElement(h,{key:a,active:n,index:a,addMicrodata:!!t.href},r.createElement(b,{href:t.href,isLast:n},t.label))})))):null}},4228:function(e,t,a){a.r(t),a.d(t,{default:function(){return V}});var n=a(7294),r=a(1944),i=a(8425),l=a(4996),c=a(6010),s=a(9960),o=a(3919),m=a(5999),d="cardContainer_fWXF",u="cardTitle_rnsV",v="cardDescription_PWke";function b(e){var t=e.href,a=e.children;return n.createElement(s.Z,{href:t,className:(0,c.Z)("card padding--lg",d)},a)}function h(e){var t=e.href,a=e.icon,r=e.title,i=e.description;return n.createElement(b,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",u),title:r},a," ",r),i&&n.createElement("p",{className:(0,c.Z)("text--truncate",v),title:i},i))}function p(e){var t=e.item,a=(0,i.Wl)(t);return a?n.createElement(h,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t,a=e.item,r=(0,o.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=a.docId)?t:void 0);return n.createElement(h,{href:a.href,icon:r,title:a.label,description:null==l?void 0:l.description})}function f(e){var t=e.item;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function E(e){var t=e.items,a=e.className;return n.createElement("section",{className:(0,c.Z)("row",a)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,i.Wl)(e)}))}(t).map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{key:t,item:e}))})))}var Z=a(4966),N=a(3120),k=a(4364),_=a(7684),L=a(2503),y="generatedIndexPage_vN6x",T="list_eTzJ",x="title_kItE";function I(e){var t=e.categoryGeneratedIndex;return n.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,l.Z)(t.image)})}function w(e){var t=e.categoryGeneratedIndex,a=(0,i.jA)();return n.createElement(n.Fragment,null,n.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,l.Z)(t.image)}),n.createElement("div",{className:y},n.createElement(N.Z,null),n.createElement(_.Z,null),n.createElement(k.Z,null),n.createElement("header",null,n.createElement(L.Z,{as:"h1",className:x},t.title),t.description&&n.createElement("p",null,t.description)),n.createElement("article",{className:"margin-top--lg"},n.createElement(E,{items:a.items,className:T})),n.createElement("footer",{className:"margin-top--lg"},n.createElement(Z.Z,{previous:t.navigation.previous,next:t.navigation.next}))))}function V(e){return n.createElement(n.Fragment,null,n.createElement(I,e),n.createElement(w,e))}},4966:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7462),r=a(7294),i=a(5999),l=a(6010),c=a(9960);function s(e){var t=e.permalink,a=e.title,n=e.subLabel,i=e.isNext;return r.createElement(c.Z,{className:(0,l.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&r.createElement("div",{className:"pagination-nav__sublabel"},n),r.createElement("div",{className:"pagination-nav__label"},a))}function o(e){var t=e.previous,a=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&r.createElement(s,(0,n.Z)({},t,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(s,(0,n.Z)({},a,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4364:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(6010),i=a(5999),l=a(4477),c=a(5281);function s(e){var t=e.className,a=(0,l.E)();return a.badge?n.createElement("span",{className:(0,r.Z)(t,c.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},3120:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),r=a(6010),i=a(2263),l=a(9960),c=a(5999),s=a(143),o=a(373),m=a(5281),d=a(4477);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function b(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(l.Z,{to:a,onClick:r},n.createElement(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){var t,a=e.className,l=e.versionMetadata,c=(0,i.Z)().siteConfig.title,d=(0,s.gA)({failfast:!0}).pluginId,u=(0,o.J)(d).savePreferredVersionName,h=(0,s.Jo)(d),p=h.latestDocSuggestion,g=h.latestVersionSuggestion,f=null!=p?p:(t=g).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,r.Z)(a,m.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:c,versionMetadata:l})),n.createElement("div",{className:"margin-top--md"},n.createElement(b,{versionLabel:g.label,to:f.path,onClick:function(){return u(g.name)}})))}function p(e){var t=e.className,a=(0,d.E)();return a.banner?n.createElement(h,{className:t,versionMetadata:a}):null}},2503:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7462),r=a(3366),i=a(7294),l=a(6010),c=a(5999),s=a(6668),o="anchorWithStickyNavbar_LWe7",m="anchorWithHideOnScrollNavbar_WYt5",d=["as","id"];function u(e){var t=e.as,a=e.id,u=(0,r.Z)(e,d),v=(0,s.L)().navbar.hideOnScroll;return"h1"!==t&&a?i.createElement(t,(0,n.Z)({},u,{className:(0,l.Z)("anchor",v?m:o),id:a}),u.children,i.createElement("a",{className:"hash-link",href:"#"+a,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(t,(0,n.Z)({},u,{id:void 0}))}}}]);