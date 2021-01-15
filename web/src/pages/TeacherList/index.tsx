import React, { useState, FormEvent } from 'react';
import { Link } from "react-router-dom";


import "./styles.css";

import PageHeader from '../../components/PageHeader/index';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });

        setTeachers(response.data);
    }
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os professores disponíveis" >
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                        name="curso"
                        label="Curso"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                        options={[
                            { value: 'Parkour', label: 'Parkour' },
                            { value: 'Skating', label: 'Skating' },
                            { value: 'Rapel', label: 'Rapel' },
                            { value: 'Asa Delta', label: 'Asa Delta' },
                            { value: 'Rafting', label: 'Rafting ' },
                            { value: 'Paraquedismo', label: 'Paraquedismo' },
                            { value: 'Bumgee Jumping', label: 'Bungee Jumping' },
                            { value: 'Trilha-Hiking', label: 'Trilha-Hiking' },
                            { value: 'Trilha-Trekking', label: 'Trilha Trekking' },
                            { value: 'Paragliding', label: 'Paragliding' },
                            { value: 'Kitesurfing', label: 'Kitesurfing' },

                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da Semana"
                        value={week_day}
                        onChange={(e) => { setWeekDay(e.target.value) }}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-Feira' },
                            { value: '3', label: 'Quarta-Feira' },
                            { value: '4', label: 'Quinta-feira ' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },


                        ]}
                    />

                    <Input
                        type="time"
                        name="time"
                        label="hora"
                        value={time}
                        onChange={(e) => { setTime(e.target.value) }}
                    />
                    <button type="submit">
                        Buscar
          </button>
                </form>
            </PageHeader>


            <main>
            {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
            </main>
        </div>
    )
}

export default TeacherList;