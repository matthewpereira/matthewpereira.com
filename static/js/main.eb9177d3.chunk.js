(this["webpackJsonpmatthewpereira.com"]=this["webpackJsonpmatthewpereira.com"]||[]).push([[0],{15:function(e,a,t){e.exports={gallery__pagination:"Pagination_gallery__pagination__1kupc",gallery__pageNumber:"Pagination_gallery__pageNumber__nLch7",gallery__pageArrow:"Pagination_gallery__pageArrow__1fek1",gallery__pageNumber__current:"Pagination_gallery__pageNumber__current__z-qRc"}},16:function(e,a,t){e.exports={section:"Section_section__1AgO3",intro:"Section_intro__2Is_w",bottom:"Section_bottom__230Qo",headline:"Section_headline__1HmK6",gallery:"Section_gallery__3GyXS",subtitle:"Section_subtitle__S_OQD"}},17:function(e,a,t){e.exports={scrollToTopLink:"ScrollToTop_scrollToTopLink__1w7j_",bodyUpdating:"ScrollToTop_bodyUpdating__1Ffio",scrollToTopLink_Visible:"ScrollToTop_scrollToTopLink_Visible__2JS4G"}},2:function(e,a,t){e.exports={galleryImage:"GalleryImage_galleryImage__3_g3p",galleryImg:"GalleryImage_galleryImg__1fXDq",galleryVideo:"GalleryImage_galleryVideo__6x7iX",sidebar:"GalleryImage_sidebar__mbUL8",bottom:"GalleryImage_bottom__2Mc9W",headline:"GalleryImage_headline__2CEua",gallery:"GalleryImage_gallery__Dng-R",subtitle:"GalleryImage_subtitle__3IJkL",moreInfo:"GalleryImage_moreInfo__2H06O",embedContainer:"GalleryImage_embedContainer__Qc7m0"}},21:function(e,a,t){e.exports={wrapper:"SidebarButton_wrapper__3kmkZ",sidebarButton:"SidebarButton_sidebarButton__iwS8L"}},24:function(e,a,t){e.exports={section:"Intro_section__3j5p0",intro:"Intro_intro__3joE8",headline:"Intro_headline__3PQy4",gallery:"Intro_gallery__1DTPb",subtitle:"Intro_subtitle__3T92a"}},25:function(e,a,t){e.exports={scrollIcon:"ScrollArrow_scrollIcon__nToJe",scrollArrows:"ScrollArrow_scrollArrows__12IR0","opacity-wave":"ScrollArrow_opacity-wave__1vRkO"}},26:function(e,a,t){e.exports={bodyUpdating:"App_bodyUpdating__34fLM",sidebar:"App_sidebar__1NkmM"}},33:function(e,a,t){e.exports={gallery:"Gallery_gallery__V5mct",section:"Gallery_section__NZPPR",image:"Gallery_image__3JYCN",video:"Gallery_video__38pSe",sidebar:"Gallery_sidebar__Xd6JO",headline:"Gallery_headline__brh6h",subtitle:"Gallery_subtitle__2DfU7"}},54:function(e,a,t){"use strict";t.r(a);var n,r=t(0),i=t.n(r),l=t(20),o=t.n(l),s=t(14),c=t(1),d=t(10),u=t(11),m=t(8),h=t(13),p=t(12),g=t(7),y=t.n(g),b=function(){return i.a.createElement("div",{className:y.a.aboutContainer},i.a.createElement("div",{className:y.a.aboutInner},i.a.createElement("div",{className:y.a.headline},"Matthew Pereira"),i.a.createElement("div",{className:y.a.subtitle},"Sr. Product Designer II at ",i.a.createElement("a",{href:"https://auth0.com"},"Auth0.com"),". Formerly Sr. Product Design Lead at ",i.a.createElement("a",{href:"http://vmware.com"},"VMware"),"."),i.a.createElement("div",{className:y.a.subtitle},i.a.createElement("a",{className:y.a.aboutLink,href:"https://portfolio.matthewpereira.com/"},"Visit Product Design Portfolio")," \xa0\xa0or\xa0\xa0 ",i.a.createElement("a",{className:y.a.aboutLink,href:"https://www.linkedin.com/in/matthewpereira/"},"Contact at Linkedin"))))},f=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(e){var n;Object(d.a)(this,t),(n=a.call(this,e)).onAlbumListChange=function(e){window.location="".concat(window.location.origin,"/?").concat(e.target.value)},n.albumListItems=function(){var e=Object.keys(n.props.allowedAlbums).slice(1,n.props.allowedAlbums.length);return["Choose an album to view..."].concat(e).map((function(e,a){return i.a.createElement("option",{key:a,value:n.props.allowedAlbums[e]},e)}))},n.render=function(){return n.state.showList?i.a.createElement("div",{style:{display:"flex",height:"100vh",width:"100vw",alignItems:"center",justifyContent:"center",position:"fixed",zIndex:"1000",background:"rgba(255,255,255,0.75)"}},i.a.createElement("select",{onChange:n.onAlbumListChange},n.albumListItems())):null},n.state={showList:!1};var r=n.konami((function(){n.setState({showList:!0})}));return window.addEventListener("keydown",r),n}return Object(u.a)(t,[{key:"konami",value:function(e){var a=[];return function(t){a.push(t.keyCode),a.toString().indexOf("38,38,40,40,37,39,37,39,66,65")>=0&&(e(),a=[])}}}]),t}(i.a.Component),_=t(21),v=t.n(_),w=function(e){return i.a.createElement("div",{className:v.a.wrapper},i.a.createElement("a",{onClick:e.onClick,className:v.a.sidebarButton,href:e.hyperlink,target:e.target,rel:"_blank"===e.target?"noopener noreferrer":null},e.label))},k=t(30),E=t.n(k),C=t(16),B=t.n(C),P=function(e){var a=B.a[e.captions]?B.a[e.captions]:"",t="intro"===e.type?B.a.intro:"";return i.a.createElement("div",{className:"".concat(t," ").concat(B.a.section," ").concat(a)},e.children)},S=t(2),T=t.n(S),N=t(6),I={convertShortnames:!0,convertUnicode:!0,convertAscii:!0,style:{height:24,top:-1}},O=/\[([\w\s\d'"]+)\]\((https?:\/\/[\w\d./?=#]+)\)/g,A=/\[([\w\s\d'"]+)\]\((https?:\/\/[\w\d./?=#]+)\)/,j=function(e){var a=[];return e.forEach((function(e){var t,n,r=e.match(A),l=(t=r[1],n=r[2],i.a.createElement("a",{href:n,key:t.substr(0,4)},t));a.push({linkElement:l,original:r[0]})})),a},L=function(e){var a,t=(a=e,Array.isArray(a)?a[0]:a),n=function(e){var a=e.match(O);return!!a&&j(a)}(t);return n.length?function(e,a){var t=[];return a.forEach((function(a){var n=t.length?t[t.length-1].split(a.original):e.split(a.original);t.pop(),t.push(n[0]),t.push(a.linkElement),t.push(n[1])})),t}(t,n).map((function(e){return"string"===typeof e?Object(N.emojify)(e,I):e})):Object(N.emojify)(t,I)},M=function(e){var a=e.image,t=e.index,n=e.type,r=e.width,l=e.height,o=e.captions;return a.description&&a.description.indexOf("youtube")>-1?i.a.createElement(P,{type:"youtube"},i.a.createElement("div",{className:T.a.sidebar}),i.a.createElement("div",{className:T.a.embedContainer},i.a.createElement("iframe",{title:"Video",width:"1280",height:"720",src:a.description.split(" ").join(""),frameBorder:"0","data-allow":"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))):n.indexOf("video")>-1?i.a.createElement(P,{type:"video",captions:o},i.a.createElement("div",{className:T.a.sidebar+" "+T.a[o]},a.title?i.a.createElement("div",{className:T.a.headline},Object(N.emojify)(a.title,I)):null,a.description?i.a.createElement("div",{className:T.a.subtitle},Object(N.emojify)(a.description,I)):null,a.info?i.a.createElement("div",{className:T.a.moreInfo},Object(N.emojify)(a.info,I)):null),i.a.createElement("video",{width:r||640,height:l||480,className:T.a.galleryVideo,autoPlay:"true",controls:"true",loop:"true"},i.a.createElement("source",{src:a.link,type:"video/mp4"}))):i.a.createElement(P,{type:"image",captions:o},i.a.createElement("div",{className:T.a.sidebar+" "+T.a[o]},a.title?i.a.createElement("div",{className:T.a.headline},Object(N.emojify)(a.title,I)):null,a.description?i.a.createElement("div",{className:T.a.subtitle},L(a.description)):null,a.info?i.a.createElement("div",{className:T.a.moreInfo},Object(N.emojify)(a.info,I)):null),i.a.createElement(E.a,{height:window.innerHeight,offset:3e3},i.a.createElement("img",{alt:"-w",src:a.link,className:T.a.galleryImg+" "+t})))},J=t(15),D=t.n(J),x=function(e){var a=e.currentPage,t=e.pathName;return parseInt(a)<2?null:i.a.createElement("div",{className:D.a.gallery__pageArrow},i.a.createElement(s.b,{to:"".concat(t,"#").concat(a-1)},"<"))},G=function(e){var a=e.currentPage,t=e.pageCount,n=e.pathName;return a>=t?null:i.a.createElement("div",{className:D.a.gallery__pageArrow},i.a.createElement(s.b,{to:"".concat(n,"#").concat(parseInt(a)+1)},">"))},W=function(e){var a=e.currentPage,t=e.pageNumber,n=e.pathName;return a.toString()===t.toString()?i.a.createElement("div",{className:D.a.gallery__pageNumber__current},t):i.a.createElement("div",{className:D.a.gallery__pageNumber},i.a.createElement(s.b,{to:"".concat(n,"#").concat(t)},t))},F=Object(c.e)((function(e){var a=e.currentPage,t=e.pageCount,n=e.location;if(t<2)return null;for(var r=[],l=0;l<t;l++)r.push(l+1);return i.a.createElement("div",{className:D.a.gallery__pagination},i.a.createElement(x,{currentPage:parseInt(a),pageCount:parseInt(t),pathName:n.search}),r.map((function(e){return i.a.createElement(W,{key:e,pageNumber:e,currentPage:a,pageCount:t,pathName:n.search})})),i.a.createElement(G,{currentPage:a,pageCount:t,pathName:n.search}))})),H=function(e,a,t){var n;return function(){var r=this,i=arguments,l=function(){n=null,t||e.apply(r,i)},o=t&&!n;clearTimeout(n),n=setTimeout(l,a),o&&e.apply(r,i)}},R=t(17),V=t.n(R),U=document.getElementsByTagName("BODY")[0],z=function(e,a){return e.indexOf(a)>-1},K=function(e,a){var t=e.className,n=z(t,a)?t:t.concat(" ").concat(a);return e.className=n},q=function(e,a){var t=e.className,n=z(t,a)?t.replace(a,""):t;return e.className=n},Q=Object(c.e)(function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).toggleScrollToTopLink=function(){return H((function(){var e=document.querySelector("[data-scrolltarget]");e&&(window.scrollY||window.scrollTop||document.getElementsByTagName("html")[0].scrollTop>1e3?K(e,V.a.scrollToTopLink_Visible):q(e,V.a.scrollToTopLink_Visible))}),250)},e.render=function(){return i.a.createElement("div",{className:V.a.scrollToTopLink,"data-scrolltarget":!0,onClick:e.scrollToTop})},e}return Object(u.a)(t,[{key:"componentWillMount",value:function(){window.addEventListener("scroll",this.toggleScrollToTopLink())}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.toggleScrollToTopLink())}},{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&this.scrollToTop(!0)}},{key:"scrollToTop",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=e?V.a.bodyUpdating:"";Promise.resolve().then((function(){K(U,a)})).then((function(e){return new Promise((function(a){return setTimeout((function(){return a(e)}),250)}))})).then((function(){var e=window.innerHeight+35;document.body.scrollTop=document.documentElement.scrollTop=e})).then((function(e){return new Promise((function(a){return setTimeout((function(){return a(e)}),1250)}))})).then((function(){q(U,a)}))}}]),t}(i.a.Component)),Y=function(e){var a=e.image;return i.a.createElement("img",{alt:"Preloading...",key:a.id,src:a.link,style:{height:1,width:1,opacity:.1,position:"absolute",left:-1,bottom:-100}})},Z=t(33),X=t.n(Z),$=50,ee=function(e,a){return e.slice(a,a+1)},ae=Object(c.e)((function(e){var a=e.images,t=e.captions,n=e.location;if(!a||!a.length)return null;var r=n.hash.replace(/#/,""),l=r.length&&r>0?r:1,o=a,s=[];if(a.length>$){var c=0+l*$-$;o=a.slice(c,c+$);var d=0!==c;a.length>c+$&&s.push.apply(s,[ee(a,c+$)[0]]),d&&s.push.apply(s,[ee(a,c-1)[0]])}var u=Math.ceil(a.length/$);return i.a.createElement("div",{className:X.a.gallery},o.map((function(e,a){return i.a.createElement(M,{key:a,image:e,index:a,type:e.type,width:e.width,height:e.height,captions:t})})),s?s.map((function(e,a){return i.a.createElement(Y,{key:a,image:e})})):null,i.a.createElement(F,{pageCount:u,currentPage:l}),i.a.createElement(Q,null))})),te=t(24),ne=t.n(te),re=function(e){var a=e.title,t=e.description;return i.a.createElement(P,{type:"intro"},i.a.createElement("div",{className:ne.a.headline},a),i.a.createElement("div",{className:ne.a.subtitle},t))},ie=function(){return i.a.createElement("svg",{width:"107px",height:"66px",viewBox:"0 0 107 66",version:"1.1"},i.a.createElement("g",{id:"artBoard",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},i.a.createElement("g",{id:"downArrow",fill:"#0D1921"},i.a.createElement("path",{d:"M40.644664,59.1522007 C47.74447,67.611703 59.2538818,67.6136669 66.355336,59.1522007 L103.144664,15.317284 C110.24447,6.85778163 107.047943,-1.42108547e-14 96.0032364,-1.42108547e-14 L10.9967636,-1.42108547e-14 C-0.0471439953,-1.42108547e-14 -3.24611823,6.85581776 3.85533604,15.317284 L40.644664,59.1522007 Z",id:"Triangle-1-Copy-3"}))))},le=t(25),oe=t.n(le),se=function(e){return e.show?i.a.createElement("div",{className:oe.a.scrollIcon,onClick:e.onClick},i.a.createElement("div",{className:oe.a.scrollArrows},i.a.createElement(ie,null),i.a.createElement(ie,null),i.a.createElement(ie,null))):null},ce=t(5),de=(n={"base gallery":"6Hpyr","Algonquin Camping 2021":"xy0BP18","Shelbie, Ryan, Holly, and Friends":"k8zCJWo","Scouting Halifax August 2021":"MLKSUlc","Bruce Trail - Family Day":"fBTCeKF","Mono Cliffs Park":"wTrxgrE","Lake Superior 2020":"exzH2Zt","Lily - 2020/09/26":"KIdnHx0",Essaouira:"xpQ6wBg",Casablanca:"RH6bfwp",Tangier:"JqqzFEE",Chefchouen:"tJkhQXP",Fes:"6nynvVU","Desert Tour":"KiyHBDY",Marrakesh:"3orEGgh","Lilith Robin Wylie Freake":"J5lWN33","Pivotal X Curling":"o33snyp","Jordyn's 10th Birthday":"IQQ0aRY","Concourse at Kinka Izakaya":"aUCl8WH","Pereira Christmas 2019":"rJzFm6W","Julia & Aodhan's Baby Shower":"LWmkCoX","Connell's 16th Birthday Party":"5h8i28I","Spring One Platform 2019":"u8o2fDA","Dad's 75th Birthday Party":"7OkSeFo","Tobermory and Cyprus Lake Camping":"s23So5d","Pivotal Beach Day 2019":"5Fm0PDU","Pivotal Island 2019":"0877UpO","Canada Day 2019":"Q7Q6wUd","Montreal w Shelbie and Ryan":"HiGJTLG","Desjardins Montreal":"BZufJMj","San Francisco 2019":"9arTNBF","CF Summit Philadelphia 2019":"kCTI9nN","Jordyn's 9th Birthday 2019":"0ve7Az0","Pereira Christmas 2018":"IhQzB2T","Cura\xe7ao 2018":"3IxD68y","Justin's Birthday 2018":"CZYNm","Yasmin's Baby Mikael":"MqfQ2Bm","Julia and Aodhan's Wedding":"dBNUoTc","Fake Boos, Halloween 2018":"OmwE35S","Canada's Wonderland":"uo9IRDN","Matthew and Alex's Wedding BW":"5cl2AOr","Matthew and Alex's Wedding":"GxGFWK6","Julia and Aodhan":"snobRBm","Cottaging 2018-08-03":"EjfU9R5","Statflo Barbecue":"jTGEisX","Wells Hill Park":"6LzWWez","Lizfest 2018":"gJzWn","Trinity Bellwoods with Friendsday friends":"lBB2fBz","AB BC Road Trip 2018":"zisKD4A","Wes and Morgan and the kids at Trinity Bellwoods":"Z7eHCbx","Statflo Product Offsite 2018":"pTHw6ZO","Friendsday Farewell Barbecue":"WTO49bj","Pereira Easter 2018":"SQ3UDDm","Mom's Birthday 2018":"Dq1xiRO","Statflo Potluck 2018":"13FJNN3","Augusta and Olive'":"fC54L","iQmetrix Winnipeg 2018":"CUPtE","Delayed New Years at Shelbie and Ryan's":"OMSHY","Pereira Christmas 2017":"mUg4z","Jordyn's 8th Birthday 2018":"3b7oE","Phil's Super Soft Birthday":"GtGmk","Statflo at Rec Room":"Mayck","Darya's Statflo Goodbye":"lK4Tll3","Justin's birthday 2017":"CZYNm","Games night at Jordan and Nicole's":"IlYgP","Ottawa New Years 2018":"1ztbC","Statflo at BATL":"4DScr","Halloween at Wes and Morgan's 2017":"Qcxgb","Halloween 2017":"bpa5q","Iceland 2017":"RZcF4","Belleville 2017":"nuxA0","Robin's Birthday 2017":"0K45k","Celeste at Trillium Park":"XMEfZfv","The Fix Ice Cream Shop":"oKXXB","Statflo Barbecue 2017":"rBfPF","Wes Kait Chris Jasper Augusta Jacob":"OHio2","August Long Weekend 2017":"IGnD1","Canada Day with Jess and Alex":"WZzKm","Pie day at Statflo":"ang7R","St Lucia":"mlQaJ","Pereira Christmas 2016":"3pP6c","Statflo Christmas Party 2016":"01B2c","Halloween 2016 at Wes and Morgan's":"eVOZf","Spook Me Like One of Your French Girls (Halloween 2016)":"hjNvg","Statflo at Mengrai":"SqJ0r","August Long Weekend at the Cottage 2016":"AlXYh","Labour Day 2016 at the Cottage":"5JQVZ","Dad's Birthday 2016-09-25":"DDYYq","Statflo Goodbye Lunch":"VZJjm","Friendsday Trinity Bellwoods":"Lk2aW","Jasper's 2nd Birthday":"W14q32f","Julia's Cats":"q5uqT","OneEleven Boat Cruise":"P2ysk","Jasper and Olive":"huRdJ","Toronto Island with Celeste":"A0d80","Barbecue at Brian and Melody's":"rOM63","Celeste's Grad Party":"q98ao","Owen at Statflo":"g6uxa","Wine Tasting trip with Phil and Nikky":"HEY71","Matt and Celeste at Dave's Birthday":"7g9Rv","Holiday Pictures":"as2L5","Kait and Chris' wedding":"crbpP","Flea Market":"UmxwY","Labour day at Hanlan's Point":"DNyjC","Sandbanks with Nikky and Phil":"l5ON6","Austra and Tribe Called Red":"c44Dh","Barbecue at Wes and Morgan's":"PfzzJ","Celeste and Matthew go to Paris":"SuwHL","Belleville Trip":"4p5Kk","Toronto Global Game Jam 2015":"8OXhc","Jasper's first birthday 2015":"fFb08","Shelbie's 30th Birthday":"zNnsrq2","Badlands with Nicole":"00gld","Innisfil 2014":"VXBAU","Friendsday Go Karting":"eBf7k","Friendsday Ribsday":"rgEYp","Pancake Party at Nicole's":"TPJD5","Cottage 2014 Connell and Bray":"OVK35","Nicole's 30th Birthday":"1Qi4pp7","Sohn at the Horseshoe":"XPivzx7","Flip Cup Friday":"3F5AU","Festive Friendsday":"Byn7D","Board Games at Wes and Morgan's":"jofpF","Shelbie and Ryan's Birthday Bash":"gpZyA","Jasper's baby photos":"wV2vZ","Innisfil 2013":"hmwlt","Nicole's Farewell to the 20s":"iVqqKp7","Wes and Morgan's baby shower":"asLHt","OCAD beach party":"uFi37","Dinner at Wes and Morgan's":"c6C6p","Melody and Brian's barbecue":"EK1TV","Barbecue at Morgan and Wesley's - 2013-05-29":"5gxSY","Rooftop Barbecue at Brian and Melody's":"kDk0V","Cadillacs and Cadavers at Stones Place":"vDwNE","May 2013 Snapshots":"9A5me","Easter 2013":"rwuzqHi","Dave's Birthday April 2013":"s9QOb9a","Bethlehem, Jerusalem, March 2013":"TBkrw8l","Bethlehem, March 2013":"AeIioRt","Nazareth, Cana, Mount of the Precipice, River Jordan, March 2013":"K6eHz6V","Tiberius, Lake Galilee, March 2013":"xzyPgGK","Board Games, Jan 2013":"1nV7PSY","Jordyn's Birthday 2013":"YVIiTK5","Hockey in Whitby, Jan 2013":"GwF84nR","New Year's 2012":"evdD52D","Pereira Christmas 2012":"VHdjbvG","Matthew's 29th Birthday, 2012":"m3S7UER","Connell's 9th Birthday October 2012":"QrKxe5X","Thanksgiving 2012":"ok6vNEX","Brayden's 6th Birthday August 2012":"Pkl3CjM","Uncle Peter in England 2012":"reixDKb","Grandma's 90th Birthday 2012":"TkFtrwu","Mother's Day 2012":"PHhQ4kQ","Easter 2012 - Dad's Pictures":"TBoZPjM","Easter 2012":"tOeYwuW","Mom's Birthday 2012":"8jqTIj9","Mom's 65th Birthday 2012":"ovgpW8d","Christmas 2011":"JVMq9kN","Jessica's homecoming - September 2011":"MVo94Hq","Paella Party 2011":"nsEuodJ","Connell's 8th Birhday 2011":"vqp9eKF","Uncle Peter's Birthday 2011":"yNuf9mg","Dad's birthday 2011":"yfprHjZ","Labour Day 2011":"OVZqwO3","Angela and Jonathan's Wedding 2011":"kBRts39","Angela and Jonathan pre-Wedding 2011":"xfVTnHL","Quick visit to Jenn's - August 2011":"xbxS2QY","Toronto Island Picnic":"0y9SVpK","July Long Weekend 2011":"H9kksGn","Father's Day 2011":"q5RWzyj","Easter 2011":"9CxaODO","Connell's First Communion":"NEPqulc","Mom's Birthday 2011":"jScCpJQ","Pizza Party 2011":"sPUyl6L","Jordyn's 1st Birthday 2011":"zkyKidt","Steve's Thailand Trip":"viBQGRm","Jessica's Going Away Party":"SSUzpZa","Christmas in London 2010":"WDlmaEC","Jessica and Alex's Wedding":"vofedle","Thanksgiving 2010":"c5aAU4I","Samson and Delilah Katz":"toCaXNl","Grandma's 85th Birthday":"aNfhEgq","Grandma's Birthday 2010":"NWKKlFE","Cottage September 3 2010":"4XgFGlh","Dad's Birthday September 2010":"mU0plaL","Steve's Birthday 2010":"69SxDxQ","Easter 2010":"nmmcpLF","Mom's Birthday 6x8 Portraits":"q3PQ83s","Jordyn at 1 Month":"EZMRp4h"},Object(ce.a)(n,"Grandma's 85th Birthday","hYG5cJd"),Object(ce.a)(n,"Connell and Brayden Cellphone Pics 2008","rFSfHCE"),Object(ce.a)(n,"Brayden's Christening","4QZcP9G"),Object(ce.a)(n,"July 1st Cottage Weekend","RpZ1wgY"),Object(ce.a)(n,"Trampolines at the Cottage 2006","72m26nP"),Object(ce.a)(n,"Steve's 25th Birthday 2006","OqlpRiS"),Object(ce.a)(n,"Steve's 25th Birthday 2006 II","XKkWNXV"),Object(ce.a)(n,"Connell's 5th Birthday","UV3d38o"),Object(ce.a)(n,"Dominican Republic 2003","uKtEcMZ"),Object(ce.a)(n,"Jennifer and Kevin's Wedding","3WUHhg6"),n),ue=t(26),me=t.n(ue),he="6Hpyr",pe={data:{id:"6Hpyr",images:[]}},ge=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).validateAlbum=function(e){return Object.values(de).indexOf(e)>-1},n.styleCaptions=function(e){return e!==he?"bottom":"right"},n.formatTitle=function(e){return e&&"Matthew Pereira"!==e?"".concat(e," - Matthew Pereira"):"Matthew Pereira"},n.hydrateGalleryState=function(e,a){var t=n.styleCaptions(a),r=e.data.images,i=e.data.description||"";document.title=n.formatTitle(e.data.title);var l=e.data.title||"Matthew Pereira";n.setState({loadedImages:r,albumName:l,description:i,captions:t})},n.onScrollClick=function(){var e=window.innerHeight-35;document.body.scrollTop=document.documentElement.scrollTop=e},n.handleAboutClick=function(){n.setState({aboutVisible:!n.state.aboutVisible})},n.render=function(){return n.state.aboutVisible?i.a.createElement("div",null,i.a.createElement("div",{className:me.a.sidebar},i.a.createElement(w,{hyperlink:n.state.email,label:"EMAIL",target:"_blank"}),i.a.createElement(w,{onClick:n.handleAboutClick,label:"PHOTOGRAPHY"})),i.a.createElement(b,{handleClick:n.handleAboutClick,visible:n.state.aboutVisible})):i.a.createElement("div",null,i.a.createElement(f,{allowedAlbums:de}),i.a.createElement("div",{className:me.a.sidebar},i.a.createElement(w,{hyperlink:n.state.email,label:"EMAIL",target:"_blank"}),i.a.createElement(w,{onClick:n.handleAboutClick,label:"ABOUT"})),i.a.createElement(re,{title:n.state.albumName,description:n.state.description}),i.a.createElement(se,{show:n.state.loadedImages&&n.state.loadedImages.length,onClick:n.onScrollClick}),i.a.createElement(ae,{images:n.state.loadedImages,captions:n.state.captions}))},n.state={email:"mailto:mail@matthewpereira.com",albumName:"",description:"",loadedImages:[],captions:!1,aboutVisible:!1},n.onScrollClick=n.onScrollClick.bind(Object(m.a)(n)),n.fetchImagesFromImgur=n.fetchImagesFromImgur.bind(Object(m.a)(n)),n.validateAlbum=n.validateAlbum.bind(Object(m.a)(n)),n.handleAboutClick=n.handleAboutClick.bind(Object(m.a)(n)),n}return Object(u.a)(t,[{key:"componentWillMount",value:function(){document.getElementById("app").classList.remove("app__loading");var e=Object.keys(this.props.match.params).length?this.props.match.params.albumId:this.props.location.search.slice(1);if(!this.validateAlbum(e))return this.props.history.push("/"),this.fetchImagesFromImgur(he);this.fetchImagesFromImgur(e)}},{key:"fetchImagesFromImgur",value:function(e){var a=this,t={headers:{Authorization:"Client-ID 0deeb4de7f631f1"}};fetch("https://api.imgur.com/3/album/".concat(e),t).then((function(e){return e.json()})).then((function(t){return a.hydrateGalleryState(t,e)})).catch((function(t){console.error("Abort, abort!",t),a.hydrateGalleryState(pe,e)}))}}]),t}(i.a.Component),ye=Object(c.e)(ge),be=function(){return i.a.createElement(s.a,null,i.a.createElement("div",null,i.a.createElement(c.a,{path:"/:albumId",component:ye}),i.a.createElement(c.a,{exact:!0,path:"/",component:ye})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(be,null),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,a,t){e.exports={headline:"AboutPage_headline__2aajB",subtitle:"AboutPage_subtitle__2lsWU",aboutInner:"AboutPage_aboutInner__3zJa2",aboutLink:"AboutPage_aboutLink__lCD8y"}}},[[54,1,2]]]);
//# sourceMappingURL=main.eb9177d3.chunk.js.map