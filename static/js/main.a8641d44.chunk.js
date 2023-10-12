(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var i=c(6),s=c.n(i),a=(c(12),c(2)),n=c(1),l=(c(13),c(14),c(15),c(0)),r=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(r,{movie:e},e.imdbId)}))})},d=c(7);c(17);var j=function(e){var t=e.movies,c=e.setMovies,i=Object(n.useState)(""),s=Object(a.a)(i,2),o=s[0],j=s[1],m=Object(n.useState)(null),b=Object(a.a)(m,2),u=b[0],v=b[1],h=Object(n.useState)(null),O=Object(a.a)(h,2),x=O[0],f=O[1],p=Object(n.useState)(!1),N=Object(a.a)(p,2),g=N[0],y=N[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:function(e){(e.preventDefault(),y(!0),o)&&function(e){return fetch("".concat("https://www.omdbapi.com/?apikey=e183df43","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}(o.trim().toLowerCase()).then((function(e){if(Object.hasOwn(e,"Title")){var t=e,c=t.Title,i=t.Plot,s=t.Poster,a=t.imdbID,n={title:c,description:i,imgUrl:"N/A"===s?"https://via.placeholder.com/360x270.png?text=no%20preview":s,imdbUrl:"https://www.imdb.com/title/".concat(a),imdbId:a};v(n),f(null)}Object.hasOwn(e,"Error")&&f(e)})).finally((function(){return y(!1)}))},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input ".concat(x&&"is-danger"),value:o,onChange:function(e){j(e.target.value),x&&f(null)}})}),(null===x||void 0===x?void 0:x.Error)&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can'ot find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:"button is-light ".concat(g&&"is-loading"),disabled:!o,children:"Find a movie"})}),u&&Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){!t.some((function(e){return e.imdbId===(null===u||void 0===u?void 0:u.imdbId)}))&&u&&c([].concat(Object(d.a)(t),[u])),f(null),v(null),j("")},children:"Add to the list"})})]})]}),u&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(r,{movie:u})]})]})},m=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],i=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(o,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(j,{movies:c,setMovies:i})})]})};s.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.a8641d44.chunk.js.map