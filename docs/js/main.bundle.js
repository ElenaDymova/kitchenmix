(()=>{var e={900:()=>{const e=document.querySelector(".main-nav__toggle");if(e){const t=document.querySelector(".main-nav__content"),o=document.querySelector(".header-main"),c=document.querySelector(".main-nav__number");e.addEventListener("click",(function(n){document.body.classList.toggle("body--lock"),e.classList.toggle("header__toggle--active"),t.classList.toggle("main-nav__content--active"),o.classList.toggle("header-main--active"),c.classList.toggle("main-nav__number--active")}))}},856:()=>{document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".popup-choice"),t=e.querySelector(".popup-choice__close");document.querySelectorAll(".choice__photo").forEach((t=>{t.addEventListener("click",(()=>{const o=t.querySelector("img").src,c=e.querySelector(".popup-choice__photo");e.style.display="block",document.body.style.overflow="hidden",c&&(c.src=o)}))})),t.addEventListener("click",(()=>(e.style.display="none",void(document.body.style.overflow="auto"))))}))},795:()=>{document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".popup-materials"),t=e.querySelector(".popup-materials__close"),o=document.querySelectorAll(".materials__button"),c=document.querySelector(".popup-materials__img"),n=document.querySelector(".popup-materials__name"),l=document.querySelector(".popup-materials__button");function r(){e.style.display="none",document.body.style.overflow="auto"}o.forEach((t=>{t.addEventListener("click",(o=>{o.preventDefault();const l=t.getAttribute("data-src"),r=t.getAttribute("data-name");c.src=l,n.textContent=r,e.style.display="block",document.body.style.overflow="hidden"}))})),t.addEventListener("click",(()=>{r()})),l.addEventListener("click",(()=>{r()}))}))},130:()=>{document.querySelector(".quiz-type__radio--real").classList.add("checked"),document.querySelectorAll(".quiz-type__radio--real").forEach((function(e){e.addEventListener("change",(function(){document.querySelectorAll(".quiz-type__radio--real").forEach((function(e){e.classList.remove("checked")})),e.checked&&e.classList.add("checked")}))}))},939:()=>{document.addEventListener("DOMContentLoaded",(function(){let e=document.querySelector(".quiz-main__button"),t=document.querySelector(".quiz-main"),o=document.querySelector(".quiz-type"),c=document.getElementById("showQuizType"),n=document.querySelectorAll(".quiz__next"),l=0;function r(e){n.forEach(((t,o)=>{t.style.display=o===e?"block":"none"}))}function d(){l<n.length-1&&(l++,r(l))}function i(){l>0&&(l--,r(l))}e.addEventListener("click",(function(){t.style.display="none",o.style.display="block"})),c.addEventListener("click",(function(){o.style.display="none",window.innerWidth<768?t.style.display="block":window.innerWidth>=768&&window.innerWidth<1140?(t.style.display="grid",t.style.gridTemplateColumns="354px 1fr"):(t.style.display="grid",t.style.gridTemplateColumns="620px 1fr")})),document.querySelectorAll(".button__quiz--next").forEach((function(e){e.addEventListener("click",d)})),document.querySelectorAll(".button__quiz--back").forEach((function(e){e.addEventListener("click",i)}))}))},809:()=>{document.querySelectorAll(".quiz-size__range").forEach((function(e){let t=e.closest(".quiz-size__section").querySelector(".quiz-size__number");e.oninput=function(){t.textContent=this.value},e.addEventListener("input",(function(){let t=e.value/e.max*100;e.style.background="linear-gradient(to right, #FBD846 0%, #FBD846 "+t+"%, #DCDCDC "+t+"%, #DCDCDC 100%)"}))}))},296:()=>{const e=document.querySelector(".choice__list"),t=document.querySelectorAll(".choice__photo"),o=document.querySelectorAll(".choice__item");e.addEventListener("click",(e=>{const c=e.target.dataset.id,n=e.target;switch(n.classList.contains("choice__item")&&(o.forEach((e=>{e.classList.remove("choice__item--active")})),n.classList.add("choice__item--active")),c){case"econom":case"small":case"classic":case"hightech":case"scandinavian":case"minimalism":case"loft":case"provence":l=c,t.forEach((e=>{e.classList.contains(l)?e.style.display="block":e.style.display="none"}))}var l}))}},t={};function o(c){var n=t[c];if(void 0!==n)return n.exports;var l=t[c]={exports:{}};return e[c](l,l.exports,o),l.exports}(()=>{"use strict";o(900),o(296),o(939),o(130),o(809),o(856),o(795);const e=document.querySelector(".popup-send");function t(){e.style.display="block",document.body.style.overflow="hidden",e.style.zIndex="9999"}e.querySelector(".popup-send__close").addEventListener("click",(()=>{e.style.display="none",document.body.style.overflow="auto",e.style.zIndex=""})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".form__calc"),o=document.querySelector(".calc__button");document.querySelector(".popup-send"),o.addEventListener("click",(o=>{o.preventDefault(),e.checkValidity()?(t(),e.reset()):alert("Заполните все обязательные поля формы!")}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".feedback__form"),o=document.querySelector(".feedback__button");document.querySelector(".popup-send"),o.addEventListener("click",(o=>{o.preventDefault(),e.checkValidity()?(t(),e.reset()):alert("Заполните все обязательные поля формы!")}))}));const c=document.querySelector(".popup-bid"),n=c.querySelector(".popup-bid__close"),l=c.querySelector(".button__form"),r=document.querySelector(".popup-bid__form"),d=document.querySelector(".popup-bid__description"),i=document.querySelector(".popup-catalog__title"),a=document.querySelector(".popup-catalog__price"),u=document.querySelector(".popup-catalog__old"),s=document.querySelector(".popup-bid__old"),p=document.querySelector(".popup-bid__price"),y=document.querySelector(".card__photo"),_=document.querySelector(".popup-bid__photo");function m(){c.style.display="none",document.body.style.overflow="auto",c.style.zIndex=""}n.addEventListener("click",(()=>{m()})),l.addEventListener("click",(e=>{e.preventDefault(),r.checkValidity()?(m(),t()):alert("Заполните все обязательные поля формы!")})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".popular__list"),t=document.querySelector(".popup"),o=document.querySelector(".popup-catalog"),n=o.querySelector(".popup-catalog__photo"),l=o.querySelector(".popup__close"),r=o.querySelector(".popup-catalog__button--description"),m=o.querySelector(".popup-catalog__button--characteristic"),q=o.querySelector(".popup-catalog__description"),v=o.querySelector(".popup-catalog__characteristic"),S=t.querySelector(".button__popup-catalog");function b(){o.style.display="none",t.style.display="none",document.body.style.overflow="auto"}e.addEventListener("click",(e=>{const c=e.target.closest(".popular__item");if(e.stopPropagation(),c){const e=c.querySelector(".card__name").textContent,l=c.querySelector(".card__price").textContent,r=c.querySelector(".card__old").textContent,d=c.querySelector(".card__description").textContent,i=c.querySelector(".card__characteristic").textContent,a=c.querySelector(".card__photo").dataset.src;!function(e,t,c,l,r,d){const i=o.querySelector(".popup-catalog__title"),a=o.querySelector(".popup-catalog__price"),u=o.querySelector(".popup-catalog__old"),s=o.querySelector(".popup-catalog__description"),p=o.querySelector(".popup-catalog__characteristic");i.textContent=e,a.textContent=t,u.textContent=c,s.textContent=l,p.textContent=r,n.setAttribute("src",d),n.setAttribute("alt",e)}(e,l,r,d,i,window.location.origin+"/"+a),o.style.display="block",t.style.display="block",document.body.style.overflow="hidden"}})),l.addEventListener("click",(()=>b())),t.addEventListener("click",(e=>{e.target===t&&b()})),r.addEventListener("click",(()=>{m.classList.remove("popup-catalog__button--description--active"),r.classList.add("popup-catalog__button--description--active"),q.style.display="block",v.style.display="none"})),m.addEventListener("click",(()=>{m.classList.add("popup-catalog__button--description--active"),r.classList.remove("popup-catalog__button--description--active"),q.style.display="none",v.style.display="block"})),S.addEventListener("click",(()=>{c.style.display="block",document.body.style.overflow="hidden",c.style.zIndex="9999",d&&i&&(d.textContent=i.textContent),a&&u&&p&&s&&(p.textContent=a.textContent,s.textContent=u.textContent),y&&_&&(_.src=y.src,_.alt=y.alt),b(),document.body.style.overflow="hidden"}))}));const q=document.querySelector(".popup-call"),v=q.querySelector(".popup-call__close"),S=document.querySelector(".main-nav__button"),b=document.querySelector(".popup-call__button"),f=document.querySelector(".popup-call__form");function h(){q.style.display="none",document.body.style.overflow="auto",q.style.zIndex=""}S.addEventListener("click",(e=>{q.style.display="block",document.body.style.overflow="hidden",q.style.zIndex="9999"})),v.addEventListener("click",(()=>{h()})),b.addEventListener("click",(e=>{e.preventDefault(),f.checkValidity()?(h(),f.reset(),t()):alert("Заполните все обязательные поля формы!")}))})()})();