import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  movie_name :any
  Released:any
  pic:any
  ratings:any
  actors:any
  plot:any


    logo(){
        window.location.reload();
    }

    search(){
        var movie_name = (document.getElementById('movie_name')as HTMLInputElement ).value
        // console.log(movie_name)


        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=a1bbc6fd&t=${movie_name}`).then(movie => movie.json()).then(mov_details =>this.display(mov_details))

        
        
    }

    display(mov_details:any){  
        console.log(mov_details,mov_details["Title"],mov_details["Year"]);    
        this.movie_name = `Movie Name : ${mov_details["Title"]} `
        this.Released = `Release Date : ${mov_details["Released"] } ` 
        this.ratings = `Rating  : ${mov_details["imdbRating"]}`
        this.actors = `Actors : ${mov_details["Actors"]}`
        this.plot = `Plot : ${mov_details["Plot"]}`
    }
}
