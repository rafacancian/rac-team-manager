import { useState } from 'react';
import Banner from './components/Banner';
import FieldForm from './components/FieldForm';
import Team from './components/Team';

function App() {

   const [teams, setTeams] = useState([
    {
      name: 'Java Developer',
      color: '#57C278'
    },
    {
      name: 'Front-End',
      color: '#82CFFA'
    },
    {
      name: 'Data Science',
      color: '#A6D157'
    },
    {
      name: 'Devops',
      color: '#E06B69'
    },
    {
      name: 'UX e Design',
      color: '#DB6EBF'
    },
    {
      name: 'Mobile',
      color: '#FFBA05'
    },
    {
      name: 'Inovation and Management',
      color: '#FF8A29'
    }
  ])

  const [collaborators, setCollaborators] = useState([])

  const saveCollaborator = (collaborator) =>{
    setCollaborators([...collaborators, collaborator])
  }

  function deleteCollaborator(){
    console.log("delete collaborator");
  }

  function changeTeamColor(newColor, teamName) {
    setTeams(teams.map(team => {
        if(team.name === teamName) {
            team.color = newColor;
        }
        return team;
    }))
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
              color={team.color}
              collaborators={collaborators.filter(collaborator => collaborator.teamName === team.name)}
              toDelete={deleteCollaborator}
              changeColor={changeTeamColor}
            />)}


    </div>
  );
}

export default App;
