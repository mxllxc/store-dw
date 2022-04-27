import styled from "styled-components";

export const Container = styled.div` 

    .login-done {
        display: none;
    }
    .login-rejected {
        display: flex;
        justify-content: center;
    }

    .h1-cadastro-true {
        border-bottom: 1px solid var(--black);
        transition: 0.3s;

        &:hover {
            border-bottom: 1px solid var(--gray700);
        }
    }
    .h1-login-true {
        border-bottom: 1px solid var(--black);
        transition: 0.3s;

        &:hover {
            border-bottom: 1px solid var(--gray700);
        }
    }

    .login-false {
        display: none;
    }

    .login-true {
        display: block;
        margin: 20px auto;
    }

    .titles {
        display: flex;
        justify-content: space-around;
    }

    .cadastro-true {
        display: block;
    }

    .cadastro-false {
        display: none;
    }

    .field-cadastro {
        display: flex;
        justify-content: flex-start;
        gap: 20px;
        margin-top: 15px;
        margin-left: 15px;
    }

    form {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    button {
        outline: none;
        border: none;
        width: 25%;
        margin: 20px auto 0;
        padding: 6px 50px 6px 50px;
        display: flex;
        justify-content: center;
        background-color: var(--gray700);
        color: white;
        border-radius: 10px;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        border: 1px solid var(--gray700);
        transition: 0.3s;

        &:hover {
            background-color: var(--white);
            color: var(--black);
            border: 1px solid var(--gray700);
        }
    }

    h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: xx-large;
        cursor: default;
        margin-top: -15px;
    }

    label {
        margin-top: 10px;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: large;
        text-align: center;
        cursor: default;
    }

    input {
        outline: none;
        border: none;
        border-bottom: 1px solid var(--gray300);
        transition: 0.3s;

        &:focus {
            border-bottom: 1px solid var(--gray700);
        }
    }

`