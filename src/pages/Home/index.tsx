import React, { useEffect, useState, FormEvent } from "react";

import { Title, Form, Repositories, Error } from "./style";
import { FiChevronRight } from "react-icons/fi";
import logoExplorer from "../../assets/1587379765556-attachment.svg";

import api from "../../services/api";
import { Link } from "react-router-dom";

interface Repository {
    full_name: string;
    owner: {
        login: string;
        avatar_url: string;
    };
    description: string;
}

const Home: React.FC = () => {
    const [newRepo, setNewRepo] = useState("");
    const [inputError, setInputError] = useState("");

    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const localRepo = localStorage.getItem("@GithubExplorer:repositories");
        if (localRepo) {
            return JSON.parse(localRepo);
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem(
            "@GithubExplorer:repositories",
            JSON.stringify(repositories)
        );
    }, [repositories]);
    async function handleGetRepository(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!newRepo) {
            setInputError("Digite o autor/nome do repositório");
            return;
        }

        try {
            const response = await api.get<Repository>(`repos/${newRepo}`);

            const data = response.data;

            setRepositories([...repositories, data]);

            setNewRepo("");
            setInputError("");
        } catch (error) {
            setInputError("Erro na busca pelo repositório");
        }
    }
    return (
        <>
            <img src={logoExplorer} alt="Logo github explorer" />
            <Title>Explore repositórios no Github</Title>
            <Form hasError={!!inputError} onSubmit={handleGetRepository}>
                <input
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Insira o repositorio. ex : facebook/react"
                />
                <button>Procurar</button>
            </Form>
            {inputError && <Error>{inputError}</Error>}
            <Repositories>
                {repositories.map((repository) => (
                    <Link
                        key={repository.full_name}
                        to={`details/${repository.full_name}`}
                    >
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.avatar_url}
                        />

                        <div>
                            <strong>{repository.full_name} </strong>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight size={20} color="#cbcbd6" />
                    </Link>
                ))}
            </Repositories>
        </>
    );
};
export default Home;
