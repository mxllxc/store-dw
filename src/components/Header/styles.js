import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--white);
    position: sticky;
    top: 0;
    display: grid;
    grid-template-columns: 1fr 1.8fr;
    gap: 0 200px;
    padding: 10px;
    border-bottom: 1px solid var(--gray300);
    margin: 0 10px 0 10px;
    height: 60px;

    input {
        border: none;
        outline: none;
    }

    .icon-div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0 10px;
    }

    .icon-div-input {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0 10px;
        border-bottom: 1px solid var(--gray300);
        padding-bottom: 3px;
    }

    .block {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    h1 {
        cursor: default;
    }

    h2 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        cursor: pointer;
        transition: 0.2s;

        &:hover {
            color: var(--gray700);
        }
    }

    h3 {
        color: var(--white)
    }

`