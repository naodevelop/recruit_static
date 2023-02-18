
import { client } from "../../libs/client";
import styles from '../../styles/Home.module.scss';
import Link from "next/link";
//SSG
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "works", contentId: id});

  return {
    props: {
      works: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "works"});

  const paths = data.contents.map((content) => `/works/${content.id}`)
  return {
    paths,
    fallback: false,
  };
}

export default function WorksId({works}) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{works.title}</h1>
      <p className={styles.publishedAt}>{works.publishedAt}</p>
      <div dangerouslySetInnerHTML={{__html: `${works.body}`}} className={styles.post}></div>
      <Link href="/">一覧に戻る</Link>
    </main>
  )
}