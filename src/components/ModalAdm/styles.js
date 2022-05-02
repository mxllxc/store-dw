import styled from "styled-components"

export const Container = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
        font-family: 'Poppins', sans-serif;
            font-weight: 300;
            font-size: x-large;
            cursor: default;
        }

`

export const ContainerAdm = styled.div`
    display: flex;
    flex-direction: column;

    .content {
        display: flex;
        align-items: center;
        gap: 50px;
    }

    .titulos {
        display: flex;
        justify-content: space-around;
    }

    h1 {
        font-family: 'Poppins', sans-serif;
            font-weight: 300;
            font-size: x-large;
            cursor: default;
        }

        .border {
            border-left: 1px solid black;
            padding-left: 20px;
            margin-left: -20px;
        }

    form {
        margin-top: 30px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        width: 60%;

        select {
            margin-top: 10px;
            width: 100%;
            border-radius: 10px;
            height: 25px;
            border: 1px solid var(--gray700);
        }

        input {
            border: 1px solid var(--gray700);
            border-radius: 10px;
            height: 25px;
            margin-top: 10px;
        }

        .labels {
            display: flex;
            flex-direction: column;
            text-align: end;
        }

        label {
            height: 25px;
            font-family: 'Poppins', sans-serif;
            font-weight: 300;
            font-size: medium;
            cursor: default;
            margin-top: 10px;
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
    }

    .cat {
        display: flex;
        justify-content: center;
    }
    .prod {
        display: flex;
        justify-content: center;
    }

`