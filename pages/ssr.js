export default ({ssr}) => {
    if (ssr) {
        return (
            <h1>Yoo this is working on server</h1>
        )
    }
}

export const getServerSideProps = () => {
    return {
        props: {ssr: true}
    }
}