import React from "react";
import { Container, ContainerTitle, ContainerThumb } from "./styles";

type Props = {
    title: string;
    description: string;
    url: string
}
export default function MenuItem({ title, description, url } : Props) {
    return (
        <Container>
            <ContainerTitle>
                <h3>{title}</h3>
                <span>{description}</span>
            </ContainerTitle>
            <ContainerThumb>
                <h1>🗅</h1>
                <a>Ver página</a>
            </ContainerThumb>
        </Container>
    )
}