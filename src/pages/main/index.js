import React, { Component, Fragment } from 'react';
import { Container, Form, Input, SubmitButton, HeaderMsg, RepositoryList } from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoritesActions from '../../store/actions/favorites';

class Main extends Component {
    handleAddRepository = e => {
        e.preventDefault();
        
        this.props.addFavorite();
    }
    
    render () {
        return (
            <Fragment>
                <Container>
                    <Form onSubmit={this.handleAddRepository}>
                        <Input placeholder="user / repository" />
                        <SubmitButton>Submit</SubmitButton>
                    </Form>
                    <HeaderMsg>
                        You have <span>{this.props.count}</span> {this.props.count === 1 ? 'favorite' : 'favorites'}!
                    </HeaderMsg>
                    <RepositoryList>
                        { this.props.favorites.map(favorite => (
                            <li key={favorite.id}>
                                <h2>{favorite.name}</h2>
                                <p>{favorite.description}</p>
                                <a href={favorite.url} target="blank">Link to Repository</a>
                            </li>
                        )) }
                    </RepositoryList>
                </Container>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    favorites: state.favorites,
    count: state.favorites.length,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoritesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);