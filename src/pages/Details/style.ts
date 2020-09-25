import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;

        color: #cbcbd6;
        transition: color 0.2s;

        &:hover {
            color: #888;
        }
    }
`;
export const RepositoryInfo = styled.section`
    margin-top: 80px;
    header {
        display: flex;
        align-items: center;

        img {
            width: 160px;
            height: 160px;
            border-radius: 50%;
        }

        div {
            margin-left: 24px;

            strong {
                font-size: 36px;
                color: #ddd;
            }
            p {
                font-size: 18px;
                color: #aaa;
                margin-top: 4px;
            }
        }
    }
    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {
            strong {
                display: block;
                font-size: 36px;
                color: #ddd;
            }
            span {
                display: block;
                margin-top: 4px;
                color: #aaa;
            }

            & + li {
                margin-left: 80px;
            }
        }
    }
`;
export const Issues = styled.div`
    margin-top: 20px;

    a {
        background: #222;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;
        border-left: 5px solid #ff5555;

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

export const IssuesTitle = styled.h1`
    font-weight: 400;
    margin-top: 20px;
    color: #a8a8b3;
`;
export const Divider = styled.div`
    margin-top: 30px;
    width: 100%;
    border-top: 1px solid #222;
`;
