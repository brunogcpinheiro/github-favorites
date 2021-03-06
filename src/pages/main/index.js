import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Container, Form, Input, SubmitButton, HeaderMsg, RepositoryList, Repository, Error } from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Animated } from 'react-animated-css';
import { TiStarFullOutline } from 'react-icons/ti';
import { Creators as FavoriteActions } from '../../store/ducks/favorites';
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
            error: PropTypes.oneOfType([null, PropTypes.string]),
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
                    <Animated animationIn="bounceInLeft" isVisible={true}>
                    <Form onSubmit={this.handleAddRepository}>
                        <Input
                            placeholder="user / repository" 
                            value={this.state.repositoryInput}
                            onChange={e => this.setState({ repositoryInput: e.target.value })}
                        />
                        <SubmitButton>Submit</SubmitButton>
                    </Form>
                    </Animated>
                    
                    { !!this.props.favorites.error && <Error>{this.props.favorites.error}</Error> }
                    
                    <HeaderMsg>
                        You added <span>{this.props.count}</span> {this.props.count === 1 ? 'favorite' : 'favorites'}!
                    </HeaderMsg>
                    
                    { this.props.favorites.loading && <Loading type={'bars'} color={secondary} /> }
                    
                    <RepositoryList>
                        { this.props.favorites.data.map(favorite => (
                            <Animated animationIn="fadeInRight" isVisible={true} key={favorite.id}>
                                <Repository>
                                    <div>
                                        <img src={favorite.avatar} alt={favorite.name} />
                                        <h2>{favorite.name}</h2>
                                        <p>
                                            <TiStarFullOutline style={{fontSize: '2rem', color: '#f6e58d'}} />{favorite.stars}
                                        </p>
                                    </div>
                                    <p>{favorite.description}</p>
                                    <a href={favorite.url} target="blank">Open this Repository</a>
                                </Repository>
                            </Animated>
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

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);