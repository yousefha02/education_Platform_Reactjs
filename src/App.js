import './App.css';
import {createTheme,ThemeProvider} from '@mui/material'
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import Cookies from 'js-cookie';
import {Navigate, Route,Routes} from 'react-router-dom'
import TeacherAbout from './pages/teacher/TeacherAbout';
import TeacherPhoto from './pages/teacher/TeacherPhoto';
import AdminHome from './pages/admin/AdminHome';
import Subjects from './pages/admin/Subjects';
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
import Home from './pages/client/Home';
import {useSelector,useDispatch} from 'react-redux'
import Landing from './pages/client/Landing';
import SearchFilterTeacher from './pages/client/SearchFilterTeacher';
import ParentRegister from './pages/parent/ParentRegister';
import AdminLevels from './pages/admin/AdminLevels';
import AdminClasses from './pages/admin/AdminClasses';
import AdminCurriculums from './pages/admin/AdminCurriculums';
import AdminSubjectCategories from './pages/admin/AdminSubjectCategories';
import AdminParentStudent from './pages/admin/AdminParentStudent';
import StudentMessages from './pages/student/StudentMessages';

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
    },
    Gray:{
      main:"#F6F6F6",
      contrastText:"#6D6D6D"
    },
    Blue:{
      main:"#ffffff33",
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

  const {admin} = useSelector((state)=>state.admin)
  const {teacher} = useSelector((state)=>state.teacher)
  const {parent} = useSelector((state)=>state.parent)
  const {student} = useSelector((state)=>state.student)

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Routes>
            {/** client pages */}
            <Route path='/' element={<Home/>}/>
            <Route path='/landing' element={<Landing/>}/>
            <Route path='teacher/:id' element={<SingleTeacher/>}/>
            <Route path="teachers/search" element={<SearchTeachers/>}/>
            <Route path='/filter/:subjectId' element={<SearchFilterTeacher/>}/>

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
            <Route path='student/profile' element={student?<StudentProfile/>:<Navigate to="/login"/>}/>
            <Route path='student/settings' element={student?<StudentSettings/>:<Navigate to="/login"/>}/>
            <Route path='/student/messages' element={student?<StudentMessages/>:<Navigate to="/login"/>}/>

            {/** teacher pages */}
            <Route path='teacher/about' element={teacher?<TeacherAbout/>:<Navigate to="/login"/>}/>
            <Route path='teacher/photo' element={teacher?<TeacherPhoto/>:<Navigate to="/login"/>}/>
            <Route path='teacher/additionalInformation' element={teacher?<AdditionalInformation/>:<Navigate to="/login"/>}/>
            <Route path='teacher/subjects' element={teacher?<TeacherSubjects/>:<Navigate to="/login"/>}/>
            <Route path='teacher/resume' element={teacher?<TeacherResume/>:<Navigate to="/login"/>}/>
            <Route path='teacher/availability' element={teacher?<TeacherAvailability/>:<Navigate to="/login"/>}/>
            <Route path='teacher/description' element={teacher?<TeacherDescription/>:<Navigate to="/login"/>}/>
            <Route path='teacher/video' element={teacher?<TeacherVideo/>:<Navigate to="/login"/>}/>

            {/** admin pages */}
            <Route path='admin/login' element={!admin?<AdminLogin/>:<Navigate to="/admin"/>}/>
            <Route path='admin' element={admin?<AdminHome/>:<Navigate to="/admin/login"/>}/>
            <Route path='admin/levels' element={admin?<AdminLevels/>:<Navigate to="/admin/login"/>}/>
            <Route path='admin/years' element={admin?<AdminClasses/>:<Navigate to="/admin/login"/>}/>
            <Route path='admin/curriculums' element={admin?<AdminCurriculums/>:<Navigate to="/admin/login"/>}/>
            <Route path='admin/subjects' element={admin?<Subjects/>:<Navigate to="/admin/login"/>}/>
            <Route path='admin/categories' element={admin?<AdminSubjectCategories/>:<Navigate to="/admin/login"/>}/>
            <Route path='admin/Curriculums_insert' element={admin?<InsertCurriculums/>:<Navigate to="/admin/login"/>}/>
            <Route path='admin/teachers_approve' element={admin?<TeachersApprove/>:<Navigate to="/admin/login"/>}/>
            <Route path='admin/change_password' element={admin?<AdminChangePassword/>:<Navigate to="/admin/login"/>}/>
            <Route path='admin/parent-student' element={admin?<AdminParentStudent/>:<Navigate to="/admin/login"/>}/>
            
            {/** parent pages */}
            <Route path='parent/register' element={<ParentRegister/>}/>
            <Route path='parent' element={parent?<HomeParent/>:<Navigate to="/"/>}/>
            <Route/>
          </Routes>
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
