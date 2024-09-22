const API_URL="/api/movies";

//function too fetch all the movies in the list
export const getAllMovies = async () => {
    try{
        const response =await fetch(API_URL);
        if(!response.ok){
            throw new  Error("Error fetching movies");
        }
        
        const data= await response.json();
        return data;
    }catch(error){
        console.error("Failed to fetch movies",error);
        return [];
    }
};

//function to add a new movie

export const addMovie = async (movie) => {
    try{
       const response = await fetch(API_URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(movie),
       });

       if(!response.ok){
         throw new Error("Error adding movie")
       }

       const data= await response.json();
       return data;
    }catch(error){
        console.error("Failed to add movie:",error);
    }
};

//delete a movie by title

export const deleteByTitle = async (title) => {
    try{
        const response = await fetch(`${API_URL}/title/${title}`,{
            method:"DELETE",
        });
        console.log(`Delete response:`,response);
       if(!response.ok){
        throw new Error("Error deleting movie");
       }
    }catch(error){
        console.error(`Failed to delete movie ${title}`,error);
    }
};

//Fetch a movie by title

export const getMovieByTitle =  async(title) => {
    try{
        const response = await fetch(`${API_URL}/title/${title}`);
        if(!response.ok){
            throw new Error("Error fetching movie by title");
        }
        const data= await response.json();
        return data;
    }catch(error){
        console.error(`Failed to fetch movie with title ${title}:`,error);
    }
};

//Update a movie by title
export const updateMovie = async(title,updateMovie) => {
    try{
        const response = await fetch(`${API_URL}/title/${title}`,{
            method: "PUT",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(updateMovie),
        });

            if(!response.ok){
                throw new Error("Error updating movie")
            }
            const data=await response.json();
            return data;
    }catch(error){
        console.error(`Failed to update movie ${title}`,error);
    }
};