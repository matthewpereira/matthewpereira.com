(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){},18:function(e,a,t){e.exports={gallery__pagination:"Pagination_gallery__pagination__1kupc",gallery__pageNumber:"Pagination_gallery__pageNumber__nLch7",gallery__pageArrow:"Pagination_gallery__pageArrow__1fek1",gallery__pageNumber__current:"Pagination_gallery__pageNumber__current__z-qRc"}},19:function(e,a,t){e.exports={scrollToTopLink:"ScrollToTop_scrollToTopLink__1w7j_",bodyUpdating:"ScrollToTop_bodyUpdating__1Ffio",scrollToTopLink_Visible:"ScrollToTop_scrollToTopLink_Visible__2JS4G"}},20:function(e,a,t){e.exports={section:"Section_section__1AgO3",intro:"Section_intro__2Is_w",bottom:"Section_bottom__230Qo",headline:"Section_headline__1HmK6",gallery:"Section_gallery__3GyXS",subtitle:"Section_subtitle__S_OQD"}},26:function(e,a,t){e.exports={section:"Intro_section__3j5p0",intro:"Intro_intro__3joE8",headline:"Intro_headline__3PQy4",gallery:"Intro_gallery__1DTPb",subtitle:"Intro_subtitle__3T92a"}},27:function(e,a,t){e.exports={scrollIcon:"ScrollArrow_scrollIcon__nToJe",scrollArrows:"ScrollArrow_scrollArrows__12IR0","opacity-wave":"ScrollArrow_opacity-wave__1vRkO"}},3:function(e,a,t){e.exports={galleryImage:"GalleryImage_galleryImage__3_g3p",galleryImg:"GalleryImage_galleryImg__1fXDq",galleryVideo:"GalleryImage_galleryVideo__6x7iX",sidebar:"GalleryImage_sidebar__mbUL8",bottom:"GalleryImage_bottom__2Mc9W",headline:"GalleryImage_headline__2CEua",gallery:"GalleryImage_gallery__Dng-R",subtitle:"GalleryImage_subtitle__3IJkL",moreInfo:"GalleryImage_moreInfo__2H06O",embedContainer:"GalleryImage_embedContainer__Qc7m0"}},31:function(e,a,t){e.exports={emailLink:"Email_emailLink__1Hqim"}},35:function(e,a,t){e.exports=t(56)},56:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(23),l=t.n(o),i=t(16),c=t(2),s=t(9),m=t(10),u=t(14),d=t(11),g=t(15),p=t(13),h=function(e){function a(e){var t;Object(s.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).onAlbumListChange=function(e){window.location="".concat(window.location.origin,"/?").concat(e.target.value)},t.albumListItems=function(){var e=Object.keys(t.props.allowedAlbums).slice(1,t.props.allowedAlbums.length);return["Choose an album to view..."].concat(e).map(function(e,a){return r.a.createElement("option",{key:a,value:t.props.allowedAlbums[e]},e)})},t.render=function(){return t.state.showList?r.a.createElement("div",{style:{display:"flex",height:"100vh",width:"100vw",alignItems:"center",justifyContent:"center",position:"fixed",zIndex:"1000",background:"rgba(255,255,255,0.75)"}},r.a.createElement("select",{onChange:t.onAlbumListChange},t.albumListItems())):null},t.state={showList:!1};var n=t.konami(function(){t.setState({showList:!0})});return window.addEventListener("keydown",n),t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"konami",value:function(e){var a=[];return function(t){a.push(t.keyCode),a.toString().indexOf("38,38,40,40,37,39,37,39,66,65")>=0&&(e(),a=[])}}}]),a}(r.a.Component),y=t(31),f=t.n(y),b=function(e){return r.a.createElement("div",null,r.a.createElement("a",{className:f.a.emailLink,href:"mailto:"+e.email,target:"_blank",rel:"noopener noreferrer"}," "))},_=t(32),v=t.n(_),w=t(20),E=t.n(w),k=function(e){return r.a.createElement("div",{className:"".concat(E.a[e.type]," ").concat(E.a.section," ").concat(E.a[e.captions])},e.children)},C=t(3),T=t.n(C),I=t(7),N={convertShortnames:!0,convertUnicode:!0,convertAscii:!0,style:{height:24,top:-1}},S=function(e){var a=e.image,t=e.index,n=e.type,o=e.width,l=e.height,i=e.captions;return a.description&&a.description.indexOf("youtube")>-1?r.a.createElement(k,{type:"youtube"},r.a.createElement("div",{className:T.a.sidebar}),r.a.createElement("div",{className:T.a.embedContainer},r.a.createElement("iframe",{title:"Video",width:"1280",height:"720",src:a.description.split(" ").join(""),frameBorder:"0","data-allow":"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))):n.indexOf("video")>-1?r.a.createElement(k,{type:"video",captions:i},r.a.createElement("div",{className:T.a.sidebar+" "+T.a[i]},a.title?r.a.createElement("div",{className:T.a.headline},Object(I.emojify)(a.title,N)):null,a.description?r.a.createElement("div",{className:T.a.subtitle},Object(I.emojify)(a.description,N)):null,a.info?r.a.createElement("div",{className:T.a.moreInfo},Object(I.emojify)(a.info,N)):null),r.a.createElement("video",{width:o||640,height:l||480,className:T.a.galleryVideo,autoPlay:"true",controls:"true",loop:"true"},r.a.createElement("source",{src:a.link,type:"video/mp4"}))):r.a.createElement(k,{type:"image",captions:i},r.a.createElement("div",{className:T.a.sidebar+" "+T.a[i]},a.title?r.a.createElement("div",{className:T.a.headline},Object(I.emojify)(a.title,N)):null,a.description?r.a.createElement("div",{className:T.a.subtitle},Object(I.emojify)(a.description,N)):null,a.info?r.a.createElement("div",{className:T.a.moreInfo},Object(I.emojify)(a.info,N)):null),r.a.createElement(v.a,{height:window.innerHeight,offset:3e3},r.a.createElement("img",{alt:"-w",src:a.link,className:T.a.galleryImg+" "+t})))},B=t(18),O=t.n(B),P=function(e){var a=e.currentPage,t=(e.pageCount,e.pathName);return parseInt(a)<2?null:r.a.createElement("div",{className:O.a.gallery__pageArrow},r.a.createElement(i.b,{to:"".concat(t,"#").concat(a-1)},"<"))},j=function(e){var a=e.currentPage,t=e.pageCount,n=e.pathName;return a>=t?null:r.a.createElement("div",{className:O.a.gallery__pageArrow},r.a.createElement(i.b,{to:"".concat(n,"#").concat(a+1)},">"))},A=function(e){var a=e.currentPage,t=e.pageNumber,n=e.pathName;return a.toString()===t.toString()?r.a.createElement("div",{className:O.a.gallery__pageNumber__current},t):r.a.createElement("div",{className:O.a.gallery__pageNumber},r.a.createElement(i.b,{to:"".concat(n,"#").concat(t)},t))},L=Object(c.e)(function(e){var a=e.currentPage,t=e.pageCount,n=e.location;if(t<2)return null;for(var o=[],l=0;l<t;l++)o.push(l+1);return r.a.createElement("div",{className:O.a.gallery__pagination},r.a.createElement(P,{currentPage:parseInt(a),pageCount:parseInt(t),pathName:n.search}),o.map(function(e){return r.a.createElement(A,{key:e,pageNumber:e,currentPage:a,pageCount:t,pathName:n.search})}),r.a.createElement(j,{currentPage:a,pageCount:t,pathName:n.search}))}),x=function(e,a,t){var n;return function(){var r=this,o=arguments,l=t&&!n;clearTimeout(n),n=setTimeout(function(){n=null,t||e.apply(r,o)},a),l&&e.apply(r,o)}},D=t(19),M=t.n(D),W=document.getElementsByTagName("BODY")[0],F=function(e,a){return e.indexOf(a)>-1},J=function(e,a){var t=e.className,n=F(t,a)?t:t.concat(" ").concat(a);return e.className=n},G=function(e,a){var t=e.className,n=F(t,a)?t.replace(a,""):t;return e.className=n},H=Object(c.e)(function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(o)))).toggleScrollToTopLink=function(){return x(function(){var e=document.querySelector("[data-scrolltarget]");window.scrollY||window.scrollTop||document.getElementsByTagName("html")[0].scrollTop>1e3?J(e,M.a.scrollToTopLink_Visible):G(e,M.a.scrollToTopLink_Visible)},250)},t.render=function(){return r.a.createElement("div",{className:M.a.scrollToTopLink,"data-scrolltarget":!0,onClick:t.scrollToTop})},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentWillMount",value:function(){window.addEventListener("scroll",this.toggleScrollToTopLink())}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.toggleScrollToTopLink())}},{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&this.scrollToTop(!0)}},{key:"scrollToTop",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]?M.a.bodyUpdating:"";Promise.resolve().then(function(){J(W,e)}).then(function(e){return new Promise(function(a){return setTimeout(function(){return a(e)},250)})}).then(function(){var e=window.innerHeight+35;document.body.scrollTop=document.documentElement.scrollTop=e}).then(function(e){return new Promise(function(a){return setTimeout(function(){return a(e)},750)})}).then(function(){G(W,e)})}}]),a}(r.a.Component)),R=t(12),U=t.n(R),z=function(e){var a=e.image;return r.a.createElement("img",{alt:"-",src:a.link,className:U.a.image,style:{height:0,width:0,opacity:0}})},Y=Object(c.e)(function(e){var a=e.images,t=e.captions,n=e.location;if(!a.length)return null;var o=n.hash.replace(/#/,""),l=o.length&&o>0?o:1,i=a,c=[];if(a.length>50){var s=0+50*l-50;i=a.slice(s,s+50),c=a.slice(s+50,s+50+1)}var m=Math.ceil(a.length/50);return r.a.createElement("div",{className:U.a.gallery},i.map(function(e,a){return r.a.createElement(S,{key:a,image:e,index:a,type:e.type,width:e.width,height:e.height,captions:t})}),c.length?r.a.createElement(z,{image:c[0]}):null,r.a.createElement(L,{pageCount:m,currentPage:l}),r.a.createElement(H,null))}),V=t(26),Q=t.n(V),Z=function(e){var a=e.title,t=e.description;return r.a.createElement(k,{type:"intro"},r.a.createElement("div",{className:Q.a.headline},a),r.a.createElement("div",{className:Q.a.subtitle},t))},X=function(){return r.a.createElement("svg",{width:"107px",height:"66px",viewBox:"0 0 107 66",version:"1.1"},r.a.createElement("g",{id:"artBoard",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"downArrow",fill:"#0D1921"},r.a.createElement("path",{d:"M40.644664,59.1522007 C47.74447,67.611703 59.2538818,67.6136669 66.355336,59.1522007 L103.144664,15.317284 C110.24447,6.85778163 107.047943,-1.42108547e-14 96.0032364,-1.42108547e-14 L10.9967636,-1.42108547e-14 C-0.0471439953,-1.42108547e-14 -3.24611823,6.85581776 3.85533604,15.317284 L40.644664,59.1522007 Z",id:"Triangle-1-Copy-3"}))))},q=t(27),K=t.n(q),$=function(e){return e.show?r.a.createElement("div",{className:K.a.scrollIcon,onClick:e.onClick},r.a.createElement("div",{className:K.a.scrollArrows},r.a.createElement(X,null),r.a.createElement(X,null),r.a.createElement(X,null))):null},ee={"base gallery":"6Hpyr","Lilith Robin Wylie Freake":"J5lWN33","Pivotal X Curling":"o33snyp","Julia & Aodhan's Baby Shower":"LWmkCoX","Connell's 16th Birthday Party":"5h8i28I","Spring One Platform 2019":"u8o2fDA","Dad's 75th Birthday Party":"7OkSeFo","Tobermory and Cyprus Lake Camping":"s23So5d","Pivotal Beach Day 2019":"5Fm0PDU","Pivotal Island 2019":"0877UpO","Canada Day 2019":"Q7Q6wUd","Desjardins Montreal":"BZufJMj","San Francisco 2019":"9arTNBF","CF Summit Philadelphia 2019":"kCTI9nN","Jordyn's 9th Birthday 2019":"0ve7Az0","Pereira Christmas 2018":"IhQzB2T","Cura\xe7ao 2018":"3IxD68y","Justin's Birthday 2018":"CZYNm","Yasmin's Baby Mikael":"MqfQ2Bm","Julia and Aodhan's Wedding":"dBNUoTc","Fake Boos, Halloween 2018":"OmwE35S","Canada's Wonderland":"uo9IRDN","Matthew and Alex's Wedding BW":"5cl2AOr","Matthew and Alex's Wedding":"GxGFWK6","Julia and Aodhan":"snobRBm","Cottaging 2018-08-03":"EjfU9R5","Statflo Barbecue":"jTGEisX","Wells Hill Park":"6LzWWez","Trinity Bellwoods with Friendsday friends":"lBB2fBz","AB BC Road Trip 2018":"zisKD4A","Mom's Birthday 2018":"Dq1xiRO","Wes and Morgan and the kids at Trinity Bellwoods":"Z7eHCbx","Statflo Product Offsite 2018":"pTHw6ZO","Friendsday Farewell Barbecue":"WTO49bj","Pereira Easter 2018":"SQ3UDDm","Statflo Potluck 2018":"13FJNN3","Augusta and Olive'":"fC54L","Lizfest 2018":"gJzWn","Delayed New Years at Shelbie and Ryan's":"OMSHY","Pereira Christmas 2017":"mUg4z","Jordyn's 8th Birthday 2018":"3b7oE","Phil's Super Soft Birthday":"GtGmk","Statflo at Rec Room":"Mayck","iQmetrix Winnipeg 2018":"CUPtE","Justin's birthday 2017":"CZYNm","Games night at Jordan and Nicole's":"IlYgP","Ottawa New Years 2018":"1ztbC","Statflo at BATL":"4DScr","Halloween at Wes and Morgan's 2017":"Qcxgb","Halloween 2017":"bpa5q","Iceland 2017":"RZcF4","Belleville 2017":"nuxA0","Robin's Birthday 2017":"0K45k","Celeste at Trillium Park":"XMEfZfv","The Fix Ice Cream Shop":"oKXXB","Statflo Barbecue 2017":"rBfPF","Wes Kait Chris Jasper Augusta Jacob":"OHio2","August Long Weekend 2017":"IGnD1","Canada Day with Jess and Alex":"WZzKm","Pie day at Statflo":"ang7R","St Lucia":"mlQaJ","Pereira Christmas 2016":"3pP6c","Statflo Christmas Party 2016":"01B2c","Halloween 2016 at Wes and Morgan's":"eVOZf","Spook Me Like One of Your French Girls (Halloween 2016)":"hjNvg","Statflo at Mengrai":"SqJ0r","August Long Weekend at the Cottage 2016":"AlXYh","Labour Day 2016 at the Cottage":"5JQVZ","Dad's Birthday 2016-09-25":"DDYYq","Statflo Goodbye Lunch":"VZJjm","Friendsday Trinity Bellwoods":"Lk2aW","Julia's Cats":"q5uqT","OneEleven Boat Cruise":"P2ysk","Jasper and Olive":"huRdJ","Toronto Island with Celeste":"A0d80","Barbecue at Brian and Melody's":"rOM63","Celeste's Grad Party":"q98ao","Owen at Statflo":"g6uxa","Wine Tasting trip with Phil and Nikky":"HEY71","Matt and Celeste at Dave's Birthday":"7g9Rv","Holiday Pictures":"as2L5","Kait and Chris' wedding":"crbpP","Flea Market":"UmxwY","Labour day at Hanlan's Point":"DNyjC","Sandbanks with Nikky and Phil":"l5ON6","Austra and Tribe Called Red":"c44Dh","Barbecue at Wes and Morgan's":"PfzzJ","Celeste and Matthew go to Paris":"SuwHL","Belleville Trip":"4p5Kk","Toronto Global Game Jam 2015":"8OXhc","Jasper's first birthday 2015":"fFb08","Shelbie and Ryan's Birthday 2015":"x88HI","Badlands with Nicole":"00gld","Innisfil 2014":"VXBAU","Friendsday Go Karting":"eBf7k","Friendsday Ribsday":"rgEYp","Pancake Party at Nicole's":"TPJD5","Cottage 2014 Connell and Bray":"OVK35","Sohn at the Horseshoe":"XPivzx7","Flip Cup Friday":"3F5AU","Festive Friendsday":"Byn7D","Board Games at Wes and Morgan's":"jofpF","Shelbie and Ryan's Birthday Bash":"gpZyA","Jasper's baby photos":"wV2vZ","Innisfil 2013":"hmwlt","Wes and Morgan's baby shower":"asLHt","OCAD beach party":"uFi37","Dinner at Wes and Morgan's":"c6C6p","Melody and Brian's barbecue":"EK1TV","Barbecue at Morgan and Wesley's - 2013-05-29":"5gxSY","Rooftop Barbecue at Brian and Melody's":"kDk0V","Cadillacs and Cadavers at Stones Place":"vDwNE","May 2013 Snapshots":"9A5me","Steve's Thailand Trip":"viBQGRm"},ae="6Hpyr",te=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).validateAlbum=function(e){return Object.values(ee).indexOf(e)>-1},t.styleCaptions=function(e){return e!==ae?"bottom":"right"},t.formatTitle=function(e){return e?"".concat(e," - Matthew Pereira"):"Matthew Pereira"},t.hydrateGalleryState=function(e,a){var n=t.styleCaptions(a),r=e.data.images,o=e.data.description||"";document.title=t.formatTitle(e.data.title);var l=e.data.title||"Matthew Pereira";t.setState({loadedImages:r,albumName:l,description:o,captions:n})},t.onScrollClick=function(){var e=document.getElementsByClassName(U.a.intro)[0].scrollHeight+35;document.body.scrollTop=document.documentElement.scrollTop=e},t.render=function(){return r.a.createElement("div",null,r.a.createElement(h,{allowedAlbums:ee}),r.a.createElement(b,{email:t.state.email}),r.a.createElement(Z,{title:t.state.albumName,description:t.state.description}),r.a.createElement($,{show:t.state.loadedImages.length,onClick:t.onScrollClick}),r.a.createElement(Y,{images:t.state.loadedImages,captions:t.state.captions}))},t.state={email:"mail@matthewpereira.com",albumName:"",description:"",loadedImages:[],captions:!1},t.onScrollClick=t.onScrollClick.bind(Object(g.a)(t)),t.fetchImagesFromImgur=t.fetchImagesFromImgur.bind(Object(g.a)(t)),t.validateAlbum=t.validateAlbum.bind(Object(g.a)(t)),t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentWillMount",value:function(){document.getElementById("app").classList.remove("app__loading");var e=Object.keys(this.props.match.params).length?this.props.match.params.albumId:this.props.location.search.slice(1);if(!this.validateAlbum(e))return this.props.history.push("/"),this.fetchImagesFromImgur(ae);this.fetchImagesFromImgur(e)}},{key:"fetchImagesFromImgur",value:function(e){var a=this,t={headers:{Authorization:"Client-ID 0deeb4de7f631f1"}};fetch("https://api.imgur.com/3/album/".concat(e),t).then(function(e){return e.json()}).then(function(t){return a.hydrateGalleryState(t,e)}).catch(function(e){console.error("Abort, abort!",e)})}}]),a}(r.a.Component),ne=Object(c.e)(te),re=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(c.a,{path:"/:albumId",component:ne}),r.a.createElement(c.a,{exact:!0,path:"/",component:ne})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(re,null),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.2e494fc6.chunk.js.map