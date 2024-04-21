import { useDispatch } from 'react-redux';
import { loguinUser } from '../API/user.api';
import { storeUserID, updateSesion } from '../features/loguin.slice';
import { ILoguinDto } from '../dto/loguin.dto';
import { ILoginResponse } from '../interfaces/loguin.interface';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (formData: ILoguinDto) => {
    try {
      const data: ILoginResponse | undefined = await loguinUser(formData);

      if (data) {
        await dispatch(updateSesion(data.loguin));
        await dispatch(storeUserID(String(data.user.id)));
        Swal.fire({
          title: `Hola ${data.user.name}!`,
          text: `Bienvenido Nuevamente 🙂`,
          icon: 'success',
          didClose: () => {
            navigate('/appointments');
          },
        });
      }
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return { login };
};

export default useLogin;
