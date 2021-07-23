import Head from 'next/head'

const SEO = ({titlePage, description}) => {
    return (
        <Head>
            <title>Devtter | {titlePage}</title>
            <meta name="description" content={description} />
            <link rel="icon" href='/devtter-logo-tab.ico' />
        </Head>
    )
}

export default SEO
