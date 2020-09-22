import React from 'react'
import { Button, Container } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function Home() {
    return(
        <Container>
            <Button tag={Link} to='login'>Log in</Button>
        </Container>
    )
}