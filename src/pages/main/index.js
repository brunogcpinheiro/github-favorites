import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Container, Form, Input, SubmitButton, HeaderMsg, RepositoryList } from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoritesActions from '../../store/actions/favorites';
import Loading from '../../components/loading';
import { secondary } from '../../utils/colors';

class Main extends Component {
    static propTypes = {
        addFavoriteRequest: PropTypes.func.isRequired,
        favorites: PropTypes.shape({
                loading: PropTypes.bool,
                data: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                description: PropTypes.string,
                url: PropTypes.string,
            })),
        }).isRequired,
    };
    
    state = {
        repositoryInput: '',
    };
    
    handleAddRepository = e => {
        e.preventDefault();
        
        this.props.addFavoriteRequest(this.state.repositoryInput);
        
        this.setState({ repositoryInput: '' });
    }
    
    render () {
        return (
            <Fragment>
                <Container>
                    <Form onSubmit={this.handleAddRepository}>
                        <Input
                            placeholder="user / repository" 
                            value={this.state.repositoryInput}
                            onChange={e => this.setState({ repositoryInput: e.target.value })}
                        />
                        <SubmitButton>Submit</SubmitButton>
                    </Form>
                    <HeaderMsg>
                        You have <span>{this.props.count}</span> {this.props.count === 1 ? 'favorite' : 'favorites'}!
                    </HeaderMsg>
                    { this.props.favorites.loading && <Loading type={'bars'} color={secondary} /> }
                    <RepositoryList>
                        { this.props.favorites.data.map(favorite => (
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
    count: state.favorites.data.length,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoritesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);