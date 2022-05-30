import Image from "next/image"
import Link from "next/link"
import { HeroWrapper } from "./styles";
const Hero = () => {
    return(
        <HeroWrapper>
            <div>
                <figure>
                    <Image
                        alt=''
                        loading='eager'
                        layout="fill"
                        objectFit='cover'
                        objectPosition='center'
                        priority
                        src='https://images.unsplash.com/photo-1647375233873-328cb125bcdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=933&q=80'
                    />
                </figure>
                <div>
                    <section>
                        <h1>
                            Gdy Orient zmiesza się z Zachodem - historia anatolijskiego rocka
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