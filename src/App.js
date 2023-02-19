import './App.css';
import {createTheme,ThemeProvider} from '@mui/material'
import { useEffect } from 'react';
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

const theme = createTheme({
  direction:"rtl",
  palette:{
    primary:{
      main:"#18A0FB",
      contrastText:"#ffffff"
    }
  }
})

function App() {

  useEffect(()=>{
    const lang = Cookies.get("i18next") || "en";
    if(lang==="ar"){
      document.body.dir="rtl"
    }
    else{
      document.body.dir="ltr"
    }
  },[])

  function changeLanugage(lang)
  {
      i18next.changeLanguage(lang);
      if(lang==="ar"){
        document.body.dir="rtl"
      }
      else{
        document.body.dir="ltr"
      }
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          {/** student auth pages */}
          {/** teacher auth */}
          {/** student pages */}
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
          <Route path='admin' element={<AdminHome/>}/>
          <Route path='admin/levels' element={<StudyLevels/>}/>
          <Route path='admin/years' element={<StudyYears/>}/>
          <Route path='admin/curriculums' element={<StudyCurriculums/>}/>
          <Route path='admin/subjects' element={<Subjects/>}/>
          <Route path='admin/categories' element={<Categories/>}/>
          <Route path='admin/Curriculums_insert' element={<InsertCurriculums/>}/>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
