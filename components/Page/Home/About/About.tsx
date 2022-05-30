import Image from "next/image"
import { IntAboutHome } from "../../../../typescript/interfaces/Page/interface";
import { AboutWrapper } from "./styles";
const About = ({title,content}:IntAboutHome) => {
    return(
        <AboutWrapper>
            <figure>
                <Image
                    alt={title}
                    loading='eager'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='center'
                    src='/assets/logo.png'
                    title={title}
                    priority
                    quality={95}
                />
            </figure>
            <section>
                <h2>{title}</h2>
                <p
                    dangerouslySetInnerHTML={{__html:content}}
                />
            </section>
        </AboutWrapper>
    )
}
export default About;