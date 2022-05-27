import Image from "next/image"
import Link from "next/link"
import { BrandWrapper } from "./styles";

const Brand = () => {
    return(
        <BrandWrapper>
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
        </BrandWrapper>
    )
}
export default Brand;