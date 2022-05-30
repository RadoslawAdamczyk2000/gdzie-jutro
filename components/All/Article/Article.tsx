import Image from "next/image";
import Link from "next/link";
import { IntArticle } from "../../../typescript/interfaces/All/interface";
import { ArticleWrapper } from "./styles";
const Article = ({content,image,isHome,link,title}:IntArticle) => {
    return(
        <>
            {
                isHome ?
                <ArticleWrapper className='home'>
                    <Link href={link}>
                        <a>
                            <div>
                                <figure>
                                    <Image
                                        alt={title}
                                        layout='fill'
                                        loading='lazy'
                                        objectFit='cover'
                                        objectPosition='center'
                                        src={image}
                                        title={title}
                                    />
                                </figure>
                            </div>
                            <figcaption>
                                <h3>
                                    {title.substr(0,25)}...
                                </h3>
                                <p 
                                    dangerouslySetInnerHTML={{__html:content.substr(0,150) + '...'}}
                                />
                            </figcaption>
                        </a>
                    </Link>
                </ArticleWrapper>:
                <ArticleWrapper>
                </ArticleWrapper>
            }
        </>
    )
}
export default Article;