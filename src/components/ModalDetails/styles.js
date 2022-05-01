import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    text-align: center;
    justify-content: center;
    gap: 40px;



    .img-product {
        display: flex;
        flex-direction: column;
        gap: 20px;

        h1 {
        font-family: 'Poppins', sans-serif;
            font-weight: 300;
            font-size: x-large;
            cursor: default;
        }

        button {
            outline: none;
        border: none;
        width: 25%;
        margin: 0 auto 0;
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

    .info-product {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        h1 {
        font-family: 'Poppins', sans-serif;
            font-weight: 300;
            font-size: xx-large;
            cursor: default;
        }
        h2 {
            font-family: 'Poppins', sans-serif;
            font-weight: 300;
            font-size: medium;
            cursor: default;
        }
    }

    .info-det {
        height: 200px;
        overflow: auto;
        margin-bottom: 10px;
        &::-webkit-scrollbar {
            width: 12px;             
        }
        
        &::-webkit-scrollbar-track {
            border-radius: 20px;
            background: var(--gray200);      
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--gray300);   
            border-radius: 20px;      
            border: 3px solid var(--gray200);  
        }
    }

    .coment {
        overflow: auto;
        max-height: 250px;
        width: 100%;
        

        form {
            background-color: var(--gray300);
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            padding: 10px 0 10px 0;
            margin-right: 5px;
        }

        input {
            outline: none;
            border: none;
            background-color: var(--gray200);
            border-radius: 10px;
            padding: 5px 3px 5px 6px;
            border-radius: 10px;
            font-family: 'Poppins', sans-serif;
            font-weight: 300;
        }

        button {
            outline: none;
        border: none;
        width: 25%;
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

        &::-webkit-scrollbar {
            width: 12px;             
        }
        
        &::-webkit-scrollbar-track {
            border-radius: 20px;
            background: var(--gray200);      
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--gray300);   
            border-radius: 20px;      
            border: 3px solid var(--gray200);  
        }
    }

    .coment-solo {
        background-color: var(--gray200);
        text-align: left;
        margin-top: 5px;
        overflow: auto;
        width: 380px;
        max-height: 80px;
        word-break: break-word;
        padding: 5px 10px 5px 10px;
        display: flex;
        align-items: center;
        gap: 20px;

        img {
            height: 30px;
        }

        
        &::-webkit-scrollbar {
            width: 12px;             
        }
        
        &::-webkit-scrollbar-track {
            border-radius: 20px;
            background: var(--gray200);      
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--gray300);   
            border-radius: 20px;      
            border: 3px solid var(--gray200);  
        }

        h1 {
            font-family: 'Poppins', sans-serif;
            font-weight: 300;
            font-size: medium;
            cursor: default;
        }
        h2 {
            font-family: 'Poppins', sans-serif;
            font-weight: 300;
            font-size: small;
            cursor: default;
        }
    }


    img {
        height: 300px;
    }

`