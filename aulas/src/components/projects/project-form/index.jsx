import dataTeams from '../../../data/data-teams.json';
import React, { useState } from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ptBR } from 'date-fns/locale';
import { TextField } from '@mui/material';

function ProjectForm ( {addProject} ) {
  const [teams] = useState(dataTeams);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const [currentStartDate, setCurrentStartDate] = useState("");
  const [currentDeadline, setCurrentDeadline] = useState("");
  const [currentEndDate, setCurrentEndDate] = useState("");
  const [currentClient, setCurrentClient] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [currentTeam, setCurrentTeam] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); //Impede o navegador de recarregar a página
    //Validação dos campos
    if(
        !currentTitle || 
        !currentDescription || 
        !currentStartDate ||
        !currentDeadline ||
        !currentEndDate ||
        !currentClient ||
        !currentStatus ||
        !currentTeam
    ) {
      alert("Todos os campos são obrigatórios!");
      return;
    }
    //Adicionar uma nova tarefa à lista de tarefas
    addProject(
        currentTitle,
        currentDescription,
        currentStartDate,
        currentDeadline,
        currentEndDate,
        currentClient,
        currentStatus,
        currentTeam
    );
    setCurrentTitle("");
    setCurrentDescription("");
    setCurrentStartDate("");
    setCurrentDeadline("");
    setCurrentEndDate("");
    setCurrentClient("");
    setCurrentTitle("");
    setCurrentStatus("");
    setCurrentTeam("");

    alert("Projeto cadastrado com sucesso!");
  }

  return (
    <section className='section-main'>
      <div className='container-card'>
        <h1>Cadastrar projeto</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <label htmlFor='title'>Título</label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='Digite o título'
            value={currentTitle}
            onChange={
              (event) => 
              setCurrentTitle(event.target.value)
            }
          />
          <label htmlFor='description'>Descrição</label>
          <textarea
            name='description'
            id='description'
            placeholder='Digite a descrição do projeto'
            value={currentDescription}
            onChange={
              (event) => 
              setCurrentDescription(event.target.value)
            }
          />

          <TextField
            id="outlined-basic"
            label="Cliente"
            variant="outlined"
            value={currentClient}
            onChange={
              (event) => 
              setCurrentClient(event.target.value)
            }
          />
          <br></br><br></br>
          <label htmlFor='team'>Equipe</label>
          <select
            name='team'
            id='team'
            value={currentTeam}
            onChange={
              (event) => 
                setCurrentTeam(event.target.value)
            }
          >
            <option value="">Selecione uma equipe</option>
            {teams && teams.map((team => {
              return (
                <React.Fragment key={team.id}>
                  <option value={team.id}>{team.name}</option>
                </React.Fragment>
              )
            }))}
          </select>
          <div>
            <LocalizationProvider adapterLocale={ptBR} dateAdapter={AdapterDayjs}>
              <DatePicker/>
            </LocalizationProvider>
          </div>
          <button className='btn-register' type='submit'>
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  )
}

export default ProjectForm;