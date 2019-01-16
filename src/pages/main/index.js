import React, { Component, Fragment } from 'react';
import { Container, Form, Input, SubmitButton } from './styles';

class Main extends Component {
    render () {
        return (
            <Fragment>
                <Container>
                    <Form onSubmit={this.handleAddRepository}>
                        <Input placeholder="user / repository" />
                        <SubmitButton>Enviar</SubmitButton>
                    </Form>
                </Container>
            </Fragment>
        );
    }
}

export default Main;