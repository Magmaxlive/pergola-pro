import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Pergola Tauranga, Custom Pergola Builder | Pergola Pro NZ"}
                </title>
            </Head>
        </>
    )
}

export default PageHead