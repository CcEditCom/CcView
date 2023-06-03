import Head from 'next/head';

export async function getServerSideProps() {
    await new Promise(resolve => {
        setTimeout(resolve, 500);
    });
    return { props: {}};
}

export default function AboutPage() {
    return (
      <div>
          <Head>
              <title>About 🤔</title>
              <meta charSet='utf-8' />
              <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          </Head>
          <h1>About page has a title 🤔</h1>
      </div>
    );
}
