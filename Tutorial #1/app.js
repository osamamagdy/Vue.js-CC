

///This called component
const app = Vue.createApp({
    //Here we pass the root component 
    //that will be controlling the app section in the web page
    //the app section is the element with id used in mount 
    
    
    //this template is a code written in html that will appear (injected) by Vue 
    //it will appear in the section with the id we used in mount
    //template : '<h2>I am a template written inside Vue</h2>'

    //Or you can just write this html code inside the section and control it via here
    //Note that the two methods can't be used together
    //the template in here overrides the one in htnl file



    //The data() function handles variables that will be used in html
    
    data() {


        //This what you return to the html every time you render it
        return {
            //Variable_Name : the value
            Book_Title: 'The final Empire',
            Author_name : 'Brandon Sunders',
            Age : 45,
            showBox : true
        }
    },



    ///This is called property and it have the functions inside it
    methods:{
        changeTitle(){
            console.log('You clicked on a vue method');
    ///You MUST use {{this}} 
            this.Book_Title = 'The Falling Empire'

        },

        changeTitleAgain(new_name){

            this.Book_Title = new_name;

        }

        ,toggleShowBox()
        {
            this.showBox = ! this.showBox;
        }
        
    }


})

////This makes our Vue app controls the html div with id=app
app.mount('#app')
