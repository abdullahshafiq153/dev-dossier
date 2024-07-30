import React from 'react'
import { useRouter } from 'next/router'
import Styles from "../../styles/Slug.module.css"

const slug = () => {
    const router=useRouter();
    const {slug} =router.query;
    console.log({slug});
  return  <div className={Styles.main}>
    <h1>Title of the page {slug}</h1>
    <hr />
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit assumenda perspiciatis voluptate rerum facere provident hic iusto doloremque cupiditate? Unde fuga rem neque veniam, doloribus omnis provident possimus dolor error temporibus officia dolores, nobis corporis expedita perferendis non, nostrum sapiente veritatis debitis tempora nam sit. Cum eveniet molestiae tenetur obcaecati!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut molestiae vitae magnam? Voluptatibus corrupti iure vel, rerum officia cupiditate beatae laborum culpa consequatur.</div>
    </div>;
  
}

export default slug;