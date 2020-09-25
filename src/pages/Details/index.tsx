import React, { useEffect, useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";

import { Header, RepositoryInfo, Issues, IssuesTitle, Divider } from "./style";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import logoExplorer from "../../assets/1587379765556-attachment.svg";

import api from "../../services/api";

interface Params {
    repositories: string;
}

interface Repository {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
        login: string;
        avatar_url: string;
    };
}
interface Issue {
    id: number;
    title: string;
    html_url: string;
    user: {
        login: string;
    };
}

const Details: React.FC = () => {
    const { params } = useRouteMatch<Params>();

    const [repository, setRepository] = useState<Repository | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);

    useEffect(() => {
        api.get(`repos/${params.repositories}`).then((response) => {
            setRepository(response.data);
        });
        api.get(`repos/${params.repositories}/issues`).then((response) => {
            setIssues(response.data);
        });
    }, [params.repositories]);
    return (
        <>
            <Header>
                <img src={logoExplorer} alt="Github Explorer" />
                <Link to="/">
                    <FiChevronLeft size={20} color="#cbcbd6" />
                    &nbsp; Voltar
                </Link>
            </Header>
            {repository && (
                <RepositoryInfo>
                    <header>
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                    </header>
                    <ul>
                        <li>
                            <strong>{repository.stargazers_count}</strong>
                            <span>Stars</span>
                        </li>
                        <li>
                            <strong>{repository.forks_count}</strong>
                            <span>Forks</span>
                        </li>
                        <li>
                            <strong>{repository.open_issues_count}</strong>
                            <span>Issues abertas</span>
                        </li>
                    </ul>
                </RepositoryInfo>
            )}
            <Divider />
            <IssuesTitle>
                Issues &nbsp; <FiChevronRight size={20} color="#a8a8b3" />
            </IssuesTitle>
            <Issues>
                {issues.map((issue) => (
                    <a key={issue.id} target="_blank" href={issue.html_url}>
                        <div>
                            <strong>{issue.user.login} </strong>
                            <p>{issue.title}</p>
                        </div>
                        <FiChevronRight size={20} color="#cbcbd6" />
                    </a>
                ))}
            </Issues>
        </>
    );
};
export default Details;
