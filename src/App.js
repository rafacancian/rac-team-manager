import Banner from './components/Banner';
import FieldForm from './components/FieldForm';

function App() {

   const teams = [
    {
      name: 'Java Developer',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      name: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      name: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      name: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      name: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      name: 'Inovation and Management',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  return (
    <div className="App">
          <Banner />
          <FieldForm teams={teams}/>
    </div>
  );
}

export default App;
