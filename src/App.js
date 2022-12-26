import { useState } from 'react';
import Banner from './components/Banner';
import FieldForm from './components/FieldForm';
import Team from './components/Team';
import { v4 as uuidv4 } from 'uuid';

function App() {

   const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Java Developer',
      color: '#57C278'
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#82CFFA'
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#A6D157'
    },
    {
      id: uuidv4(),
      name: 'Devops',
      color: '#E06B69'
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      color: '#DB6EBF'
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FFBA05'
    },
    {
      id: uuidv4(),
      name: 'Inovation and Management',
      color: '#FF8A29'
    }
  ])

  const [collaborators, setCollaborators] = useState([])

  const saveCollaborator = (collaborator) =>{
    setCollaborators([...collaborators, collaborator])
  }

  function deleteCollaborator(id){
    setCollaborators(collaborators.filter(c => c.id !== id));
  }

  function changeTeamColor(newColor, id) {
    setTeams(teams.map(team => {
        if(team.key === id) {
            team.color = newColor;
        }
        return team;
    }))
  }

  function saveNewTeam(newTime){
     setTeams([...teams, {...newTime, id: uuidv4()}])
  }

  return (
    <div className="App">
          <Banner />
          <FieldForm
            saveNewTeam={saveNewTeam}
            teams={teams.map(team => team.name)}
            saveNewCollaborator={collaborator => saveCollaborator(collaborator)}
          />

          {teams.map(team =>
            <Team
              key={team.id}
              name={team.name}
              color={team.color}
              collaborators={collaborators.filter(collaborator => collaborator.teamName === team.name)}
              toDelete={deleteCollaborator}
              changeColor={changeTeamColor}
            />
          )}


    </div>
  );
}

export default App;
