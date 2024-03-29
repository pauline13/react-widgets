import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { useAppDispatch } from '../../hooks/redux';
import { removeUser } from '../../store/reducers/UserSlice';

const HomePage = () => {
    // const dispatch = useAppDispatch();
    // const { isAuth, email } = useAuth();

    return <div>welcome</div>;
    // <div>
    //     <h1>welcome</h1>
    //     {/* <button onClick={() => dispatch(removeUser())}>log out from {email}</button> */}
    // </div>;
    // ) : (
    //     <Navigate to="/login" />
    // );
};

export default HomePage;
