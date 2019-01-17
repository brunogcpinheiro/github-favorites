import styled from 'styled-components';
import { primary } from '../../utils/colors';

export const Container = styled.div`
    max-width: 500px;
    margin: 30px auto;
`;

export const Form = styled.form`
    display: flex;
`;

export const Input = styled.input`
    width: 100%;
    height: 50px;
    border: none;
    border: 1px solid ${primary};
    padding: 20px;
    font-size: 2rem;
`;

export const SubmitButton = styled.button`
    background: ${primary};
    color: #fff;
    padding: 10px 20px;
    border: none;
    font-size: 1.5rem;
`;

export const HeaderMsg = styled.h3`
    font-size: 1.5rem;
    margin: 20px;
    
    span {
        color: ${primary};
        font-size: 1.7rem;
    }
`;

export const RepositoryList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    
    li {
        -webkit-box-shadow: 6px 6px 12px 0px rgba(217,217,217,1);
        -moz-box-shadow: 6px 6px 12px 0px rgba(217,217,217,1);
        box-shadow: 6px 6px 12px 0px rgba(217,217,217,1);
        padding: 20px;
        margin: 10px;
        
        h2 {
            font-size: 1.7rem;
            margin-bottom: 20px;
        }
        
        p {
            font-size: 1.4rem;
            margin-bottom: 30px;
        }
        
        a {
            color: #fff;
            background: ${primary};
            padding: 10px 20px;
            text-decoration: none;
            font-size: 1.4rem;
        }
    }
`;