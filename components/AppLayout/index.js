import Link from 'next/link'

const AppLayout = ({children, SEOComponente}) => {
    return (
        <>
            <SEOComponente />
            <header>
                <Link href="/">
                    <h2>Devtter</h2>
                </Link>

            </header>
            <main>
                {children}
            </main>
            <footer>
                <h2>Powered by @sgocastro</h2>
            </footer>
        </>
    )
}

export default AppLayout

