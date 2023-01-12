const API = "https://www.themoviedb.org/"

export function get(path){
    return fetch(API + path,{
        headers:{
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWV1MWVhOGI4MTY0YSIsInN1YiU6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93rbzr6-rxD0760tssAAaSppyjRv9anArs", 
            "Content-Type": "application/json; charset=utf-8"
        }
    }).then((result) => result.json());
}