"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[345],{4652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=n(5893),r=n(1151);const s={sidebar_position:1},o="ConstructionController",d={id:"2dFortBuildSystem/Components/ConstructionController",title:"ConstructionController",description:"The Construction Controller component functions include building and placement.",source:"@site/docs/2dFortBuildSystem/Components/ConstructionController.md",sourceDirName:"2dFortBuildSystem/Components",slug:"/2dFortBuildSystem/Components/ConstructionController",permalink:"/deeperware/docs/2dFortBuildSystem/Components/ConstructionController",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Components",permalink:"/deeperware/docs/category/components"},next:{title:"JointDot",permalink:"/deeperware/docs/2dFortBuildSystem/Components/JointDot"}},l={},c=[{value:"Properties",id:"properties",level:2},{value:"Public Function",id:"public-function",level:2},{value:"Explanations",id:"explanations",level:2},{value:"Circle Limit",id:"circle-limit",level:3}];function a(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"constructioncontroller",children:"ConstructionController"}),"\n",(0,i.jsx)(t.p,{children:"The Construction Controller component functions include building and placement."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Construction Controller Component Image",src:n(6339).Z+"",width:"491",height:"529"})}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Construction Prefabs"}),(0,i.jsxs)(t.td,{children:["Set up building prefabs, examples of which include ",(0,i.jsx)(t.a,{href:"/docs/2dFortBuildSystem/Prefabs/Wood",children:"Wood"}),", ",(0,i.jsx)(t.a,{href:"/docs/2dFortBuildSystem/Prefabs/Steel",children:"Steel"}),", ",(0,i.jsx)(t.a,{href:"/docs/2dFortBuildSystem/Prefabs/Brick",children:"Brick"}),", ",(0,i.jsx)(t.a,{href:"/docs/2dFortBuildSystem/Prefabs/Rifle",children:"Rifle"}),", and ",(0,i.jsx)(t.a,{href:"/docs/2dFortBuildSystem/Prefabs/Rocket",children:"Rocket"})," prefabs."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Joint Dot"}),(0,i.jsxs)(t.td,{children:["Set up ",(0,i.jsx)(t.a,{href:"/docs/2dFortBuildSystem/Prefabs/JointDot",children:"JointDot"})," prefab."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Stick Background"}),(0,i.jsxs)(t.td,{children:["Set up ",(0,i.jsx)(t.a,{href:"/docs/2dFortBuildSystem/Prefabs/StickBackground",children:"StickBackground"})," prefab."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Circle Limit"}),(0,i.jsxs)(t.td,{children:["Set up ",(0,i.jsx)(t.a,{href:"/docs/2dFortBuildSystem/Components/ConstructionController#circle-limit",children:"Circle Limit"})," GameObject."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Delete Popup"}),(0,i.jsxs)(t.td,{children:["Set the GameObject that contains the ",(0,i.jsx)(t.a,{href:"/docs/2dFortBuildSystem/Components/Deletion",children:"Deletion"})," component."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Min Extend Length"}),(0,i.jsx)(t.td,{children:"Set the minimum extension length for construction."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Max Extend Length"}),(0,i.jsx)(t.td,{children:"Set the maximum extension length for construction."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Snapping Length"}),(0,i.jsx)(t.td,{children:"Set the maximum snap length during construction."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Delete Popup Time"}),(0,i.jsx)(t.td,{children:"How long does the delete menu pop up after pressing."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Wait Connection Time"}),(0,i.jsx)(t.td,{children:"Wait for a joint to connect together, then fill the background."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Min Placement Angle"}),(0,i.jsx)(t.td,{children:"Set the minimum placement angle, usually around 0 to 10, so it looks horizontal."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Max Placement Angle"}),(0,i.jsx)(t.td,{children:"Set the maximum placement angle, usually around 0 to 10, so it looks horizontal."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Jointdot Layer"}),(0,i.jsxs)(t.td,{children:["Set the layer of ",(0,i.jsx)(t.a,{href:"/docs/2dFortBuildSystem/Prefabs/JointDot#jointdot-1",children:"JointDot"})," prefab."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Jointdot SnapLayer"}),(0,i.jsxs)(t.td,{children:["Set the snap layer for ",(0,i.jsx)(t.a,{href:"/docs/2dFortBuildSystem/Prefabs/JointDot#snaparea",children:"JointDot"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Stick Layer"}),(0,i.jsxs)(t.td,{children:["Set the layer of ",(0,i.jsx)(t.a,{href:"/docs/2dFortBuildSystem/Prefabs/Wood#wood-1",children:"Stick"})," prefab."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Deletable Layer"}),(0,i.jsx)(t.td,{children:"Set the layer of GameObjects that can be deleted."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"public-function",children:"Public Function"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Function"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"OnSelectConstructionProp"}),(0,i.jsx)(t.td,{children:"This function is usually called in the selection menu to indicate what type of construction is selected."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"explanations",children:"Explanations"}),"\n",(0,i.jsx)(t.h3,{id:"circle-limit",children:"Circle Limit"}),"\n",(0,i.jsxs)(t.p,{children:["with only one ",(0,i.jsx)(t.strong,{children:"Sprite Renderer"})," component for displaying circular ring image."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"limit range inspector image",src:n(9568).Z+"",width:"468",height:"163"})}),"\n",(0,i.jsx)(t.p,{children:"It looks like this."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"limit range image",src:n(6439).Z+"",width:"198",height:"198"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},6339:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/constructionCon-d8772c004b33f0b426f9880cabae60cb.png"},6439:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/limitRange-cd3204fd95893d945a97f1647929c5bc.png"},9568:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/limitRangeInspector-f1d67b5e4839c8e85a54499d86dd24d4.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>o});var i=n(7294);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);