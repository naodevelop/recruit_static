import { client } from "../libs/client";
import Link from "next/link";

//SSG
export const getStaticProps = async() => {
  const data = await client.get({ endpoint: "works" });

  return {
    props: {
      works: data.contents,
    },
  };

 

};



export default function Home({works}: any) {
  interface Works {
    title: string,
    id: number
  }
  return (
    <>
    
  {works.map((works: Works) => (

        <li key={works.id}>
          <Link href={`works/${works.id}`}>
            {works.title}
          </Link>
        
        </li>
      ))}
    </>
  )
}
