import{u as d,a as N,r as c,c as F,j as e,I as f,s as v,b as y,d as T,g as k,H as E,e as M}from"./index-BM7pN6ER.js";import{s as B,a as $,c as A,b as O,F as D,d as R,e as _,E as V,f as H,g as P,h as G,i as K,C as U}from"./ErrorMessage-0sG1nLu3.js";const W="_sectionCatalog_o53vf_1",x={sectionCatalog:W},z="_filterForm_9i7fw_1",J="_locationSection_9i7fw_21",Q="_textLabel_9i7fw_33",X="_inputContainer_9i7fw_47",Y="_textInput_9i7fw_55",Z="_dropdownMenu_9i7fw_91",ee="_dropdownOption_9i7fw_121",te="_locationIcon_9i7fw_149",ne="_equipmentSection_9i7fw_183",se="_equipmentTitle_9i7fw_191",ae="_equipmentList_9i7fw_233",ie="_equipmentBox_9i7fw_247",oe="_iconStyle_9i7fw_287",ce="_iconFilterCamper_9i7fw_297",le="_searchButton_9i7fw_307",re="_errorMessage_9i7fw_353",me="_equipmentItem_9i7fw_369",de="_equipmentLabel_9i7fw_379",pe="_checkInput_9i7fw_387",ue="_radio_9i7fw_389",he="_filterTitle_9i7fw_413",fe="_filterList_9i7fw_453",_e="_filterLabel_9i7fw_471",t={filterForm:z,locationSection:J,textLabel:Q,inputContainer:X,textInput:Y,dropdownMenu:Z,dropdownOption:ee,locationIcon:te,equipmentSection:ne,equipmentTitle:se,equipmentList:ae,equipmentBox:ie,iconStyle:oe,iconFilterCamper:ce,searchButton:le,errorMessage:re,equipmentItem:me,equipmentLabel:de,checkInput:pe,radio:ue,filterTitle:he,filterList:fe,filterLabel:_e},C=o=>[...new Set(o.map(i=>{if(!i||!i.location)return"Location undefined";const[l,r]=i.location.split(", ");return`${r} (${l})`}))],xe=()=>{const o=d(B),i=N(),{location:l="",form:r="",details:u={}}=d($)||{},[p,w]=c.useState([]),[j,m]=c.useState(!1),h=c.useRef(null);c.useEffect(()=>{const s=o.filter(n=>n&&n.location),a=C(s);w(a)},[o]);const b=(s,a)=>{a("location",s),m(!1)},g=(s,a)=>{a("location",s),w(C(o).filter(n=>n.toLowerCase().includes(s.toLowerCase()))),m(!0)};c.useEffect(()=>{const s=a=>{h.current&&!h.current.contains(a.target)&&m(!1)};return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[]);const q={location:l,form:r,details:{...u}},L=A().shape({location:O().min(3,"Too short city name!!").max(58,"Too long city name!")}),I=(s,{resetForm:a})=>{i(v(s.location==="All Cities"?"":s.location)),i(y(s.form)),i(T(s.details)),a(),m(!1)};return c.useEffect(()=>()=>{i(F())},[i]),e.jsx(D,{initialValues:q,validationSchema:L,onSubmit:I,children:({setFieldValue:s,values:a})=>e.jsxs(R,{className:t.filterForm,children:[e.jsxs("div",{className:t.locationSection,children:[e.jsx("label",{htmlFor:"location",className:t.textLabel,children:"Location"}),e.jsxs("div",{className:t.inputContainer,ref:h,children:[e.jsx(f,{nameIcon:"mapPin",className:t.locationIcon}),e.jsx(_,{type:"text",name:"location",className:t.textInput,placeholder:"City",value:a.location,onClick:()=>m(!j),onChange:n=>g(n.target.value,s)}),e.jsx(V,{className:t.errorMessage,name:"location",component:"span"}),j&&e.jsx("ul",{className:t.dropdownMenu,children:p.map(n=>e.jsx("li",{className:t.dropdownOption,onClick:()=>b(n,s),children:n},n))})]})]}),e.jsxs("div",{className:t.equipmentSection,children:[e.jsx("label",{htmlFor:"vehicle",className:t.textLabel,children:"Filters"}),e.jsxs("div",{className:t.equipmentGroup,children:[e.jsx("h3",{className:t.equipmentTitle,children:"Vehicle equipment"}),e.jsx("ul",{className:t.equipmentList,children:[{name:"airConditioner",label:"AC",iconName:"airContainer"},{name:"automatic",label:"Automatic",iconName:"automatic"},{name:"kitchen",label:"Kitchen",iconName:"kitchen"},{name:"TV",label:"TV",iconName:"TV"},{name:"shower",label:"Shower/WC",iconName:"shower"}].map(n=>e.jsx("li",{className:t.equipmentItem,children:e.jsxs("label",{className:t.equipmentLabel,children:[e.jsx(_,{type:"checkbox",name:`details.${n.name}`,checked:a.details[n.name]||!1,className:t.checkInput,onChange:({target:{checked:S}})=>s(`details.${n.name}`,S)}),e.jsxs("div",{className:t.equipmentBox,children:[e.jsx(f,{nameIcon:n.iconName,className:t.iconStyle}),e.jsx("span",{children:n.label})]})]})},n.name))})]})]}),e.jsxs("div",{className:t.filterSection,children:[e.jsx("h3",{className:t.filterTitle,children:"Vehicle type"}),e.jsx("ul",{className:t.filterList,children:[{name:"panelTruck",label:"Van",iconName:"camperSmall"},{name:"fullyIntegrated",label:"Fully Integrated",iconName:"camperMedium"},{name:"alcove",label:"Alcove",iconName:"camperBig"}].map(n=>e.jsx("li",{className:t.equipmentItem,children:e.jsxs("label",{className:t.equipmentLabel,children:[e.jsx(_,{type:"radio",name:"form",value:n.name,checked:a.form===n.name,className:t.radio,onChange:()=>s("form",n.name)}),e.jsxs("div",{className:t.equipmentBox,children:[e.jsx(f,{nameIcon:n.iconName,className:t.iconFilterCamper}),e.jsx("span",{children:n.label})]})]})},n.name))})]}),e.jsx("button",{type:"submit",className:t.searchButton,children:"Search"})]})})},Ce=()=>{const o=N(),i=d(H)||{},l=d(P),r=d(G);c.useEffect(()=>{o(k())},[o]);const u=Object.values(i).filter(p=>typeof p=="object"&&p._id);return e.jsxs(e.Fragment,{children:[e.jsx(E,{children:"Camper Catalog"}),e.jsxs("div",{className:x.wrapper,children:[r&&e.jsx(K,{}),l&&e.jsx(M,{}),e.jsxs("section",{className:x.sectionCatalog,children:[e.jsx(xe,{}),i.length===0?e.jsx("p",{className:x.noCampersFiltered,children:"There is no campers matches your search"}):e.jsx(U,{ads:u})]})]})]})};export{Ce as default};