import{j as i,q as t,r as d,p as s}from"./index-bhRbRfLV.js";const p=t.div`
    width: 330px;
    height: 490px;
    background-color: ${({theme:e})=>e.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
`,l=t.img`
    width: 100%;
    height: 180px;
    background-color: ${({theme:e})=>e.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`,c=t.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`,g=t.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme:e})=>e.primary};
    background-color: ${({theme:e})=>e.primary+15};
    padding: 2px 8px;
    border-radius: 10px;
`,h=t.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`,m=t.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({theme:e})=>e.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`,f=t.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({theme:e})=>e.text_secondary+80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`,w=t.div`
    font-weight: 400;
    color: ${({theme:e})=>e.text_secondary+99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`,b=t.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`,u=t.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({theme:e})=>e.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({theme:e})=>e.card};
`,x=({project:e,setOpenModal:a})=>i.jsxs(p,{onClick:()=>a({state:!0,project:e}),children:[i.jsx(l,{src:e.image,alt:e.title}),i.jsx(c,{children:e.tags?.map((r,n)=>i.jsx(g,{children:r},n))}),i.jsxs(h,{children:[i.jsx(m,{children:e.title}),i.jsx(f,{children:e.date}),i.jsx(w,{children:e.description})]}),i.jsx(b,{children:e.member?.map((r,n)=>i.jsx(u,{src:r.img,alt:r.name},n))})]}),v=t.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`,y=t.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`,j=t.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({theme:e})=>e.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`,k=t.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({theme:e})=>e.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;t.div`
    width: 1.5px;
    background: ${({theme:e})=>e.primary};
`;const $=t.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
     }
`,C=({openModal:e,setOpenModal:a})=>{const[r,n]=d.useState("all");return i.jsx(v,{id:"projects",children:i.jsxs(y,{children:[i.jsx(j,{children:"Projects"}),i.jsx(k,{children:"I have worked on a projects related to web apps. Here are some of my projects."}),i.jsxs($,{children:[r==="all"&&s.map(o=>i.jsx(x,{project:o,openModal:e,setOpenModal:a})),s.filter(o=>o.category==r).map(o=>i.jsx(x,{project:o,openModal:e,setOpenModal:a}))]})]})})};export{C as default};
