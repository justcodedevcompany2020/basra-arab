import { StartCreateCategory, StartDeletCategory, StartGetBreands, StartGetCategory, StartGetCollections, StartLogin } from "./StartAction";
import { SuccessDelectCategory, SuccessGetBreand, SuccessGetCategory, SuccessGetCollections, SuccessLogin } from "./SuccessAction"
import { ErrorCreatCategory, ErrorDeletCategory, ErrorGetBreand, ErrorGetCategory, ErrorGetCollections, ErrorLogin } from "./errorAction";

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

export const UpdateCategoryAction = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    var formdata = new FormData();
    console.log(data)
    formdata.append("name", data.name);
    if (data.image) {
        formdata.append("photo", data.photo, "file");
    }
    formdata.append("category_id", data.id);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    return (dispatch) => {
        fetch(`${api}/update_category`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(GetCategory())
                }
            })
            .catch(error => {
            });
    }
}

export const GetBrandAction = (page) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartGetBreands())
        fetch(`${api}/get_brands?page=${page}`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                console.log(r, '2222')
                if (r.status) {
                    dispatch(SuccessGetBreand(r))
                }
                else {
                    dispatch(ErrorGetBreand())
                }
            })
            .catch((error) => {
                console.log(error)
                dispatch(ErrorGetBreand())
            });
    }
}

export const UpdateBrendCategory = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    var formdata = new FormData();
    console.log(data)
    formdata.append("name", data.name);
    if (data.image) {
        formdata.append("photo", data.photo, "file");
    }
    formdata.append("brand_id", data.id);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    return (dispatch) => {
        fetch(`${api}/update_brand`, requestOptions)
            .then(response => response.json())
            .then(r => {
                console.log(r, 'error')
                if (r.status) {
                    dispatch(GetBrandAction())
                }
            })
            .catch(error => {
                console.log(error, 'error')
            });
    }

}

export const DelectBrandAction = (data) => {
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
        fetch(`${api}/delete_brand`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                console.log(r)
                if (r.status) {
                    dispatch(GetBrandAction())
                }
            })
            .catch((error) => {
            });
    }
}

export const GetCollectionAction = (page) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartGetCollections())
        fetch(`${api}/all_podborki?page=${page}`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                console.log(r, '2222')
                if (r.status) {
                    dispatch(SuccessGetCollections(r))
                }
                else {
                    dispatch(ErrorGetCollections())
                }
            })
            .catch((error) => {
                console.log(error)
                dispatch(ErrorGetCollections())
            });
    }
}

export const DeletCollectionAction = (data) => {
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
        fetch(`${api}/delete_podborka`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                console.log(r)
                if (r.status) {
                    dispatch(GetCollectionAction())
                }
            })
            .catch((error) => {
            });
    }

}

export const UpdateCollectionAction = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    var formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("podborka_id", data.id);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    return (dispatch) => {
        fetch(`${api}/update_podborki`, requestOptions)
            .then(response => response.json())
            .then(r => {
                console.log(r, 'error')
                if (r.status) {
                    dispatch(GetCollectionAction())
                }
            })
            .catch(error => {
                console.log(error, 'error')
            });
    }
}