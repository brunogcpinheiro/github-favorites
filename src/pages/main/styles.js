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
    margin-right: 20px;
    border: none;
    font-size: 1.5rem;
`;