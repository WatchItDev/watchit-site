"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[179],{2758:function(e,t,n){var i=n(7378),r=n(1542),a=n(402),o=n.n(a);var l={particles:{number:{value:150,density:{enable:!0,value_area:1100}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.3,random:!1,anim:{enable:!1,speed:10,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.3,width:1},move:{enable:!0,speed:2,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8},repulse:{distance:80,duration:.1},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},s=n(7109),m=n(8235);const c=()=>{let[e,t]=(0,i.useState)("#fff"),n=["#43b2f8","#f07a39","#bf357b","#abd462","#409890","#944fc3"],r=null;return(0,i.useEffect)((()=>(r=setInterval((()=>t(function(){let e=n.length;return n[Math.floor(Math.random()*(e+1))]}())),1e3),()=>{clearInterval(r)})),[]),i.createElement(d,null,i.createElement(u,{src:m}),i.createElement(f,null,"ATCH",i.createElement(h,{color:e},"IT")))},d=s.ZP.div`
  display:flex;
  justify-content: center;
  align-items: flex-end;
  padding: 1rem 0;
  transform: translateX(-5px);
`,u=s.ZP.img`
    width: 9rem;
    height: auto;
    user-select: none;
    
    @media (max-width: 500px) {
     width: 6rem;
    }
`,f=s.ZP.span`
  font-weight: 600;
  font-size: 4rem;
  font-family: 'Oswald', 'Cantarell', Arial, sans-serif;
  line-height: 1;
  margin-left: -0.5rem;
  user-select: none;
  
  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`,h=s.ZP.span`
  color: ${e=>e.color};
  user-select: none;
`;var p=n(6212),g=n(9459),b=n(2101),x=n(6881);const w=()=>i.createElement(i.Fragment,null,i.createElement(Z,null,i.createElement(p.Z,{maxWidth:"xl"},i.createElement(o(),{width:"100%",height:"100vh",params:l}),i.createElement(g.ZP,{container:!0,spacing:1,justifyContent:"center",alignItems:"center"},i.createElement(g.ZP,{item:!0,xs:12,md:12,sx:{flexDirection:{xs:"column",sm:"row"}},display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"nowrap"},i.createElement(y,null,i.createElement(v,null,i.createElement(c,null),i.createElement(E,null,"open movies everywhere"),i.createElement(P,null,i.createElement(k,{href:"https://github.com/ZorrillosDev/watchit-desktop/releases"},"Download"),i.createElement(k,{href:"https://github.com/ZorrillosDev/watchit-desktop"},"Github"))))))))),v=(0,b.ZP)(x.Z)((({theme:e})=>({width:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontFamily:" 'Nunito Sans', sans-serif",padding:"6rem 0",color:"white",cursor:"default"}))),y=(0,b.ZP)(x.Z)((({theme:e})=>({zIndex:"10",position:"absolute",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",top:"20%"}))),Z=(0,b.ZP)(x.Z)((({theme:e})=>({width:"100vw",height:"100vh",backgroundColor:"#141518",backgroundImage:"url('https://firebasestorage.googleapis.com/v0/b/classroom-19991.appspot.com/o/background.jpg?alt=media&token=6fe95652-44ed-4a83-9364-26740c5bdd63')",backgroundSize:"cover",backgroundPosition:"50% 50%",backgroundRepeat:"no-repeat",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"}))),E=(0,b.ZP)(x.Z)((({theme:e})=>({fontWeight:"200",fontSize:"2rem",letterSpacing:"3px",wordSpacing:"7px",userSelect:"none","@media (max-width: 500px)":{fontSize:"1.5rem"}}))),P=(0,b.ZP)(x.Z)((({theme:e})=>({width:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap"}))),k=(0,b.ZP)("a")({width:"14rem",height:"3rem",border:"2px solid white",color:"white",borderRadius:"15px",margin:"1.5rem",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",backgroundColor:"transparent",transition:"all 0.1s ease-out",textDecoration:"none ","&:hover":{transform:"scale(1.05)",backgroundcolor:"rgba(255,255,255,0.1)"},"@media (max-width: 500px)":{margin:"0.5rem"}}),S=((0,b.ZP)(x.Z)((({theme:e})=>({fontSize:"1rem",fontWeight:"600",color:"white",fontFamily:"'Nunito Sans', sans-serif",userSelect:"none"}))),e=>{let[t,n]=(0,i.useState)(!1);return i.createElement(j,{onClick:function(){n(!0),e.copy(),setTimeout((()=>{n(!1)}),800)}},t?i.createElement(z,{copied:t},"Copied"):i.createElement(z,{copied:t},"Copy"))}),j=s.ZP.button`
  position: absolute;
  right: 0;
  height: calc(100% - 2rem);
  width: 3.8rem;
  border: 0;
  border-left: 1px solid white;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  box-shadow: none !important;
  outline: none !important;
  cursor: pointer;
`,z=s.ZP.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${e=>e.copied?"#43d35d":"#fff"};
  font-family: 'Oswald', 'Nunito Sans',sans-serif;
  transition: all 1s ease-in-out
`;var C=n(4222),_=n(2046);s.ZP.div`
  width: 100%;
  height: 100%;
  background-color: #141518;
  overflow: hidden;
  
  &,
  & *,
  :before,
  :after {
    box-sizing: border-box;
  }
`,s.ZP.div`
  width: 100%;
  padding: 3rem 0 3rem;
  margin-top: 3rem;
  text-align: center;
  color: #eee;
  font-family: 'Nunito Sans',sans-serif;
  box-shadow: 0 0px 17px 0 rgba(0,0,0,0.2), 0 36px 94px 0 rgba(0,0,0,0.19);
  font-size: 0.8rem;
  word-spacing: 2px;
  background-color: #14161b;
`,s.ZP.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,s.ZP.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`,s.ZP.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
`,s.ZP.img`
  width: auto;
  height: 6rem;
  margin: 1.5rem;
  border-radius: ${e=>e.rounded?50:0}%;
  border: ${e=>e.rounded?4:0}px solid #e58e26;
`,s.ZP.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`,s.ZP.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 7px 0 rgba(0,0,0,0.2), 0 5px 22px 0 rgba(0,0,0,0.19);
  margin: 1rem;
  border-radius: 1rem;
  width: 100% !important;
  padding: 1rem;
  
  @media (max-width: 500px) {
    width: 100%;
  }
`,s.ZP.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-right: 1rem
`,s.ZP.input`
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  color: white;
  font-family: 'Nunito Sans',sans-serif;
  margin: 1rem;
  padding: 0.5rem 4rem 0.5rem 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid white;
  background: transparent;
  box-shadow: none !important;
  outline: none !important;
  cursor: text;
  width: 100%;
`,s.ZP.div`
  width: 60%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 900px) {
    width: 90%;
    padding: 1rem 0;
  }
`,s.ZP.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 900px) {
    width: 90%;
  }
`,s.ZP.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  
  p {
    min-width: auto;
  }
  
  a {
    color: #e58e26;
    text-decoration: none;
  }
`,s.ZP.div`
  width: 100%;
  padding: 7rem 0;
  margin: 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255,255,255,0.9);
  
  span {
    color: #444;
  }
  
  p {
    color: #555;
  }
  
  @media (max-width: 900px) {
    padding: 3rem 0;
  }
`,s.ZP.span`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  color: white;
  font-family: 'Nunito Sans',sans-serif;
  margin-bottom: 2rem;
`,s.ZP.p`
  width: 80%;
  min-width: 36rem;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: justify;
  color: #ddd;
  text-transform: none;
  font-family:  'Nunito Sans',sans-serif;
  
  @media (max-width: 650px) {
    width: 90%;
    min-width: auto;
    font-size: 1rem;
  }
`,s.ZP.p`
  width: 80%;
  min-width: 36rem;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: justify;
  color: #ddd;
  text-transform: none;
  font-family:  'Nunito Sans',sans-serif;

  a {
    color: #e58e26;
    text-decoration: none;
  }
  
  &:before {
    color: #fff;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
  
  &:after {
    color: #fff;
    content: close-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-left: 0.25em;
    vertical-align: -0.6em;
  }
  
  @media (max-width: 650px) {
    width: 90%;
    min-width: auto;
    font-size: 1rem;
  }
`;var I=()=>i.createElement(D,null,i.createElement(p.Z,null,i.createElement(g.ZP,{container:!0,spacing:1,justifyContent:"center",alignItems:"center"},i.createElement(g.ZP,{item:!0,xs:12,md:5,sx:{flexDirection:{xs:"column",sm:"row"}},display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"nowrap"},i.createElement("h3",null,"© 2021 ZorrillosDev Community.")))));const D=(0,b.ZP)(x.Z)((({theme:e})=>({width:"100%",background:"#14161b",padding:"3rem 0 3rem",color:"#eee",boxShadow:"0 0px 17px 0 rgba(0,0,0,0.2), 0 36px 94px 0 rgba(0,0,0,0.19)",fontFamily:" 'Nunito Sans', sans-serif",h3:{fontSize:"0.8rem",fontFamily:" 'Nunito Sans', sans-serif",fontWeight:"normal",wordSpacing:"2px"}})));var W=e=>{var t;return i.createElement(i.Fragment,null,i.createElement(A,null,null===(t=e.data)||void 0===t?void 0:t.map((e=>i.createElement(F,{href:e.profile,key:e.login},i.createElement(N,{src:null==e?void 0:e.avatar_url}))))))};const A=(0,b.ZP)(x.Z)((({theme:e})=>({width:"100%",display:"flex",alignItems:"center",justifyContent:"space-around",flexWrap:"wrap"}))),F=(0,b.ZP)("a")({display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",flexDirection:"column"}),N=(0,b.ZP)("img")({width:"auto",height:"6rem",margin:"1.5rem",borderRadius:"50%",border:"4px solid #e58e26"}),T={contributors:[{login:"geolffreym",name:"Geolffrey Mena",avatar_url:"https://avatars.githubusercontent.com/u/8823234?v=4",profile:"https://github.com/geolffreym",contributions:["mentoring","ideas","code","doc","review","userTesting","infra"]},{login:"xirapo",name:"FranciscoGarcia",avatar_url:"https://avatars.githubusercontent.com/u/12839111?v=4",profile:"https://github.com/xirapo",contributions:["doc","code"]},{login:"jadapema",name:"Jacob Peralta",avatar_url:"https://avatars.githubusercontent.com/u/14361925?v=4",profile:"https://github.com/Jadapema",contributions:["code","design","blog","ideas"]},{login:"aphelionz",name:"Mark Robert Henderson",avatar_url:"https://avatars.githubusercontent.com/u/106148?v=4",profile:"http://mrh.io",contributions:["mentoring","ideas","code","review","userTesting"]},{login:"vaultec",name:"vaultec",avatar_url:"https://avatars.githubusercontent.com/u/47548474?v=4",profile:"https://github.com/vaultec81",contributions:["ideas","userTesting","talks"]},{login:"phillmac",name:"phillmac",avatar_url:"https://avatars.githubusercontent.com/u/4534835?v=4",profile:"https://github.com/phillmac",contributions:["ideas","talks","code","userTesting","infra"]},{login:"vasa",name:"vasa",avatar_url:"https://avatars.githubusercontent.com/u/28847087?v=4",profile:"https://vaibhavsaini.com/",contributions:["review"]},{login:"danrobi11",name:"danrobi11",avatar_url:"https://avatars.githubusercontent.com/u/48020114?v=4",profile:"https://ipfs.io/ipns/k2k4r8lfpjmmno61mp5ofso67vl4pfengzeigah9bz0rw60nzpzqua0i",contributions:["ideas","userTesting","bug"]},{login:"justicenode",name:"Ѵ∑1L",avatar_url:"https://avatars.githubusercontent.com/u/26402137?v=4",profile:"https://github.com/justicenode",contributions:["ideas","bug","userTesting"]},{login:"EchedeyLR",name:"Echedenyan",avatar_url:"https://avatars.githubusercontent.com/u/56733813?v=4",profile:"https://github.com/EchedeyLR",contributions:["infra"]},{login:"Slender1808",name:"Jadson G. Matos",avatar_url:"https://avatars.githubusercontent.com/u/50336793?v=4",profile:"https://github.com/Slender1808",contributions:["ideas"]},{login:"Farickmenacode73",name:"Farick Mena",avatar_url:"https://avatars.githubusercontent.com/u/31286606?v=4",profile:"https://github.com/Farickmenacode73",contributions:["ideas","platform","userTesting"]},{login:"mathiassond",name:"mathiassond",avatar_url:"https://avatars.githubusercontent.com/u/49319141?v=4",profile:"https://github.com/mathiassond",contributions:["userTesting","bug"]},{login:"YosephKS",name:"Yoseph Kurnia Soenggoro",avatar_url:"https://avatars.githubusercontent.com/u/48710170?v=4",profile:"https://yosephks.github.io/personal_website.github.io",contributions:["ideas"]}]};var R=()=>{let e=(0,i.useRef)(null);return i.createElement(i.Fragment,null,i.createElement(M,null,i.createElement(w,null),i.createElement(O,null,i.createElement(Y,null,i.createElement(q,null,i.createElement(B,null,"Public Domain Movies Key"),i.createElement(G,null,i.createElement(H,null,i.createElement(L,{ref:e,value:{NODE_ENV:"production"}.REACT_APP_PDM_HASH,readOnly:!0}),i.createElement(S,{copy:()=>(e.current.select(),void document.execCommand("copy"))}))))),i.createElement(Y,null,i.createElement(B,null,"A movie platform with a decentralized network approach"),i.createElement(V,null,'... watching movies has overwhelmed me, I am simply limited by my time to go to the cinema. I am a movie fan but a developer with very little time to travel hours to buy a ticket and see the "latest" release of the Avengers (plus pandemic factors). ',i.createElement("br",null),i.createElement("br",null),'Somehow the internet today helps us to cope with some of these problems, the other problem is that the internet offers very few resources to see good quality movies and those who offer it do so with movies that are definitely not the "last" launch of the Avengers ',i.createElement("a",{href:"https://dev.to/geolffreym/watchit-2b88"},"read more..."))),i.createElement(K,null,i.createElement($,null,i.createElement(J,null,i.createElement(Q,{href:"https://orbitdb.org/"},i.createElement(U,{src:C})),i.createElement(Q,{href:"https://ipfs.io/"},i.createElement(U,{src:_}))),i.createElement(J,null,i.createElement(X,null,"We are part of ",i.createElement("a",{href:"https://awesome.ipfs.io/"},"Awesome IPFS")," and ",i.createElement("a",{href:"https://github.com/orbitdb/awesome-orbitdb"},"Awesome OrbitDb"),". You can be part of watchit also collaborating with the community, you can check our ",i.createElement("a",{href:"https://github.com/ZorrillosDev/watchit-desktop"},"github")," for more information.")))),i.createElement(Y,null,i.createElement(W,{data:T.contributors}))),i.createElement(I,null)))};const M=(0,b.ZP)(x.Z)((({theme:e})=>({width:"100%",height:"100%",backgroundColor:"#141518",overflow:"hidden","&, & *, :before, :after":{boxSizing:"border-box"}}))),O=(0,b.ZP)(x.Z)((({theme:e})=>({width:"100%",padding:"2rem 0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}))),q=(0,b.ZP)(x.Z)((({theme:e})=>({width:"100%",padding:"1rem 0",display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap"}))),G=(0,b.ZP)(x.Z)((({theme:e})=>({display:"flex",flexGrow:"1",flexShrink:"0",alignItems:"center",justifyContent:"center",boxShadow:"0 0 7px 0 rgba(0,0,0,0.2), 0 5px 22px 0 rgba(0,0,0,0.19)",margin:"1rem",borderRadius:"1rem",width:"100% !important",padding:"1rem","@media (max-width: 500px)":{width:"100%"}}))),H=(0,b.ZP)(x.Z)((({theme:e})=>({display:"flex",flexDirection:"column",flexGrow:"1",flexShrink:"0",alignItems:"center",justifyContent:"center",position:"relative",marginRight:"1rem"}))),L=(0,b.ZP)("input")({fontSize:"1.1rem",fontWeight:"600",textAlign:"center",color:"white",fontFamily:"'Nunito Sans',sans-serif",margin:"1rem",padding:"0.5rem 4rem 0.5rem 0.5rem",borderRadius:"0.5rem",border:"1px solid white",background:"transparent",boxShadow:"none !important",outline:"none !important",cursor:"text",width:"100%"}),Y=(0,b.ZP)(x.Z)((({theme:e})=>({width:"60%",padding:"2rem 0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center","@media (max-width: 900px)":{width:"90%",padding:"1rem 0"}}))),$=(0,b.ZP)(x.Z)((({theme:e})=>({width:"80%",display:"flex",alignItems:"center",justifyContent:"center","@media (max-width: 900px)":{width:"90%"}}))),J=(0,b.ZP)(x.Z)((({theme:e})=>({width:"50%",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",p:{minWidth:"auto"},a:{color:"#e58e26",textDecoration:"none"}}))),K=(0,b.ZP)(x.Z)((({theme:e})=>({width:"100%",padding:"7rem 0",margin:"6rem 0",display:"flex",flexCirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(255,255,255,0.9)",span:{color:"#444"},p:{color:"#555"},"@media (max-width: 900px)":{padding:"3rem 0"}}))),B=(0,b.ZP)("span")({fontSize:"2rem",fontWeight:"600",textAlign:"center",color:"white",fontFamily:"'Nunito Sans',sans-serif",marginBottom:"2rem"}),X=(0,b.ZP)("p")({width:"80%",minWidth:"36rem",fontSize:"1.2rem",fontWeight:"600",textAlign:"justify",color:"#ddd",textTransform:"none",fontFamily:"'Nunito Sans',sans-serif","@media (max-width: 650px) ":{width:"90%",minWidth:"auto",fontSize:"1rem"}}),V=(0,b.ZP)("p")({width:"80%",minWidth:"36rem",fontSize:"1.2rem",fontWeight:"600",textAlign:"justify",color:"#ddd",textTransform:"none",fontFamily:"'Nunito Sans',sans-serif",a:{color:"#e58e26",textDecoration:"none"},"&:before":{color:"#fff",content:"open-quote",fontSize:"4em",lineHeight:"0.1em",marginRight:"0.25em",verticalAlign:"-0.4em"},"&:after":{color:"#fff",content:"close-quote",fontSize:"4em",lineHeight:"0.1em",marginLeft:"0.25em",verticalAlign:"-0.6em"},"@media (max-width: 650px)":{width:"90%",minWidth:"auto",fontSize:"1rem"}}),Q=(0,b.ZP)("a")({display:"flex",alignItems:"center",justifyContent:"space-between",flexwrap:"wrap",flexDirection:"column"}),U=(0,b.ZP)("img")({width:"auto",height:"6rem",margin:"1.5rem"});r.render(i.createElement(R,null),document.getElementById("root"))},2046:function(e,t,n){e.exports=n.p+"196e7a8836aaf6c59fd4.png"},4222:function(e,t,n){e.exports=n.p+"aea73046f1f36a19100f.png"},8235:function(e,t,n){e.exports=n.p+"98be6e8ce1ebedbe7106.png"}},function(e){e.O(0,[736],(function(){return t=2758,e(e.s=t);var t}));e.O()}]);