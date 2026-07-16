import axios from "axios";

const API_KEY = "d5f96d52";

const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async(movieName) =>{
const response = await axios.get(BASE_URL , {
    params:{
        apikey: API_KEY,
        s:movieName,
    },
});

return response.data;
};

export const getMovieById = async (id) =>{
    const response = await axios.get(BASE_URL ,{
        params:{
            apikey:API_KEY,
            i:id
        },
    });

    return response.data;
}