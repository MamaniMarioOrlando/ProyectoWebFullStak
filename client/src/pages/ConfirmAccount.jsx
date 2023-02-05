import {useEffect ,useState} from 'react';
import { clientAxios } from "../config/clientAxions";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Alert } from '..component/Alert';
import Swal from 'sweetalert2';



export const ConfirmAccount= () => {

    const params = useParams();
    const { token } = params;

    const [alert, setAlert] = useState({});

    const navigate = useNavigate();

    setAlert({
        msg
    });

    useEffect(() => {
        
        const confirmAccount = async() => {
            try {

                const url = '/auth/checked?token=${token}';
                const { data } = await clientAxios.get(url);
                
                Swal.fire({
                    title : 'Felicitacione',
                    text : 'Tu registración se ha completado con éxito',
                    confirmButtonText : 'Iniciá sesión'
                }).then((result)=>{
                    if(result.isConfirmed){
                        navigate('/')
                    }
                })
            } catch (error) {
                console.error(error.response);
                handleShowAlert(error.response.data.msg)
            }
        };
        confirmAccount();

    },[]);

  return (
    <>
        <div>
        {
            alert.msg && (
                <div>
                    <>
                        <Alert {...alert}/>
                        <nav>
                            <Link to={"/register"}>
                                ¿No tenes una cuenta? Registrate
                            </Link>
                            <Link to={"/"}>
                                ¿Estas registrado? Iniciá sesión
                            </Link>
                        </nav>
                    </>
                </div>
            )
        }
        </div>
    </>
  )
}

