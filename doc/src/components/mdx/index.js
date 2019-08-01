import React from "react"

import ScrollProgressRead from "react-scroll-progress-read"

import Title from "./Title"
import Subtitle from "./Subtitle"
import Paragraph from "./Paragraph"
import ContainerRef from "../ContainerRef"
import ContainerID from "../ContainerID"
import Container from "../Container"

import Link from "../Link"

export const MDXLayoutComponents = {
  h1: props => <Title {...props} />,
  h2: props => <Subtitle {...props} />,
  p: props => <Paragraph {...props} />,
}

export const MDXGlobalComponents = {
  Link,
  ScrollProgressRead,
  ContainerRef,
  ContainerID,
  Container,
}
