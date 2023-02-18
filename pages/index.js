import { client } from "../libs/client";
import styles from '../styles/Home.module.scss';
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


export default function Home({works}) {
  return (
    <div>
      {works.map((works) => (
        <li key={works.id}>
          <Link href={`works/${works.id}`}>
            {works.title}
          </Link>
        
        </li>
      ))}
    </div>
  );
}
