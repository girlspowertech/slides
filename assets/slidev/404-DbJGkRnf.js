import{d as m,N as f,z as h,r as x,o as n,b as v,e as t,aa as s,x as d,B as g,c as r,k as p,g as u,p as k,a as N}from"../modules/vue-ji9cbFf1.js";import{a as S,_ as B}from"../index-k8LGHcwe.js";import"../modules/shiki-CYoQjmmx.js";const w=a=>(k("data-v-ea2dda01"),a=a(),N(),a),y={class:"grid justify-center text-center pt-15% gap-5"},C=w(()=>t("h1",{class:"text-9xl font-light"}," 404 ",-1)),I={class:"text-2xl"},R={class:"op-60"},V={class:"mt-3 flex flex-col gap-2 max-w-xs mx-auto w-full"},G=m({__name:"404",setup(a){const{currentRoute:l}=f(),{total:i}=S(),o=h(()=>{const c=l.value.path.match(/\d+/);if(c){const e=+c[0];if(e>0&&e<=i.value)return e}return null});return(_,c)=>{const e=x("RouterLink");return n(),v("div",y,[t("div",null,[C,t("p",I,[s(" Page "),t("code",R,d(g(l).path),1),s(" not found ")])]),t("div",V,[o.value!==1?(n(),r(e,{key:0,to:"/",class:"page-link"},{default:p(()=>[s(" Go Home ")]),_:1})):u("v-if",!0),o.value?(n(),r(e,{key:1,to:`/${o.value}`,class:"page-link"},{default:p(()=>[s(" Go to Slide "+d(o.value),1)]),_:1},8,["to"])):u("v-if",!0)])])}}}),z=B(G,[["__scopeId","data-v-ea2dda01"]]);export{z as default};
