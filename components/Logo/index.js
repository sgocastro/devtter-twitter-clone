import Image from "next/image"

const Logo = (props) => {
    return (
        <>
            <div>
                <Image src="/devtter-logo.png" {...props} />
            </div>
            <style jsx>{`
                div{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: row;
                }
            `}</style>
        </>
    )
}

export default Logo
