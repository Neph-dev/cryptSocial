/*
  Using react-router-dom@v6
  Declare and set the exact path to every page component.
*/

import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'

import {
    Login,
    Home,
    PasswordRecovery,
    NewPassword,
    SignUp,
    PersonalInformation,
    Post,
    PublicProfile,
} from '../pages'


function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route exact path='/password-recovery' element={<PasswordRecovery />} />
                <Route exact path='/new-password' element={<NewPassword />} />
                <Route exact path='/sign-up' element={<SignUp />} />
                <Route exact path='/sign-up/profile-set-up' element={<PersonalInformation />} />

                <Route exact path='/home' element={<Home />} />
                <Route exact path='/post' element={<Post />} />
                <Route exact path='/public-profile' element={<PublicProfile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers