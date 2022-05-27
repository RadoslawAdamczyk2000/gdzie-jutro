import Image from "next/image"
import Link from "next/link"

const Brand = () => {
    return(
        <div className="brand">
            <Link href="/">
                <a>
                    <figure>
                        <Image
                            alt='Gdzie jutro - logo'
                            layout='fill'
                            objectFit='contain'
                            objectPosition='center'
                            src='/assets/logo.png'
                            title='Gdzie jutro - logo'
                            quality={85}
                        />
                    </figure>
                </a>
            </Link>
        </div>
    )
}
export default Brand;