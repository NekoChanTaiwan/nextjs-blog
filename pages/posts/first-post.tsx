// http://localhost:3000/posts/first-page

// 該檔案目前以不需要被使用，但用於保存複習。

import Head from 'next/head'
import Script from 'next/script'
// import Link from 'next/link'
// import Image from 'next/image'
import Layout from '../../components/Layout'

// 必需要以 export default 的形式導出
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>This is my first post</title>
      </Head>

      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload" // lazyOnload: 瀏覽器空閒時才加載
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`, window.FB)
        }
      />

      <h1>First Post</h1>

      <p>Hello World.</p>

      {/* 如果圖片被檢測到 Largest Contentful Paint (LCP)，需要設置屬性 priority 為 true */}
      {/* <Image src="/images/profile.jpg" priority height={144} width={144} alt="NekoChan" /> */}

      {/* <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2> */}

      {/*  若在 VSCode 需要高亮和提式需要安裝 styled-jsx */}
      {/* <style jsx>{`
        h1 {
          background: skyblue;
          color: #fff;
        }
      `}</style> */}
    </Layout>
  )
}
