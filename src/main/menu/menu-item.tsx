import React from "react";
import { Container, ContainerMenuTitle, ContainerThumb } from "./styled";
import LinkRedirect from '../../presentation/components/link-redirect';


type Props = {
    title: string;
    description: string;
    url: string
    thumbPathRelative: string
}
export default function MenuItem({ title, description, url, thumbPathRelative } : Props) {
    return (
        <Container>
            <ContainerMenuTitle>
                <h3>{title}</h3>
                <hr />
                <span>{description}</span>
            </ContainerMenuTitle>
            <div>
                <ContainerThumb>
                    <img src={thumbPathRelative} alt={title} />
                </ContainerThumb>
                <LinkRedirect to={url} label='Ver página' />
            </div>
        </Container>
    )
}