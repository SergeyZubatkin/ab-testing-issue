import Link from 'next/link'

export default function Index() {
  return (
    <>
      <h1>AB testing</h1>
      <p>
        Demo SSR
      </p>
      <ul>
        <li>
          <Link href="/ssr/home">
            <a>/ssr/home</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export function getServerSideProps() {
  return {
    props: { test: 'test content from getStaticProps for SSR' },
  }
}