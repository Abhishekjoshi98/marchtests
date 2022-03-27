Q. write a javascript program to display the reading status(i.e,display book name,author name,reading status)of the following books.
  
  var library = [                                                                                       
                 { 
                   author:"bill gates" , 
                   title:"The road ahead",
                   readingstatus:true
                 },                                  
                   
                 { 
                   author:"steve jobs",
                   title:"walter isaacson",
                   readingstatus:true
                 },                        
                          
                { 
                  author:"suzanne collins",
                  title:'mockingjay:the final book of the hunger games',
                  readingstatus:false
                }   
              ];

Ans:

     for ( var i = 0 ; i<library.length ; i++)
     {  
       console.log ( "book = " +library[i].title  + " ; " + "author = " +library[i].author 
       + " ; " + "readingstatus = " +library[i].readingstatus);
       
       if(library[i].readingstatus){
           console.log("already read the book");
       }
       else{
         console.log("still not done");
       }
     }

output:

    book = The road ahead ; author = bill gates ; readingstatus = true already read the book 
    book = walter isaacson ; author = steve jobs ; readingstatus = true already read the book
    book = mockingjay:the final book of the hunger games ; author = suzanne collins ;   readingstatus = false still not done
 
