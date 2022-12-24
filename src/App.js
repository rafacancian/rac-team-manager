import { useState } from 'react';
import Banner from './components/Banner';
import FieldForm from './components/FieldForm';
import Team from './components/Team';

function App() {

   const teams = [
    {
      name: 'Java Developer',
      firstColor: '#57C278',
      secondColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      firstColor: '#82CFFA',
      secondColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      firstColor: '#A6D157',
      secondColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      firstColor: '#E06B69',
      secondColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      firstColor: '#DB6EBF',
      secondColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      firstColor: '#FFBA05',
      secondColor: '#FFF5D9'
    },
    {
      name: 'Inovation and Management',
      firstColor: '#FF8A29',
      secondColor: '#FFEEDF'
    }
  ]

  const [collaborators, setCollaborators] = useState([])

  const saveCollaborator = (collaborator) =>{
    setCollaborators([...collaborators, collaborator])
  }

  function deleteCollaborator(){
    console.log("delete collaborator");
  }

  return (
    <div className="App">
          <Banner />
          <FieldForm teams={teams.map(team => team.name)}
            saveNewCollaborator={collaborator => saveCollaborator(collaborator)}/>

           {teams.map(team =>
           <Team
              key={team.name}
              name={team.name}
              firstColor={team.firstColor}
              secondColor={team.secondColor}
              collaborators={collaborators.filter(collaborator => collaborator.teamName === team.name)}
              toDelete={deleteCollaborator}
            />)}


    </div>
  );
}

export default App;
