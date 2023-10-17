import { StartCreateCategory, StartDeletCategory, StartGetCategory, StartLogin } from "./StartAction";
import { SuccessDelectCategory, SuccessGetCategory, SuccessLogin } from "./SuccessAction"
import { ErrorCreatCategory, ErrorDeletCategory, ErrorGetCategory, ErrorLogin } from "./errorAction";

let api = 'https://basrabackend.justcode.am/api/admin'
let token = localStorage.getItem('token')
export const LoginAction = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartLogin())
        fetch(`${api}/admin/login`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessLogin(r))
                }
                else {
                    dispatch(ErrorLogin())
                }
            })
            .catch((error) => {
                dispatch(ErrorLogin())
            });
    }
}

export const GetCategory = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartGetCategory())
        fetch(`${api}/get_category`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetCategory(r))
                }
                else {
                    dispatch(ErrorGetCategory())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetCategory())
            });
    }
}


export const DeletCategoryAction = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartDeletCategory())
        fetch(`${api}/delete_category`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(GetCategory())
                    dispatch(SuccessDelectCategory(r))
                }
                else {
                    dispatch(ErrorDeletCategory())
                }
            })
            .catch((error) => {
                dispatch(ErrorDeletCategory())
            });
    }
}
