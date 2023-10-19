import { StartCreatPorduct, StartCreataStoryTeam, StartCreateCategory, StartDeletCategory, StartGetBreands, StartGetCategory, StartGetCollections, StartGetForAge, StartGetGenders, StartGetPlatofrms, StartGetProducts, StartGetSinglProfil, StartLogin, StartUpdateProduct } from "./StartAction";
import { SuccessCreatProduct, SuccessCreateCategory, SuccessCreateStoryTeam, SuccessDelectCategory, SuccessGetBreand, SuccessGetCategory, SuccessGetCollections, SuccessGetForAge, SuccessGetGenders, SuccessGetPlatforms, SuccessGetProducts, SuccessGetSinglProfil, SuccessLogin, SuccessUpdateCategory, SuccessUpdateProduct } from "./SuccessAction"
import { ErrorCreatCategory, ErrorCreatProduct, ErrorCreatStoryTeam, ErrorDeletCategory, ErrorGetBreand, ErrorGetCategory, ErrorGetCollections, ErrorGetForAge, ErrorGetGenders, ErrorGetPlatforms, ErrorGetPorducts, ErrorGetSinglProfil, ErrorLogin, ErrorUpdateCategory, ErrorUpdateProduct } from "./errorAction";

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
    formdata.append("name", data.name)
    formdata.append("price", data.price);
    formdata.append("discount", data.discount);
    formdata.append("product_count", data.product_count);
    formdata.append("volume", data.volume);
    formdata.append("vendor_code", data.vendor_code);
    formdata.append("skin_type", data.skin_type);
    formdata.append("parent_category_id", data.parent_category_id);
    formdata.append("category_id", data.category_id);
    formdata.append("brands_id", data.brands_id);
    formdata.append("gender_id", data.gender_id);
    formdata.append("for_age_id", data.for_age_id);
    formdata.append("platform_id", data.platform_id);
    formdata.append("description", data.description);
    formdata.append("characteristics", data.characteristics);
    formdata.append("compound", data.compound);

    for (const image of data.photos) {
        formdata.append("photos[]", image);
    }
    for (const podborki of data.podborki) {
        formdata.append("podborki[]", podborki);
    }

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    return (dispatch) => {
        dispatch(StartCreatPorduct())
        fetch(`${api}/create_product`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessCreatProduct(r))
                }
                else {
                    dispatch(ErrorCreatProduct())
                }
            })
            .catch(error => {
                dispatch(ErrorCreatProduct())
            });
    }
}

export const GetAllProducts = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
    };
    return (dispatch) => {
        dispatch(StartGetProducts())
        fetch(`${api}/get_products`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetProducts(r.data))
                }
                else {
                    dispatch(ErrorGetPorducts())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetPorducts())
            });
    }
}

export const DelectPorducetsAction = (data, page) => {
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
        fetch(`${api}/delete_product`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(GetAllProducts({ page: page }))
                }
            })
            .catch((error) => {
            });
    }
}

export const GetSinglProductAction = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data)
    };
    return (dispatch) => {
        dispatch(StartGetSinglProfil())
        fetch(`${api}/single_page_product`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetSinglProfil(r.data))
                }
                else {
                    dispatch(ErrorGetSinglProfil())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetSinglProfil())
            });
    }
}

export const UpdateProduct = (data) => {
    let token = localStorage.getItem('token')
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("name", data.name)
    formdata.append("price", data.price);
    formdata.append("discount", data.discount);
    formdata.append("product_count", data.product_count);
    formdata.append("volume", data.volume);
    formdata.append("vendor_code", data.vendor_code);
    formdata.append("skin_type", data.skin_type);
    formdata.append("parent_category_id", data.parent_category_id);
    formdata.append("category_id", data.category_id);
    formdata.append("brands_id", data.brands_id);
    formdata.append("gender_id", data.gender_id);
    formdata.append("for_age_id", data.for_age_id);
    formdata.append("platform_id", data.platform_id);
    formdata.append("description", data.description);
    formdata.append("characteristics", data.characteristics);
    formdata.append("compound", data.compound);
    formdata.append("product_id", data.product_id)

    for (const image of data.photos) {
        formdata.append("photos[]", image);
    }
    for (const podborki of data.podborki) {
        formdata.append("podborki[]", podborki);
    }
    for (const dpodborki of data.deleted_podborki) {
        formdata.append("deleted_podborki[]", JSON.stringify(dpodborki));

    }
    for (const dimg of data.deleted_photo) {
        formdata.append("deleted_photo[]", dimg);
    }
    // deleted_podborki

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    return (dispatch) => {
        dispatch(StartUpdateProduct())
        fetch(`${api}/update_product`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessUpdateProduct(r))
                }
                else {
                    dispatch(ErrorUpdateProduct())
                }
            })
            .catch(error => {
                dispatch(ErrorUpdateProduct())
            });
    }
}

export const CreateStoryTeamAction = (data) => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    var formdata = new FormData();
    formdata.append("name", "22");
    formdata.append("photo", data.img);
    formdata.append("order", "2");
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    return (dispatch) => {
        dispatch(StartCreataStoryTeam())
        fetch(`${api}/create_story_theme`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessCreateStoryTeam(r.data))
                }
                else {
                    dispatch(ErrorCreatStoryTeam())
                }
            })
            .catch((error) => {
                dispatch(ErrorCreatStoryTeam())
            });
    }
}