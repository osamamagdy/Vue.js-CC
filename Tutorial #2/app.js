const app = Vue.createApp({    
    data() {

        return {
            //Define an array in Vue
            Books :
            [
                {Book_Title : 'Name of the Wind', Author_name : 'Patrick Rothfuss' , img:'/assets/1.jpg', isFav:true},
                {Book_Title : 'The Way of Kings', Author_name : 'Brandond Sanderson' , img:'/assets/2.jpg', isFav:false},
                {Book_Title : 'The final Empire', Author_name : 'Brandon Sunderson' , img:'/assets/3.jpg' , isFav:true},
            ],
            url:"https://www.google.com",
            showBox : true,
            x : 0,
            y : 0
        }
    },

    methods:{

        toggleShowBox()
        {
            this.showBox = ! this.showBox;
        }
     
        //The first param --> event object with loads of information about the event we called its handler
        ,handlemouseevent(e , num)
        {
        }

        ,handlemousemove(e)
        {
            this.x = e.offsetX;
            this.y = e.offsetY;

        }

    }


    //Computed property is to return other values than values in data() property depending on a certain condition
    //Here we return only the books that are favourite 
    //.filter((book) => book.isFav) is a JS method
    ,computed: {
      filteredBooks(){

        return this.Books.filter((book) => book.isFav)

      }  
    }

})

app.mount('#app')
