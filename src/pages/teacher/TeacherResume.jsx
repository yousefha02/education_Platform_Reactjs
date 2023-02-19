import React from 'react'
import Navbar from '../../components/Navbar'
import TeacherLayout from '../../components/teacher/TeacherLayout'

export default function TeacherResume() {
    return (
        <Navbar>
            <TeacherLayout active={4} title="My Resume">

            </TeacherLayout>
        </Navbar>
    )
}
