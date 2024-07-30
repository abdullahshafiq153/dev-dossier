import React from 'react'
import { useRouter } from 'next/router'

const slug = () => {
    const router=useRouter();
    const {slug} =router.query;
    console.log({slug});
  return  <div>
    <div>{slug}</div>
    <h1>Title of the page {slug}</h1>
    <hr />
    <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut molestiae vitae magnam? Voluptatibus corrupti iure vel, rerum officia cupiditate beatae laborum culpa consequatur.</div>
    </div>;
  
}

export default slug;