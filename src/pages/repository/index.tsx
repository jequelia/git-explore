import React, { useState, useEffect } from "react";
import { Header, InfoRepo, Issues } from "./style";
import Logo from "../../assests/logo-github.svg";
import { Link, useRouteMatch } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import api from "../../services/api";

interface RepositoryParam {
  repository: string;
}

<<<<<<< HEAD
interface RepositoryInterface{
    repository: string;
    full_name: string;
    description: string;
    forks_count: number;
    stargazers_count: number;
    open_issues_count: number;

    owner:{
        login: string;
        avatar_url: string;
    }
}

interface  Issue{
    id: number,
    title: string,
    html_url: string,
    user:{
        login: string,
    }

}

const Repository: React.FunctionComponent = () => {

    const [ repository, setRepository] = useState<RepositoryInterface | null>(null);
    const [ issues, setIssues] = useState<Issue[]>([]);
    const {params} = useRouteMatch<RepositoryParam>();

    useEffect(()=>{

        api.get(`repos/${params.repository}`).then(
            response => {
                console.log(response.data);
                setRepository(response.data);
            }
        )

        api.get(`repos/${params.repository}/issues`).then(
            response => {
                console.log(response.data);
                setIssues(response.data)
            }
        )

        // async function loadData(): Promise<void> {
        //     const [ repository, issues] = await Promise.all([
        //         api.get(`repos/${params.repository}`),
        //         api.get(`repos/${params.repository}/issues`)
        //     ])

        //     console.log('repository', repository);
        //     console.log('issues', issues.data);
            
        // }

        // loadData()

    }, [params.repository])

    return (
        <>
            <Header>
                <img src={Logo} alt="Logo App"/>
                <Link to="/"> <FiChevronLeft size={30}/>Voltar</Link>
            </Header>

            { (
                 <InfoRepo>
                 <header>
                     <img 
                         src={repository?.owner.avatar_url}
                         alt={repository?.full_name}
                     />
                     <div>
                         <strong>{repository?.full_name}</strong>
                         <p>{repository?.description}</p>
                     </div>
                 </header>
               
                 <ul>
                     <li>
                         <strong>{repository?.stargazers_count}</strong>
                         <span>Start</span>
                     </li>
                     <li>
                         <strong>{repository?.forks_count}</strong>
                         <span>Forks</span>
                     </li>
                     <li>
                         <strong>{repository?.open_issues_count}</strong>
                         <span>Issues abertas</span>
                     </li>
                 </ul>
             </InfoRepo>
            )}
           
            <Issues>
                {issues.map( issue =>(
                     <a key={issue.id} href={issue.html_url}>
                     <div>
                         <strong>{issue.title}</strong>
                         <p>{issue.user.login}</p>
                     </div>
                     <FiChevronRight size={40}></FiChevronRight>
                     </a>
                ))}
            </Issues>
            
        </>
    );
=======
interface Repository {
  repository: string;
  full_name: string;
  description: string;
  forks_count: number;
  stargazers_count: number;
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
>>>>>>> a76fd94a2518c8b430bbab56d2370d1187294b32
}

const Repository: React.FunctionComponent = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const { params } = useRouteMatch<RepositoryParam>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      console.log(response.data);
      setRepository(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then((response) => {
      console.log(response.data);
      setIssues(response.data);
    });

    // async function loadData(): Promise<void> {
    //     const [ repository, issues] = await Promise.all([
    //         api.get(`repos/${params.repository}`),
    //         api.get(`repos/${params.repository}/issues`)
    //     ])

    //     console.log('repository', repository);
    //     console.log('issues', issues.data);

    // }

    // loadData()
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={Logo} alt="Logo App" />
        <Link to="/">
          {" "}
          <FiChevronLeft size={30} />
          Voltar
        </Link>
      </Header>

      {
        <InfoRepo>
          <header>
            <img
              src={repository?.owner.avatar_url}
              alt={repository?.full_name}
            />
            <div>
              <strong>{repository?.full_name}</strong>
              <p>{repository?.description}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repository?.stargazers_count}</strong>
              <span>Start</span>
            </li>
            <li>
              <strong>{repository?.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository?.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </InfoRepo>
      }

      <Issues>
        {issues.map((issue) => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={40}></FiChevronRight>
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
