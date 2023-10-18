import { StartCreateCategory, StartDeletCategory, StartGetBreands, StartGetCategory, StartGetCollections, StartGetForAge, StartGetGenders, StartGetPlatofrms, StartLogin } from "./StartAction";
import { SuccessDelectCategory, SuccessGetBreand, SuccessGetCategory, SuccessGetCollections, SuccessGetForAge, SuccessGetGenders, SuccessGetPlatforms, SuccessLogin } from "./SuccessAction"
import { ErrorCreatCategory, ErrorDeletCategory, ErrorGetBreand, ErrorGetCategory, ErrorGetCollections, ErrorGetForAge, ErrorGetGenders, ErrorGetPlatforms, ErrorLogin } from "./errorAction";

let api = 'https://basrabackend.justcode.am/api/admin'
let api2 = 'https://basrabackend.justcode.am/api'
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
                if (r.status) {
                    dispatch(SuccessGetBreand(r))
                }
                else {
                    dispatch(ErrorGetBreand())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetBreand())
            });
    }
}

export const UpdateBrendCategory = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    var formdata = new FormData();
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
                if (r.status) {
                    dispatch(GetBrandAction())
                }
            })
            .catch(error => {
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
                if (r.status) {
                    dispatch(SuccessGetCollections(r))
                }
                else {
                    dispatch(ErrorGetCollections())
                }
            })
            .catch((error) => {
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
                if (r.status) {
                    dispatch(GetCollectionAction())
                }
            })
            .catch(error => {
            });
    }
}

export const GetGendersAction = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartGetGenders())
        fetch(`${api2}/get_genders`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetGenders(r))
                }
                else {
                    dispatch(ErrorGetGenders())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetGenders())
            });
    }
}
export const GetForAge = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartGetForAge())
        fetch(`${api2}/get_for_age`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetForAge(r))
                }
                else {
                    dispatch(ErrorGetForAge())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetForAge())
            });
    }
}

export const GetPlatforms = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartGetPlatofrms())
        fetch(`${api2}/get_platforms`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetPlatforms(r))
                }
                else {
                    dispatch(ErrorGetPlatforms())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetPlatforms())
            });
    }
}

export const CreatProductAction = (data) => {
    let token = localStorage.getItem('token')
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    var formdata = new FormData();
    formdata.append("name",);
    // formdata.append("photo", img, "file");
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    return (dispatch) => {
        fetch(`${api}/create_product`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    // dispatch(GetCategory())
                    // dispatch(SuccessDelectCategory(r))
                }
                else {
                    // dispatch(ErrorCreatCategory())
                }
            })
            .catch(error => {
                // dispatch(ErrorCreatCategory())
            });
    }
}