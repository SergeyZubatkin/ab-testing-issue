import Link from 'next/link'

export default function Index() {
  return (
    <>
      <h1>AB testing</h1>
      <p>
        Demo
      </p>
      <ul>
        <li>

            <a href="/home">/home without Link</a>

        </li>
      </ul>
    </>
  )
}

export function getStaticProps() {
  return {
    props: { test: 'test content from getStaticProps for index' },
  }
}