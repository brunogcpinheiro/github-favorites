import styled from 'styled-components';
import { primary, secondary } from '../../utils/colors';

export const Container = styled.div`
   margin-top: 30px;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const Form = styled.form`
    display: flex;
    width: 500px;
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
    margin: 30px 0 30px -300px;
    
    span {
        color: ${primary};
        font-size: 1.7rem;
    }
`;

export const RepositoryList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
    
    li {
        -webkit-box-shadow: 6px 6px 12px 0px rgba(199,199,199,1);
        -moz-box-shadow: 6px 6px 12px 0px rgba(199,199,199,1);
        box-shadow: 6px 6px 12px 0px rgba(199,199,199,1);
        padding: 20px;
        margin: 10px;
        width: 350px;
        float: left;
        background: ${secondary};
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        h2 {
            font-size: 1.7rem;
            margin-bottom: 20px;
        }
        
        p {
            font-size: 1.4rem;
            margin-bottom: 30px;
        }
        
        a {
            color: #181818;
            background: ${primary};
            padding: 10px 20px;
            text-decoration: none;
            font-size: 1.4rem;
            font-weight: bold;
        }
    }
`;