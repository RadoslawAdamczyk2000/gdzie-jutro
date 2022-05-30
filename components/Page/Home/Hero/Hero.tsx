import Image from "next/image"
import Link from "next/link"
import { IntHero } from "../../../../typescript/interfaces/Page/interface";
import { HeroWrapper } from "./styles";
const Hero = ({image,title}:IntHero) => {
    return(
        <HeroWrapper>
            <div>
                <figure>
                    <Image
                        alt={title}
                        loading='eager'
                        layout="fill"
                        objectFit='cover'
                        objectPosition='center'
                        priority
                        title={title}
                        src={image}
                        quality={87}
                    />
                </figure>
                <div>
                    <section>
                        <h1>
                            {title}
                        </h1>
                        <div>
                            <Link href='#'>
                                <a>
                                    Przeczytaj
                                </a>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </HeroWrapper>
    )
}
export default Hero;