import React, { useState, FormEvent, useEffect } from "react";
import { Title, Form, Repository, Error, Container } from "./style";
import api from "../../services/api";
import Logo from "../../assests/logo-github.svg";
import { FiChevronRight } from "react-icons/fi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Home: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositores = localStorage.getItem("@githubexplporer");

    if (storageRepositores) {
      return JSON.parse(storageRepositores);
    } else {
      return [];
    }
  });
  const [newRepo, setNewRepo] = useState("");
  const [inputErro, setInputError] = useState(" ");

  useEffect(() => {
    localStorage.setItem("@githubexplporer", JSON.stringify(repositories));
  }, [repositories]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!newRepo) {
      setInputError("digite o nome do repositório");
      toast.error("Este campo está vazio");
      return;
    }

    let isPossibleAddInCache = true;
    repositories.forEach((e) => {
      if (e.full_name.toLowerCase().includes(newRepo.toLocaleLowerCase())) {
        setInputError("digite o nome do repositório");
        toast.error("Repositorio já existente");
        isPossibleAddInCache = false;
        return;
      }
    });

    try {
      //add novos repositórios
      if (isPossibleAddInCache) {
        const response = await api.get(`repos/${newRepo}`);
        const repository = response.data;
        setRepositories([...repositories, repository]);
        setNewRepo("");
        setInputError("");
        toast.success("adicionado com sucesso");
        console.log(repositories);
      }
    } catch {
      toast.error("deu erro");
    }
  }

  function deleteRepo(nameRepo: string) {
    setRepositories(repositories.filter((item) => item.full_name !== nameRepo));
    toast.success("Removido com sucesso");
    console.log(repositories);
  }

  return (
    <>
      <img src={Logo} alt="Logo App" />
      <Title>Encontre repositórios no GitHub</Title>
      <Form hasError={!!inputErro} onSubmit={handleAddRepository} action=" ">
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          type="text"
          id="input-search"
          placeholder="Digite o nome do repositório"
        />

        <button type="submit" id="button-submit">
          {" "}
          Pesquisar{" "}
        </button>
      </Form>
      {inputErro && <Error>{inputErro}</Error>}

      <Repository>
        {repositories.map((repo) => (
          <Container>
            <Link key={repo.full_name} to={`repo/${repo.full_name}`}>
              <img src={repo.owner.avatar_url} alt={repo.owner.login} />
              <div>
                <strong>{repo.full_name}</strong>
                <p>{repo.description}</p>
              </div>
              <FiChevronRight size={40}></FiChevronRight>
            </Link>
            <div className="traco"></div>
            <p onClick={() => deleteRepo(repo.full_name)} id="delete">
              Excluir
            </p>
          </Container>
        ))}
      </Repository>
    </>
  );
};
export default Home;
