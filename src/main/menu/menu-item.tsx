import React from "react";
import { Container, ContainerMenuTitle, ContainerThumb } from "./styles";
import LinkRedirect from '../components/link-redirect';
import img1 from './letspartythumb.png'

type Props = {
    title: string;
    description: string;
    url: string
    thumbPathRelative?: string
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
                <ContainerThumb $thumb={img1} />
                <LinkRedirect to={url} label='Ver página' />
            </div>
        </Container>
    )
}