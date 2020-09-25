import styled, { css } from "styled-components";
import { shade } from "polished";

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 48px;
    color: #d2d2d2;

    line-height: 56px;
    margin-top: 50px;
    max-width: 450px;
`;
export const Form = styled.form<FormProps>`
    display: flex;
    margin-top: 40px;
    max-width: 700px;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        font-size: 20px;
        border: 0;
        border-radius: 5px 0 0 5px;
        background-color: #222;
        color: #d2d2d2;
        ${(props) =>
            props.hasError &&
            css`
                border-bottom: 3px solid #ff5555;
            `}

        &::placeholder {
            color: #a8a8b3;
        }
    }
    button {
        width: 210px;
        height: 70px;
        background: #7147d4;
        border-radius: 0px 5px 5px 0px;
        border: 0;
        cursor: pointer;
        color: #d2d2d2;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background-color: ${shade(0.3, "#7147d4")};
        }
    }
`;
export const Repositories = styled.div`
    margin-top: 60px;
    max-width: 700px;

    a {
        background: #222;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;
        border-left: 5px solid #50fa7b;

        display: flex;
        align-items: center;
        transition: transform 0.2s, box-shadow 0.5s;

        &:hover {
            transform: translateX(16px);
            box-shadow: 0px 4px 16px 3px #111;
        }

        & + a {
            margin-top: 16px;
        }
    }
    img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }
    div {
        margin-left: 20px;
        flex: 1;
        strong {
            font-size: 20px;
            color: #d2d2d2;
        }
        p {
            font-size: 18px;
            color: #a8a8b3;
            margin-top: 4px;
        }
    }
    svg {
        margin-left: auto;
    }
`;
export const Error = styled.span`
    display: block;
    color: #ff5555;
    margin-top: 10px;
`;
