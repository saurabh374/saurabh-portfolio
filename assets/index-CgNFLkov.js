import{j as i,q as t,r as x,p as a}from"./index-CPXnolcN.js";const p=t.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({theme:e})=>e.white};
    color: ${({theme:e})=>e.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`,l=t.div`
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
    &:hover ${p} {
        display: block;
    }
`,c=t.img`
    width: 100%;
    height: 180px;
    background-color: ${({theme:e})=>e.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`,g=t.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`,h=t.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme:e})=>e.primary};
    background-color: ${({theme:e})=>e.primary+15};
    padding: 2px 8px;
    border-radius: 10px;
`,m=t.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`,w=t.div`
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
`,b=t.div`
    font-weight: 400;
    color: ${({theme:e})=>e.text_secondary+99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`,u=t.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`,v=t.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({theme:e})=>e.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({theme:e})=>e.card};
`,s=({project:e,setOpenModal:n})=>i.jsxs(l,{onClick:()=>n({state:!0,project:e}),children:[i.jsx(c,{src:e.image}),i.jsx(g,{children:e.tags?.map((o,d)=>i.jsx(h,{children:o}))}),i.jsxs(m,{children:[i.jsx(w,{children:e.title}),i.jsx(f,{children:e.date}),i.jsx(b,{children:e.description})]}),i.jsx(u,{children:e.member?.map(o=>i.jsx(v,{src:o.img}))})]}),y=t.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`,j=t.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`,k=t.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({theme:e})=>e.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`,$=t.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({theme:e})=>e.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`,z=t.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`,_=({openModal:e,setOpenModal:n})=>{const[o,d]=x.useState("all");return i.jsx(y,{id:"projects",children:i.jsxs(j,{children:[i.jsx(k,{children:"Projects"}),i.jsx($,{children:"I have worked on a projects related to web apps. Here are some of my projects."}),i.jsxs(z,{children:[o==="all"&&a.map(r=>i.jsx(s,{project:r,openModal:e,setOpenModal:n})),a.filter(r=>r.category==o).map(r=>i.jsx(s,{project:r,openModal:e,setOpenModal:n}))]})]})})};export{_ as default};
