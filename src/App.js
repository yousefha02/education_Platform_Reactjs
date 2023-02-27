import './App.css';
import {createTheme,ThemeProvider} from '@mui/material'
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import Cookies from 'js-cookie';
import i18next from 'i18next';
import {Route,Routes} from 'react-router-dom'
import TeacherAbout from './pages/teacher/TeacherAbout';
import TeacherPhoto from './pages/teacher/TeacherPhoto';
import AdminHome from './pages/admin/AdminHome';
import StudyLevels from './pages/admin/StudyLevels';
import StudyYears from './pages/admin/StudyYears'
import StudyCurriculums from './pages/admin/StudyCurriculums';
import Subjects from './pages/admin/Subjects';
import Categories from './pages/admin/Categories';
import AdditionalInformation from './pages/teacher/AdditionalInformation';
import TeacherSubjects from './pages/teacher/TeacherSubjects';
import TeacherResume from './pages/teacher/TeacherResume';
import InsertCurriculums from './pages/admin/InsertCurriculums';
import TeacherAvailability from './pages/teacher/TeacherAvailability';
import TeacherDescription from './pages/teacher/TeacherDescription';
import TeacherVideo from './pages/teacher/TeacherVideo';
import Login from './pages/auth/Login';
import StudentFirstStep from './pages/auth/registerStudent/StudentFirstStep';
import StudentSecondStep from './pages/auth/registerStudent/StudentSecondStep';
import StudentThirdStep from './pages/auth/registerStudent/StudentThirdStep';
import StudentFouthStep from './pages/auth/registerStudent/StudentFouthStep';
import TeacherFirstStep from './pages/auth/registerTeacher/TeacherFirstStep';
import TeacherSecondStep from './pages/auth/registerTeacher/TeacherSecondStep';
import TeacherThirdStep from './pages/auth/registerTeacher/TeacherThirdStep';
import SingleTeacher from './pages/client/SingleTeacher';
import SearchTeachers from './pages/client/SearchTeachers';
import StudentProfile from './pages/student/StudentProfile';
import StudentSettings from './pages/student/StudentSettings';
import AdminLogin from './pages/admin/AdminLogin';
import TeachersApprove from './pages/admin/TeachersApprove';
import AdminChangePassword from './pages/admin/AdminChangePassword';
import HomeParent from './pages/parent/HomeParent';
import ParentAddStudent from './pages/parent/ParentAddStudent';

const theme = createTheme({
  direction:"rtl",
  palette:{
    primary:{
      main:"#005B8E",
      contrastText:"#ffffff"
    },
    secondary:{
      main:"#FFC93C",
      contrastText:"#ffffff"
    }
  }
})

function App() {

  const queryClient = new QueryClient()

  useEffect(()=>{
    const lang = Cookies.get("i18next") || "en";
    if(lang==="ar"){
      document.body.dir="rtl"
    }
    else{
      document.body.dir="ltr"
    }
  },[])

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Routes>
            {/** client pages */}
            <Route path='teacher/:id' element={<SingleTeacher/>}/>
            <Route path="teachers/search" element={<SearchTeachers/>}/>
            {/** login page */}
            <Route path='login' element={<Login/>}/>
            {/** student auth */}
            <Route path='studentregister/step1' element={<StudentFirstStep/>}/>
            <Route path='studentregister/step2' element={<StudentSecondStep/>}/>
            <Route path='studentregister/step3' element={<StudentThirdStep/>}/>
            <Route path='studentregister/step4' element={<StudentFouthStep/>}/>
            {/** teacher auth */}
            <Route path='teacherRegister/step1' element={<TeacherFirstStep/>}/>
            <Route path='teacherRegister/step2' element={<TeacherSecondStep/>}/>
            <Route path='teacherRegister/step3' element={<TeacherThirdStep/>}/>
            {/** student pages */}
            <Route path='student/profile' element={<StudentProfile/>}/>
            <Route path='student/settings' element={<StudentSettings/>}/>
            {/** teacher pages */}
            <Route path='teacher/about' element={<TeacherAbout/>}/>
            <Route path='teacher/photo' element={<TeacherPhoto/>}/>
            <Route path='teacher/additionalInformation' element={<AdditionalInformation/>}/>
            <Route path='teacher/subjects' element={<TeacherSubjects/>}/>
            <Route path='teacher/resume' element={<TeacherResume/>}/>
            <Route path='teacher/availability' element={<TeacherAvailability/>}/>
            <Route path='teacher/description' element={<TeacherDescription/>}/>
            <Route path='teacher/video' element={<TeacherVideo/>}/>
            {/** admin pages */}
            <Route path='admin/login' element={<AdminLogin/>}/>
            <Route path='admin' element={<AdminHome/>}/>
            <Route path='admin/levels' element={<StudyLevels/>}/>
            <Route path='admin/years' element={<StudyYears/>}/>
            <Route path='admin/curriculums' element={<StudyCurriculums/>}/>
            <Route path='admin/subjects' element={<Subjects/>}/>
            <Route path='admin/categories' element={<Categories/>}/>
            <Route path='admin/Curriculums_insert' element={<InsertCurriculums/>}/>
            <Route path='admin/teachers_approve' element={<TeachersApprove/>}/>
            <Route path='admin/change_password' element={<AdminChangePassword/>}/>
            {/** parent pages */}
            <Route path='parent' element={<HomeParent/>}/>
            <Route path='parent/add_student' element={<ParentAddStudent/>}/>
            <Route/>
          </Routes>
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
