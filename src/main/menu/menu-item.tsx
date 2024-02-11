import React from "react";
import { Container, ContainerTitle, ContainerThumb } from "./styles";
import { Link } from "react-router-dom";
type Props = {
    title: string;
    description: string;
    url: string
    thumbPathRelative?: string
}
export default function MenuItem({ title, description, url, thumbPathRelative } : Props) {
    return (
        <Container>
            <ContainerTitle>
                <h3>{title}</h3>
                <hr />
                <span>{description}</span>
            </ContainerTitle>
            <ContainerThumb>
                <h1>🗅</h1>
                <Link to={url}>Ver página</Link>
            </ContainerThumb>
        </Container>
    )
}