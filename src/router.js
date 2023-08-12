import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import App from './App';
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import { bookmarkLoader, bookmarksLoader } from './loaders';
import { deleteAction, updateAction, createAction} from './actions';

const router = createBrowserRouter (createRoutesFromElements (
    <Route path="/" element={<App/>}>
        <Route path="" element={<Index/>} loader={bookmarksLoader}/>
        <Route path=":id" element={<Show/>} loader={bookmarkLoader}/>
        <Route path="create" action ={createAction}/>
        <Route path="update/:id" action={updateAction}/>
        <Route path="delete/:id" action={deleteAction}/>
    </Route>
))

export default router;