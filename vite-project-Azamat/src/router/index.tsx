import { Link, Route, Switch } from 'react-router-dom'
import { UsersPage } from '../pages'
import MainPage from '../MainPage'

export const Router = () => {
    return <Switch>
         <Route
        exact
        path="/"
        component={MainPage}
        />
        <Route
        exact
        path="/users"
        component={UsersPage}
        />
        <Route exact path="/system" component={()=>(<>
        <Link to="/users">Пользователи</Link>
        </>)}/>
    </Switch>
}